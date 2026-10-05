/**
 * Omorrfiya — Google Sheets lead sync
 *
 * This is NOT part of the Next.js app — it runs on Google's servers as a
 * standalone Apps Script bound to a Google Sheet. Deploy steps below.
 *
 * It matches the payload sent by app/api/submissions/route.ts's pushToSheet():
 *   { sheet, timestamp, source, name, phone, email, concern, pageUrl, url,
 *     telecrm, rating, callback, isReview, headers, row }
 * where `row` is already ordered to match `headers`.
 *
 * `sheet` is optional and names the tab to write to:
 *   - omitted            → main "Leads" tab   (['Timestamp','Source','Name','Phone','Concern','URL','TeleCRM'])
 *   - "ht-leads"         → hair-transplant tab (['Timestamp','Source','Name','Phone','Email','URL','TeleCRM'])
 *   - "Review Leads"     → review page tab     (['Timestamp','Source','Name','Phone','Rating','Callback','Message','URL','TeleCRM'])
 * Each tab gets its header row written automatically the first time it is used.
 *
 * ── Deploy ──────────────────────────────────────────────────────────────
 * 1. Open (or create) the Google Sheet you want leads to land in.
 * 2. Extensions → Apps Script. Delete any starter code, paste this file's
 *    contents in, and save (the project name doesn't matter).
 * 3. Deploy → New deployment → gear icon → "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Click Deploy, authorise the permissions Google asks for, then copy the
 *    Web app URL (it ends in /exec).
 * 5. Paste that URL into .env.local as:
 *      GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
 * 6. Restart `npm run dev` (or redeploy) so the new env var is picked up.
 *
 * Whenever you edit this script afterwards, use Deploy → Manage deployments
 * → edit (pencil) → New version, otherwise the live /exec URL keeps running
 * the old code.
 * ─────────────────────────────────────────────────────────────────────────
 */

// Default tab for leads that don't name a `sheet` in the payload.
const SHEET_NAME = "Leads";

// Fallback header rows per tab, used only if the payload omits `headers`.
const DEFAULT_HEADERS = ["Timestamp", "Source", "Name", "Phone", "Concern", "URL", "TeleCRM"];
const HT_HEADERS = ["Timestamp", "Source", "Name", "Phone", "Email", "URL", "TeleCRM"];
const REVIEW_TAB = "Review Leads";
const REVIEW_HEADERS = ["Timestamp", "Source", "Name", "Phone", "Rating", "Callback", "Message", "URL", "TeleCRM"];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const tabName = data.sheet && String(data.sheet).trim() ? String(data.sheet).trim() : SHEET_NAME;
    const sheet = getSheet_(tabName);

    // Write the header row once, the first time the tab is used.
    if (sheet.getLastRow() === 0) {
      const fallbackHeaders =
        tabName === "ht-leads" ? HT_HEADERS : tabName === REVIEW_TAB ? REVIEW_HEADERS : DEFAULT_HEADERS;
      sheet.appendRow(data.headers && data.headers.length ? data.headers : fallbackHeaders);
    }

    // Prefer the pre-built row array the website already sends (kept in
    // sync with `headers`); fall back to individual fields just in case.
    let row;
    if (data.row && data.row.length) {
      row = data.row;
    } else if (tabName === "ht-leads") {
      row = [
        data.timestamp || new Date(),
        data.source || "",
        data.name || "",
        data.phone || "",
        data.email || "",
        data.pageUrl || data.url || "",
        data.telecrm || "",
      ];
    } else if (tabName === REVIEW_TAB) {
      row = [
        data.timestamp || new Date(),
        data.source || "",
        data.name || "",
        data.phone || "",
        data.rating ? data.rating + "/5" : "",
        data.callback || "",
        data.concern || "",
        data.pageUrl || data.url || "",
        data.telecrm || "",
      ];
    } else {
      row = [
        data.timestamp || new Date(),
        data.source || "",
        data.name || "",
        data.phone || "",
        data.concern || "",
        data.pageUrl || data.url || "",
        data.telecrm || "",
      ];
    }

    sheet.appendRow(row);

    return jsonResponse_({ success: true });
  } catch (err) {
    return jsonResponse_({ success: false, error: String(err) });
  }
}

function doGet() {
  // Lets you sanity-check the deployment by opening the /exec URL directly
  // in a browser — it should show this JSON instead of an error page.
  return jsonResponse_({ status: "ok", message: "Omorrfiya lead submission endpoint is live." });
}

function getSheet_(name) {
  const tabName = name || SHEET_NAME;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(tabName);
  if (!sheet) sheet = ss.insertSheet(tabName);
  return sheet;
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
