import { NextRequest, NextResponse } from "next/server";
import { intro } from "@/data/intro";
import { careers } from "@/data/careers";
import { projects } from "@/data/projects";
import { gameProjects, UXProjects } from "@/data/univ";

// 자소서 내용과 프로필 정보를 data 파일들에서 가져와서 구성
const profileInfo = `
박유진 - 프로덕트 개발자 프로필

=== 자기소개 ===
${intro}

=== 경력 ===
${careers
  .map(
    (career) => `
${career.company} (${career.period})
- 직무: ${career.position}
${
  career.pre ? `- 이전 직무: ${career.pre.position} (${career.pre.period})` : ""
}
- 요약: ${career.summary}
`
  )
  .join("\n")}

=== 주요 프로젝트 ===
${projects
  .map(
    (project) => `
[${project.title}]
- 설명: ${project.content}
- 기술스택: ${project.tech.join(", ")}
- 담당영역: ${project.boundary.join(", ")}
`
  )
  .join("\n")}

=== 대학 프로젝트 ===
게임 프로젝트:
${gameProjects
  .map(
    (project) => `
- ${project.title}: ${project.desc} (${project.techInfo})
`
  )
  .join("\n")}

UX/UI 프로젝트:
${UXProjects.map(
  (project) => `
- ${project.title}: ${project.desc} (${project.techInfo})
`
).join("\n")}

=== 교육 ===
- 이화여자대학교 컴퓨터공학(전공), 스크랜튼학부 디지털인문학(복수전공)
- 성적: 4.2/4.5 (총 151학점)
- 어학: TOEIC 945, TOEIC Speaking Level 7
`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "메시지를 입력해주세요." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API 키가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    // 시스템 메시지 + 대화 기록 + 현재 메시지 구성
    const messages = [
      {
        role: "system",
        content: `당신은 박유진에 대한 정보를 제공하는 AI 어시스턴트입니다. 다음 정보를 바탕으로 친근하고 자연스럽게 답변해주세요:

${profileInfo}

규칙:
1. 박유진의 1인칭 시점으로 답변하세요 (예: "저는...", "제가...")
2. 친근하고 자연스러운 톤으로 답변하세요
3. 위 정보에 없는 내용은 정확히 모른다고 답변하세요
4. 답변은 한국어로 해주세요
5. 너무 길지 않게 2-3문장으로 답변하세요
6. 이전 대화 내용을 참고하여 자연스럽게 이어가세요`,
      },
      ...(conversationHistory || []),
      {
        role: "user",
        content: message,
      },
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error("OpenAI API 호출 실패");
    }

    const data = await response.json();
    const aiResponse =
      data.choices[0]?.message?.content || "죄송합니다. 다시 시도해주세요.";

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
