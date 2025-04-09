"use client";
/** @jsxImportSource @emotion/react */
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectsCard";
import { Container } from "@/styles/layout";
import { SectionTitle } from "@/styles/text";
import { careers } from "@/data/careers";

export default function CareerDetailPage() {
  const { careerId } = useParams(); // 현재 careerId
  const career = careers.find((c) => c.id === careerId);
  const filteredProjects = projects.filter((p) => p.careerId === careerId); // 필터링!

  if (!career) return <p>존재하지 않는 커리어입니다.</p>;

  return (
    <Container>
      <h1>{career.company}</h1>
      {career.pre && (
        <h3>
          {career.pre.position} · {career.pre.period}
        </h3>
      )}
      <h3>
        {career.position} · {career.period}
      </h3>
      <br />
      <p>{career.summary}</p>

      <SectionTitle>📁 프로젝트</SectionTitle>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project} // props 구조 일치 시 spread로 깔끔하게!
          />
        ))
      ) : (
        <p>등록된 프로젝트가 없습니다.</p>
      )}
    </Container>
  );
}
