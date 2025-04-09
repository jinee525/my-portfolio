"use client";
/** @jsxImportSource @emotion/react */
import "./globals.css";
import { ReactNode } from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "./globalStyles";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Global styles={globalStyles} />
        {children}
      </body>
    </html>
  );
}
