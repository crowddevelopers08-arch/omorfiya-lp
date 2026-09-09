import type { Metadata } from "next";
import { BookingModalProvider } from "@/component/booking-modal-context";
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
      <body className="min-h-full flex flex-col">
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}
