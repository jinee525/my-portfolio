/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

interface ProjectCardProps {
  title: string;
  content: string;
  boundary: string[];
  tech: string[];
  url?: string;
  preview?: string[];
  solutions: string[][];
}

export default function ProjectCard({
  title,
  content,
  boundary,
  tech,
  solutions,
}: ProjectCardProps) {
  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        {boundary.map((b) => (
          <BoundaryTag key={b}>{b}</BoundaryTag>
        ))}
      </Header>

      <Content>{content}</Content>

      <InfoRow>
        <Label>기술 스택</Label>
        <TagGroup>
          {tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </TagGroup>
      </InfoRow>

      {solutions.length > 0 && (
        <>
          <SectionTitle>🧩 문제 해결 사례</SectionTitle>
          <SolutionTable>
            <thead>
              <tr>
                <th>Needs & Problems</th>
                <th>Solutions</th>
              </tr>
            </thead>
            <tbody>
              {solutions.map(([problem, solution], idx) => (
                <tr key={idx}>
                  <td>{problem}</td>
                  <td>{solution}</td>
                </tr>
              ))}
            </tbody>
          </SolutionTable>
        </>
      )}
    </Card>
  );
}

const Card = styled.div`
  padding: 1.8rem;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  background-color: #ffffff;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a1a1a;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1.2rem;
`;

const InfoRow = styled.div`
  margin: 1rem 0;
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
  display: block;
  margin-bottom: 0.3rem;
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const BoundaryTag = styled.span`
  border: 1px solid #ccc;
  color: #666;
  background-color: transparent;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const TechTag = styled.span`
  background: #f3f3f3;
  color: #555;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
`;

const SectionTitle = styled.h4`
  margin-top: 2rem;
  font-size: 1.1rem;
  color: #222;
`;

const SolutionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    border: 1px solid #e0e0e0;
    padding: 0.8rem;
    text-align: left;
    vertical-align: top;
    font-size: 0.95rem;
  }

  th {
    background-color: #f5f5f5;
    color: #333;
    font-weight: 600;
  }

  tr:hover td {
    background-color: #fafafa;
  }
`;
