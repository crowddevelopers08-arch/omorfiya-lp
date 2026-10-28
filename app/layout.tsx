import type { Metadata } from "next";
import { BookingModalProvider } from "@/component/booking-modal-context";
import PageLoader from "@/component/page-loader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omorfiya | Body Contouring & Hair Restoration",
  description: "Doctor-led body contouring and hair restoration treatments with personalised care.",
  icons: {
    icon: "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955320/omorfiyslogo.webp",
    shortcut: "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955320/omorfiyslogo.webp",
    apple: "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788955320/omorfiyslogo.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCT9MTR3');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCT9MTR3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <PageLoader />
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}
