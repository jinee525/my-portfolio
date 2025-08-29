"use client";
/** @jsxImportSource @emotion/react */
import { careers } from "@/data/careers";
import CareerCard from "@/components/CareerCard";
import { Container } from "@/styles/layout";
import { Description, SectionTitle, Subtitle, Title } from "@/styles/text";
import EducationSection from "@/components/EducationSection";
import { intro } from "@/data/intro";

export default function Home() {
  return (
    <Container>
      <Title>안녕하세요! 👩🏻‍💻</Title>
      <Subtitle>
        서비스와 함께 성장하고 싶은 프로덕트 개발자 박유진입니다.
      </Subtitle>
      <Description>{intro}</Description>

      <SectionTitle>💼 커리어</SectionTitle>
      {careers.map((career) => (
        <CareerCard
          key={career.id}
          id={career.id}
          pre={career.pre || null}
          company={career.company}
          position={career.position}
          period={career.period}
          summary={career.summary}
        />
      ))}

      <EducationSection />
    </Container>
  );
}
