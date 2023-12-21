import "./globals.css";
import { gabarito, caslon } from "@/app/ui/fonts";

export const metadata = {
  title: "SKIBACS Instructor Field Manual",
  description: "The on-snow field manual for SKIBACS instructors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gabarito.variable} ${caslon.variable}`}>
      <body>{children}</body>
    </html>
  );
}
