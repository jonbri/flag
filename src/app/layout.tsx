import { ReactNode } from "react";
import { Ubuntu as Font } from "next/font/google";
import "@/global.scss";

const font = Font({ subsets: ["latin"], weight: "300" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>flag</title>
        <meta name="og:title" content="flag" />
        <meta name="description" content="flag" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
