/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Link from "next/link";

interface CareerCardProps {
  id: string;
  company: string;
  position: string;
  period: string;
  summary: string;
}

export default function CareerCard({
  id,
  company,
  position,
  period,
  summary,
}: CareerCardProps) {
  return (
    <Card href={`/careers/${id}`}>
      <Header>
        <Company>{company}</Company>
        <Period>
          {position} · {period}
        </Period>
      </Header>
      <Summary>{summary}</Summary>
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
