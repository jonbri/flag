import { ReactNode } from "react";
import Link from "next/link";
import { Ubuntu as Font } from "next/font/google";
import { links } from "@/data";
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
      <body className={font.className}>
        <div>
          <h1>
            <a href="./">Flag Football</a>
          </h1>
          <div id="layout">
            <div id="header">
              <ul>
                <li>
                  <Link href={`..`}>Home</Link>
                </li>
                <li>
                  <Link href={`./season`}>Seasons</Link>
                </li>
                <li>
                  <Link href={`./player`}>Players</Link>
                </li>
              </ul>
            </div>
            {children}
            <div id="footer">
              <div className="links">
                <ul>
                  {links.map(({ name, url }) => (
                    <li key={name}>
                      <a href={url}>{name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <ul>
                <li>
                  <a href="https://www.xlapex.com/">xlapex.com</a>
                </li>
                <li>
                  <a href="https://github.com/jonbri/flag/">GitHub</a>
                </li>
                <li>
                  <a href="https://jonbri.github.io/keep/">Keep</a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1-BKZUg2guhXzzY0v8dZDL5hMYnXFks2b">
                    drive
                  </a>
                </li>
              </ul>
              <div id="login">trxxysss@y*h**/1414Du</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
