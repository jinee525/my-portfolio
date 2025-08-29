"use client";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleBackClick = () => {
    router.back();
  };

  return (
    <HeaderContainer>
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

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: transparent;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
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
