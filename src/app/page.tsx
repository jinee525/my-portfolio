"use client";
/** @jsxImportSource @emotion/react */
import { careers } from "@/data/careers";
import CareerCard from "@/components/CareerCard";
import { Container } from "@/styles/layout";
import { Description, SectionTitle, Subtitle, Title } from "@/styles/text";
import EducationSection from "@/components/EducationSection";

export default function Home() {
  return (
    <Container>
      <Title>안녕하세요! 👩🏻‍💻</Title>
      <Subtitle>
        서비스와 함께 성장하고 싶은 프로덕트 개발자 박유진입니다.
      </Subtitle>
      <Description>
        {
          "사람을 위한 프로덕트를 만드는 개발자가 되고자 컴퓨터공학을 전공으로 하며 디지털 인문학을 복수 전공했습니다. 디자인 수업을 통해 유저 분석과 UX/UI에 대해 배우고 프로젝트를 진행하며, 사용자 중심으로 사고하는 방법을 익혔습니다.\n실제 비즈니스 성장에 기여하고 개발 실력을 빠르게 성장시키기 위해 스타트업에서 풀스택 개발자로 커리어를 시작했습니다. CTO와 개발자 2인으로 구성된 작은 개발팀에서 시작해 PM, 디자이너가 포함된 7인 규모의 프로덕트 팀으로 함께 성장하며, 개발뿐 아니라 프로덕트 전반에 대해 고민하는 개발자로 성장할 수 있었습니다. 기획부터 구현, 운영(유지보수)까지 다양한 프로젝트를 주도하며 애자일하게 일하는 방법과 직군 간 원활한 커뮤니케이션 방법을 배웠습니다.\n2년간 하나의 서비스를 기획, 성장, 안정화, 그리고 확장까지 경험하며, 서비스의 전 과정을 완주했다는 깊은 성취감을 느꼈습니다. 이후 클라우드 인프라에 대한 관심으로 LG CNS에 합류하여, 프라이빗 클라우드 기반 VDI 서비스를 약 2년간 운영했습니다.\n서비스에 대한 오너십을 가지고 사람을 위한 프로덕트를 개발하는 일이 제가 잘할 수 있고, 진심으로 하고 싶은 일이라는 것을 깨달았습니다. 이러한 확신을 바탕으로 팀을 이동하게 되었고, 현재는 B2C 서비스를 제공하는 팀에서 디자이너, 기획자, 데이터 분석가, 마케터 등 다양한 직군의 동료들과 협업하며 서비스 전반에 대해 함께 고민하며 개발하고 있습니다."
        }
      </Description>

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
