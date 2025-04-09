"use client";
/** @jsxImportSource @emotion/react */
import { careers } from "@/data/careers";
import CareerCard from "@/components/CareerCard";
import { Container } from "@/styles/layout";
import { Description, SectionTitle, Subtitle, Title } from "@/styles/text";

export default function Home() {
  return (
    <Container>
      <Title>안녕하세요! 👋</Title>
      <Subtitle>프론트엔드 개발자 OOO입니다.</Subtitle>
      <Description>
        사용자 경험을 중심으로, 빠르고 안정적인 웹 서비스를 만드는 데 관심이
        많습니다. React, TypeScript, Next.js, Emotion을 주로 사용하며, 협업과
        커뮤니케이션을 중시합니다.
      </Description>

      <SectionTitle>💼 커리어</SectionTitle>
      {careers.map((career) => (
        <CareerCard
          key={career.id}
          id={career.id}
          company={career.company}
          position={career.position}
          period={career.period}
          summary={career.summary}
        />
      ))}
    </Container>
  );
}
