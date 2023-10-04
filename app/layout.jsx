import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aaron Alexander",
  description:
    "Hey, I'm Aaron! I am a senior at UNT who is majoring in Computer Science and Chemistry. I recently interned at Zendesk, and am currently looking for fulltime SWE positions.",
  viewport: { width: "device-width", initialScale: 1 },
  icons: [{ rel: "shortcut icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
