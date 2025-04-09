/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Link from "next/link";

interface CareerCardProps {
  id: string;
  company: string;
  pre: { position: string; period: string } | null;
  position: string;
  period: string;
  summary: string;
}

export default function CareerCard({
  id,
  company,
  pre,
  position,
  period,
  summary,
}: CareerCardProps) {
  return (
    <Card href={`/careers/${id}`}>
      <Header>
        <Company>{company}</Company>
        {pre && (
          <Period>
            {pre.position} · {pre.period}
          </Period>
        )}
        <Period>
          {position} · {period}
        </Period>
      </Header>
      <Summary>{summary}</Summary>
      <MoreButton>프로젝트 보러가기</MoreButton>
    </Card>
  );
}

const Card = styled(Link)`
  display: block;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
  margin-bottom: 1.2rem;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

const Header = styled.div`
  margin-bottom: 0.7rem;
`;

const Company = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
`;

const Period = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.3rem;
`;

const Summary = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

const MoreButton = styled.button`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: 0;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #333; /* 어두운 회색 텍스트 */
  border: none; /* 밝은 회색 테두리 */
  background-color: #f5f5f5; /* 밝은 회색 배경 */
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  display: block;
`;
