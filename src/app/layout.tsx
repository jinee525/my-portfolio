"use client";
/** @jsxImportSource @emotion/react */
import "./globals.css";
import { ReactNode } from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "./globalStyles";
import Chatbot from "@/components/Chatbot";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Global styles={globalStyles} />
        <Header />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
