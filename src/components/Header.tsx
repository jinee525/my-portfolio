"use client";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // 상단 근처에서는 항상 보이기
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 아래로 스크롤하고 있고 100px 이상일 때 숨기기
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // 위로 스크롤하고 있을 때 보이기
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(controlNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
    };
  }, [lastScrollY]);

  const handleBackClick = () => {
    router.back();
  };

  return (
    <HeaderContainer isVisible={isVisible}>
      <HeaderContent>
        {!isHome && (
          <BackButton onClick={handleBackClick}>
            <BackIcon>←</BackIcon>
            <BackText>뒤로가기</BackText>
          </BackButton>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: transparent;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
  transform: translateY(${(props) => (props.isVisible ? "0" : "-100%")});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  color: #333;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const BackIcon = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const BackText = styled.span`
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;
