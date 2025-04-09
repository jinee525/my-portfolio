/** @jsxImportSource @emotion/react */
import { gameProjects, UXProjects } from "@/data/univ";
import { SectionTitle } from "@/styles/text";
import styled from "@emotion/styled";
import Image from "next/image";

type ProjectData = {
  thumbnail: string;
  title: string;
  desc: string;
  role?: string;
  type?: string;
  techInfo: string;
  link: string;
};

export default function EducationSection() {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>🎓 Education</SectionTitle>
        <UnivInfo>
          <li>
            이화여자대학교 | 컴퓨터공학(전공), 스크랜튼학부
            디지털인문학(복수전공)
          </li>
          <li>4.2 / 4.5 (총 151학점)</li>
          <li>TOEIC 945, TOEIC Speaking Level 7</li>
        </UnivInfo>
      </Section>

      <Section>
        <SectionTitle>🎮 Game Projects</SectionTitle>
        <FlexContainer>
          {gameProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </FlexContainer>
      </Section>

      <Section>
        <SectionTitle>🎨 UX/UI Projects</SectionTitle>
        <FlexContainer>
          {UXProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </FlexContainer>
      </Section>
    </Wrapper>
  );
}

function ProjectCard({
  thumbnail,
  title,
  desc,
  role,
  type,
  techInfo,
  link,
}: ProjectData) {
  return (
    <Card href={link} target="_blank" rel="noopener noreferrer">
      <Thumbnail>
        <Image src={thumbnail} alt={title} width={280} height={160} />
      </Thumbnail>
      <div>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDesc>{desc}</ProjectDesc>
        {role && (
          <Meta>
            <strong>역할:</strong> {role}
          </Meta>
        )}
        {type && (
          <Meta>
            <strong>유형:</strong> {type}
          </Meta>
        )}
        <Meta>
          <strong>기술:</strong> {techInfo}
        </Meta>
      </div>
    </Card>
  );
}

const Wrapper = styled.div`
  padding: 2rem 0;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const UnivInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: #444;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Card = styled.a`
  width: 240px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 1rem;
  padding-bottom: 1.5rem;
  text-decoration: none;
  color: inherit;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0.5rem 0;
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #444;
  margin-bottom: 0.5rem;
`;

const Meta = styled.small`
  display: block;
  font-size: 0.85rem;
  color: #666;
`;

const Thumbnail = styled.div`
  margin-bottom: 0.8rem;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
