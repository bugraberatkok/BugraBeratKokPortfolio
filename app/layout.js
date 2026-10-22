import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import "./globals.css";

// Display + Text cuts of one family, mirroring Meta's Optimistic Display/Text split.
const display = Wix_Madefor_Display({
  variable: "--font-display-face",
  subsets: ["latin", "latin-ext"],
});

const text = Wix_Madefor_Text({
  variable: "--font-text-face",
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "Buğra Berat Kök | Software Engineering & Full-Stack Development",
  description: "Full-stack and backend development, software architecture, and AI-integrated systems. Explore Buğra Berat Kök’s projects, internships, education, and technical experience.",
};

export const viewport = {
  themeColor: "#FAF9FD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${text.variable}`}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
