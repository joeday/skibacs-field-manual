import "./globals.css";
import { jost, caslon } from "./ui/fonts";

export const metadata = {
  title: "SKIBACS Instructor Field Manual",
  description: "The on-snow field manual for SKIBACS instructors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${caslon.variable}`}>
      <body>{children}</body>
    </html>
  );
}
