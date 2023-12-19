import "./globals.css";

export const metadata = {
  title: "SKIBACS Instructor Field Manual",
  description: "The on-snow field manual for SKIBACS instructors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
