import { Outfit, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const tanker = localFont({
  src: "../../public/Fonts/WEB/fonts/Tanker-Regular.woff2",
  variable: "--font-tanker",
  weight: "400",
  style: "normal",
  display: "swap",
});

const clash = localFont({
  src: "../../public/Fonts/WEB/fonts/ClashDisplay-Regular.woff2",
  variable: "--font-clashdisplay",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata = {
  title: "Wave — Evolving Brand Design",
  description:
    "Wave is a digital agency crafting brand identity, UI/UX, web development and digital marketing for teams that want to be remembered.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} ${tanker.variable} ${clash.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
