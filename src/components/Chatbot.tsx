"use client";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "안녕하세요, 박유진입니다. 궁금한 점이 있다면 질문해 주세요! 포트폴리오 내용을 바탕으로 답변 드릴게요.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 추천 질문들
  const suggestedQuestions = [
    "자기소개 해주세요",
    "어떤 프로젝트를 했나요?",
    "사용하는 기술스택은?",
    "강점이 뭔가요?",
    "어떤 개발자가 되고 싶나요?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage("");
    setIsLoading(true);
    // 첫 질문 후에는 자동으로 숨기지 않음

    try {
      // 최근 10개 메시지만 전송 (환영 메시지 제외)
      const recentMessages = updatedMessages
        .filter((msg) => msg.id !== "welcome")
        .slice(-10)
        .map((msg) => ({
          role: msg.isUser ? "user" : "assistant",
          content: msg.text,
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory: recentMessages,
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "죄송합니다. 잠시 후 다시 시도해주세요.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (question: string) => {
    sendMessage(question);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <ChatbotContainer>
      <FloatingToggleButton onClick={() => setIsOpen(!isOpen)}>
        <ButtonIcon>{isOpen ? "✕" : "💬"}</ButtonIcon>
        <ButtonText>
          {isOpen ? "채팅 닫기" : "AI 박유진과 지금 대화하기"}
        </ButtonText>
      </FloatingToggleButton>

      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <HeaderTitle>💬 박유진과 지금 대화하기</HeaderTitle>
            <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>
          </ChatHeader>

          <MessagesContainer>
            {messages.map((message) => (
              <MessageBubble key={message.id} isUser={message.isUser}>
                <MessageText>{message.text}</MessageText>
                <MessageTime>
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </MessageTime>
              </MessageBubble>
            ))}
            {isLoading && (
              <MessageBubble isUser={false}>
                <LoadingDots>
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </LoadingDots>
              </MessageBubble>
            )}
            <div ref={messagesEndRef} />
          </MessagesContainer>

          {showSuggestions && (
            <SuggestionsContainer>
              <SuggestionsTitle>💡 이런 질문은 어떠세요?</SuggestionsTitle>
              <SuggestionsGrid>
                {suggestedQuestions.map((question, index) => (
                  <SuggestionButton
                    key={index}
                    onClick={() => handleSuggestionClick(question)}
                  >
                    {question}
                  </SuggestionButton>
                ))}
              </SuggestionsGrid>
            </SuggestionsContainer>
          )}

          <InputContainer>
            <MessageInput
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요..."
              disabled={isLoading}
            />
            <SuggestionToggleButton
              onClick={() => setShowSuggestions(!showSuggestions)}
              active={showSuggestions}
            >
              💡
            </SuggestionToggleButton>
            <SendButton
              onClick={() => sendMessage()}
              disabled={!inputMessage.trim() || isLoading}
            >
              ➤
            </SendButton>
          </InputContainer>
        </ChatWindow>
      )}
    </ChatbotContainer>
  );
}

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const FloatingToggleButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  min-width: 320px;
  justify-content: center;

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    transform: none;
    min-width: auto;
    width: calc(100% - 2rem);
  }
`;

const ButtonIcon = styled.span`
  font-size: 1.4rem;
`;

const ButtonText = styled.span`
  font-size: 1.2rem;
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e5e5e5;

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    left: 1rem;
    right: 1rem;
    transform: none;
    bottom: 80px;
    height: 450px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #fafafa;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  max-width: 80%;
  background: ${(props) => (props.isUser ? "#667eea" : "#ffffff")};
  color: ${(props) => (props.isUser ? "white" : "#333")};
  padding: 0.75rem 1rem;
  border-radius: 18px;
  border-bottom-right-radius: ${(props) => (props.isUser ? "4px" : "18px")};
  border-bottom-left-radius: ${(props) => (props.isUser ? "18px" : "4px")};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const MessageText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const MessageTime = styled.span`
  font-size: 0.7rem;
  opacity: 0.7;
  margin-top: 0.25rem;
  display: block;
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 4px;

  span {
    animation: pulse 1.4s ease-in-out infinite both;

    &:nth-of-type(1) {
      animation-delay: -0.32s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.16s;
    }
  }

  @keyframes pulse {
    0%,
    80%,
    100% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const InputContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid #e5e5e5;
  display: flex;
  gap: 0.5rem;
  background: white;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 0.9rem;
  outline: none;

  &:focus {
    border-color: #667eea;
  }

  &:disabled {
    background: #f5f5f5;
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #667eea;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #5a6fd8;
    transform: scale(1.05);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuggestionsContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid #e5e5e5;
  background: #f8f9ff;
`;

const SuggestionsTitle = styled.h4`
  margin: 0 0 0.75rem 0;
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
`;

const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.5rem;
`;

const SuggestionButton = styled.button`
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  background: white;
  color: #555;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    border-color: #667eea;
    background: #f8f9ff;
    color: #667eea;
  }
`;

const SuggestionToggleButton = styled.button<{ active: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#667eea" : "#f5f5f5")};
  border: 1px solid ${(props) => (props.active ? "#667eea" : "#ddd")};
  color: ${(props) => (props.active ? "white" : "#666")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  font-size: 1rem;

  &:hover {
    background: ${(props) => (props.active ? "#5a6fd8" : "#667eea")};
    border-color: #667eea;
    color: white;
    transform: scale(1.05);
  }
`;
