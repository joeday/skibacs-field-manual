import { Jost, Libre_Caslon_Text } from "next/font/google";

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const caslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-caslon",
});
