"use client";
/** @jsxImportSource @emotion/react */
import { useParams } from "next/navigation";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectsCard";
import { Container } from "@/styles/layout";
import { SectionTitle } from "@/styles/text";
import { careers } from "@/data/careers";
import styled from "@emotion/styled";

export default function CareerDetailPage() {
  const { careerId } = useParams(); // 현재 careerId
  const [selectedBoundary, setSelectedBoundary] = useState<string>("전체");

  const career = careers.find((c) => c.id === careerId);
  const filteredProjects = projects.filter((p) => p.careerId === careerId); // 필터링!

  // boundary 필터링
  const boundaryFilteredProjects =
    selectedBoundary === "전체"
      ? filteredProjects
      : filteredProjects.filter((project) =>
          project.boundary.includes(selectedBoundary)
        );

  // 사용 가능한 boundary 목록 추출
  const availableBoundaries = Array.from(
    new Set(filteredProjects.flatMap((project) => project.boundary))
  );

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

      {filteredProjects.length > 0 && (
        <FilterContainer>
          <FilterButton
            active={selectedBoundary === "전체"}
            onClick={() => setSelectedBoundary("전체")}
          >
            전체 ({filteredProjects.length})
          </FilterButton>
          {availableBoundaries.map((boundary) => {
            const count = filteredProjects.filter((p) =>
              p.boundary.includes(boundary)
            ).length;
            return (
              <FilterButton
                key={boundary}
                active={selectedBoundary === boundary}
                onClick={() => setSelectedBoundary(boundary)}
              >
                {boundary} ({count})
              </FilterButton>
            );
          })}
        </FilterContainer>
      )}

      {boundaryFilteredProjects.length > 0 ? (
        boundaryFilteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project} // props 구조 일치 시 spread로 깔끔하게!
          />
        ))
      ) : filteredProjects.length > 0 ? (
        <p>선택한 영역에 해당하는 프로젝트가 없습니다.</p>
      ) : (
        <p>등록된 프로젝트가 없습니다.</p>
      )}
    </Container>
  );
}

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  border: 1px solid ${(props) => (props.active ? "#667eea" : "#ccc")};
  color: ${(props) => (props.active ? "#667eea" : "#666")};
  background-color: ${(props) => (props.active ? "#f8f9ff" : "transparent")};
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #667eea;
    color: #667eea;
    background-color: #f8f9ff;
  }
`;
