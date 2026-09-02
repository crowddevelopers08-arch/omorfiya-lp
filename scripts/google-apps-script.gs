/**
 * Omorrfiya — Google Sheets lead sync
 *
 * This is NOT part of the Next.js app — it runs on Google's servers as a
 * standalone Apps Script bound to a Google Sheet. Deploy steps below.
 *
 * It matches the payload sent by app/api/submissions/route.ts's pushToSheet():
 *   { timestamp, source, name, phone, concern, pageUrl, url, telecrm,
 *     rating, callback, isReview, headers, row }
 * where `row` is already ordered to match `headers`
 * (['Timestamp','Source','Name','Phone','Concern','URL','TeleCRM']).
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

// Change this if you want leads written to a specific tab instead of the
// spreadsheet's first/active sheet.
const SHEET_NAME = "Leads";

const DEFAULT_HEADERS = ["Timestamp", "Source", "Name", "Phone", "Concern", "URL", "TeleCRM"];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet_();

    // Write the header row once, the first time the sheet is used.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(data.headers && data.headers.length ? data.headers : DEFAULT_HEADERS);
    }

    // Prefer the pre-built row array the website already sends (kept in
    // sync with `headers`); fall back to individual fields just in case.
    const row =
      data.row && data.row.length
        ? data.row
        : [
            data.timestamp || new Date(),
            data.source || "",
            data.name || "",
            data.phone || "",
            data.concern || "",
            data.pageUrl || data.url || "",
            data.telecrm || "",
          ];

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

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
