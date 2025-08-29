"use client";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300) {
        // 300px 이상 스크롤했을 때 버튼 표시
        setIsVisible(true);
      } else {
        // 그 이하일 때는 숨김
        setIsVisible(false);
      }

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(toggleVisibility);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton isVisible={isVisible} onClick={scrollToTop}>
      <ArrowIcon>↑</ArrowIcon>
    </ScrollButton>
  );
}

const ScrollButton = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 120px; /* 챗봇 버튼 위쪽에 위치 */
  right: calc(50% - 400px - 2rem); /* max-width 800px 기준으로 우측에 위치 */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  z-index: 999;

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};

  &:hover {
    transform: ${(props) =>
      props.isVisible
        ? "translateY(-2px) scale(1.05)"
        : "translateY(20px) scale(0.8)"};
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 900px) {
    /* 화면이 작아지면 우측 가장자리로 이동 */
    right: 2rem;
  }

  @media (max-width: 768px) {
    right: 1rem;
    bottom: 100px;
    width: 45px;
    height: 45px;
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1;
`;
