import { Gabarito, Libre_Caslon_Text } from "next/font/google";

export const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
});

export const caslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-caslon",
});
