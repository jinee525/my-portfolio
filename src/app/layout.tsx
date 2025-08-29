"use client";
/** @jsxImportSource @emotion/react */
import "./globals.css";
import { ReactNode } from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "./globalStyles";
import Chatbot from "@/components/Chatbot";
import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <body>
        <Global styles={globalStyles} />
        {!isHome && <Header />}
        <MainContent isHome={isHome}>{children}</MainContent>
        {/* <ScrollToTop /> */}
        <Chatbot />
      </body>
    </html>
  );
}

const MainContent = styled.main<{ isHome: boolean }>`
  padding-top: 60px; /* 모든 페이지에서 동일한 상단 여백 */
`;
