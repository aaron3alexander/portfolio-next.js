import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aaron Alexander",
  description:
    "The personal website of Aaron Alexander. Interested in fullstack and frontend development.",
  viewport: { width: "device-width", initialScale: 1 },
  icons: [{ rel: "shortcut icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Aaron Alexander</title>
        <meta
          name="description"
          content="The personal website of Aaron Alexander. Interested in fullstack and frontend development."
        />
      </head>
      <body className={`${inter.className} `}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
