// src/app/globalStyles.ts
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    background-color: #f8f8f8;
    color: #222;
    font-family: "Pretendard", sans-serif;
  }

  a {
    color: var(--primary);
    font-weight: 500;
    text-decoration: none;
  }
`;
