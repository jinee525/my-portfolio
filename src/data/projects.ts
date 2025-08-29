export const projects = [
  {
    careerId: "lgcns",
    title: "모바일 앱 안정화 및 기능 개선",
    content:
      "React Native 기반의 기존 모바일 앱을 유지·보수하며 사용자 경험을 개선했습니다. 신규 기능을 빠르고 안정적으로 개발하여, 팀의 수익 창출에 기여했습니다.",
    boundary: ["FE", "운영"],
    tech: ["React Native", "MySQL"],
    solutions: [
      [
        "운영 중 UI 오류 및 비정상 동작 발생",
        "핫픽스를 통한 빠른 대응으로 사용자 불편 최소화, 안정성 유지",
      ],
      [
        "운영팀의 데이터 분석·추출 지원 필요",
        "로그 분석 및 데이터 추출로 기획·운영팀 의사결정 지원",
      ],
      [
        "팀 수익성 프로젝트 기술 지원 필요",
        "‘UP가전’ 등 별도 프로젝트 개발에 기여하여 팀 매출 증대에 도움",
      ],
    ],
  },
  {
    careerId: "lgcns",
    title: "웹 전환 프로젝트",
    content:
      "React Native 기반 모바일 앱을 분석하여, 동일한 기능을 제공하는 React 웹 서비스를 새롭게 개발했습니다. 기존 구조를 참고하면서도 웹 환경에 맞게 UI/UX와 로직을 재설계하여 안정적인 웹 서비스를 구축했습니다.",
    boundary: ["FE"],
    tech: ["React", "TypeScript", "MobX"],
    solutions: [
      [
        "RN 전용 컴포넌트가 웹 환경에서 호환되지 않음",
        "웹 전용 컴포넌트로 대체하거나 직접 구현하여 기능 동일성 확보",
      ],
      [
        "제한된 일정 내 안정적 전환 필요",
        "최소한의 리팩토링으로 기존 로직을 유지하며 일정 내 전환 완료",
      ],
      [
        "웹 서비스 구조 기반 마련 필요",
        "UI 구조와 API 연동 로직을 웹 환경에 맞게 재설계하여 기반 확보",
      ],
    ],
  },
  {
    careerId: "lgcns",
    title: "커뮤니티 SaaS 플랫폼 구축 및 기능 고도화",
    content:
      "내부 커뮤니티 플랫폼을 SaaS 구조로 새롭게 개발하고, 이후 미션·어드민 등 주요 기능을 고도화했습니다. 모노레포 기반 구조 설계부터 커스터마이징 가능한 구조 개발, 제안 단계 핵심 기능 구현까지 프론트엔드를 단독으로 담당했습니다.",
    boundary: ["FE"],
    tech: ["React", "TypeScript", "MobX", "TailwindCSS", "ReactAdmin"],
    solutions: [
      [
        "복잡한 레거시 코드와 상태 관리 문제",
        "MobX Store를 목적별로 리팩토링해 유지보수성과 일관성 향상",
      ],
      [
        "고객사별 요구사항 대응 필요",
        "패키지 설정·컨피그 기반 커스터마이징 구조로 빠른 대응 가능",
      ],
      [
        "제안·데모 상황에서 핵심 기능 필요",
        "미션 참여 및 포스트 승인 등 기능을 단기간에 구현하여 제안에 활용",
      ],
    ],
  },
  {
    careerId: "lgcns",
    title: "AI 글쓰기 기능 개발",
    content:
      "커뮤니티 글쓰기 과정에 AI를 도입해, 사진 업로드만으로 가전 추천과 자동 글 생성을 지원하는 기능을 개발했습니다. Gemini API 기반 LLM을 활용한 서버리스 API와 프론트엔드 플로우를 직접 구현했습니다.",
    boundary: ["FE", "AI 연동"],
    tech: [
      "React",
      "TypeScript",
      "AWS Lambda",
      "Gemini API",
      "Vertex AI",
      "S3",
    ],
    solutions: [
      [
        "사용자가 글 작성 시 제품 검색·연결에 큰 불편을 겪음",
        "이미지 분석으로 가전을 자동 분류하고 후보 리스트를 제공",
      ],
      [
        "AI 응답의 일관성과 정확성 필요",
        "프롬프트를 단계별 명령 구조로 설계해 안정적 결과 확보",
      ],
      [
        "AI 기능을 실서비스에 안정적으로 도입",
        "프론트 플로우와 Lambda API(image-analyze, content-generation)를 직접 구현해 서비스에 적용",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "배너 자동화",
    content:
      "특정 유저를 타겟팅한 배너 노출을 통한 매출 증가를 위해 웹사이트 메인 페이지의 상단/하단 배너를 관리하는 adminAPI/ clientAPI를 구현했습니다.",
    boundary: ["BE"],
    tech: ["Django", "Python", "React", "JavaScript"],
    solutions: [
      [
        "콘텐츠 운영자가 자유롭게 배너를 관리하는 시스템이 필요함",
        "배너 DB를 생성하고 관리자/유저별 필요한 기능에 따른 REST API를 구현함",
      ],
      [
        "유저 그룹에 따라 다른 배너 노출이 필요함",
        "배너 노출 조건(기간, 대상 등) 설정을 포함한 배너 관리 시스템을 개발함",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "외부 서비스 등록 자동화",
    content:
      "관리자 편의와 유저의 서비스 경험 개선을 위해 외부 서비스 자동 등록 프로세스를 구현했습니다.",
    boundary: ["BE"],
    tech: ["AWS-Lambda", "AWS-DynamoDB", "AWS-EventBridge", "JavaScript"],
    solutions: [
      [
        "내부 상품을 구매한 유저를 외부 서비스에 자동으로 연결하고 싶음",
        'SaaS api를 호출하여 외부 서비스에 유저를 자동으로 등록하는 람다를 작성하고 AWS EventBridge로 구매 이벤트와 연결하여 "구매-외부 연결" 과정을 자동화 함, 시스템 자동화를 통해 유저 경험을 개선하고 서비스 운영자의 리소스를 줄임',
      ],
    ],
  },
  {
    careerId: "planery",
    title: "검색 기능",
    content:
      "유저 경험을 개선하고 판매율을 증가시키기 위해 콘텐츠를 카테고리로 필터링하고 키워드로 검색하는 기능을 구현했습니다.",
    boundary: ["FE", "BE"],
    tech: [
      "AWS-Elasticsearch",
      "AWS-DynamoDB",
      "GraphQL",
      "React",
      "JavaScript",
    ],
    solutions: [
      [
        "보유하고 있는 콘텐츠에 대한 필터링/검색 기능이 필요함",
        "AWS에서 제공하는 ElasticSearch 검색엔진을 사용함, 검색의 효율성을 위해 검색에 유용한 properties에만 선택적으로 analyzer를 적용하고 콘텐츠 데이터에 맞게 type을 설계하고 쿼리를 작성함",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "dynamoDB와 graphQL",
    content:
      "다양한 구조의 데이터를 저장할 수 있는 db를 설계하고, client의 요청(필요한 데이터만&원하는 구조로)에 따라 새로운 CRUD를 빠르고 쉽게 개발하기 위해 dynamoDB와 graphQL를 이용하여 서비스를 구축했습니다.",
    boundary: ["BE"],
    tech: [
      "AWS-DynamoDB",
      "AWS-AppSync",
      "GraphQL",
      "AWS-Lambda",
      "JavaScript",
    ],
    solutions: [
      [
        "서비스에 필요한 다양한 구조의 데이터를 쉽게 추가할 수 있는 table(document)이 필요함",
        "공통 필드와 개별 필드를 정의하여 중복을 줄인 스키마를 설계하고, 클라이언트의 필요에 따라 다양한 구조의 데이터를 제공하도록 작은 단위로 쪼개어 resolver를 구현함",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "효율적인 협업을 위한 작업",
    content:
      "Github Action을 이용해서 특정 브랜치(깃플로우를 따른 브랜치들)를 실시간으로 감시하고, 변동이 생겼을 때 자동으로 배포(AWS에 push)하는 과정에 필요한 설정 코드들을 작성하고 보완했습니다.",
    boundary: ["BE"],
    tech: ["Serverless Framework", "Git-Flow", "GitHub Actions", "Jest", "AWS"],
    solutions: [
      [
        "AWS 작업을 코드로 관리하고 싶음",
        "코드로 severless를 관리할 수 있도록 AWS 설정 스크립트를 작성함",
      ],
      [
        "테스트 코드를 통한 품질 확보",
        "jest 이용하여 단위 테스트 코드를 작성함, 테스트에 필요한 인증 정보를 유저 유형 별로 관리하고 응답 값 형태에 따른 적절한 expect를 사용하여 테스트 코드를 작성함",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "블로그",
    content:
      "사이트 내에서 다양한 컨텐츠를 제공하여 유저의 유입과 체류 시간을 늘리기 위해 블로그 페이지를 구현했습니다.",
    boundary: ["FE"],
    tech: ["React", "JavaScript", "GraphQL"],
    solutions: [
      [
        "외부 사이트에서 제공되었던 컨텐츠를 서비스 내부에서 제공하여 유저의 이탈을 막고 싶음",
        "블로그 형식의 글을 제공하는 페이지를 구현함, 외부 검색과 노출을 위해 sitemap에 추가하는 작업을 진행하여 SPA의 취약점인 SEO를 보완함",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "아이디/비밀번호 찾기 개선",
    content:
      "등록된 계정을 찾고, 비밀번호를 재설정하는 과정을 단계별로 쪼개 API를 구현하여 유저 편의를 높였습니다.",
    boundary: ["FE", "BE"],
    tech: ["Django", "React", "JavaScript"],
    solutions: [
      [
        "아이디/비밀번호 찾기 과정의 안전성과 사용성을 높여야 함",
        "꼭 필요한 과정을 기준으로 단계를 설계하고 이에 맞춰 api를 쪼개어 설계함, api호출 사이에 보안을 위한 과정을 추가함",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "쿠폰 시스템 리뉴얼",
    content:
      "쿠폰의 사용성을 높여 비즈니스에 적극 활용할 수 있도록 기존 쿠폰 시스템을 개선했습니다.",
    boundary: ["BE"],
    tech: ["AWS-Lambda", "Sequelize", "JavaScript", "AWS-DynamoDB", "GraphQL"],
    solutions: [
      [
        "불편했던 기존 시스템을 개선하여 사용성을 높이고 싶음",
        "각 필드의 목적을 뚜렷이 정의하고 필드간 독립성을 확보하여 사용성이 높아지도록 데이터 구조를 개선함",
      ],
      [
        "유저의 액션(쿠폰 코드 입력)으로 쿠폰을 지급하고 싶음",
        "관리자의 입력을 기반으로 단방향 암호화(해시 알고리즘)를 사용하여 쿠폰 코드를 생성하는 시스템을 개발함, 코드 관리와 사용을 위한 graphQL을 구현함",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "B2B 시스템 구현 (신규 서비스)",
    content:
      "기업 교육을 통해 새로운 수익 모델을 만들고 회원 수 증가를 위해 B2B 시스템을 개발했습니다.",
    boundary: ["FE", "BE"],
    tech: ["React", "JavaScript", "AWS-Lambda", "AWS-DynamoDB", "GraphQL"],
    solutions: [
      [
        "기업 유저를 가입시키고 b2b 전용 페이지를 제공하고 싶음",
        "보안 처리를 한 url과 기업 특정 코드를 이용한 기업 유저 확인 로직을 구현함",
      ],
      [
        "일반 유저와 기업 유저의 서비스 경험을 다르게 하고 싶음",
        "유저의 상태 값에 따라 보여지는 화면이 달라지도록 구현함",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "컬리 IR 사이트 구축",
    content:
      "플래너리가 컬리에 인수되는 과정에서 기업 IR 용도로 활용되는 사이트를 구축했습니다. Node.js 기반 API를 직접 개발하며 기업의 투자 유치와 서비스 전환에 기여했습니다.",
    boundary: ["BE"],
    tech: ["Node.js", "Express", "Sequelize", "PostgreSQL"],
    solutions: [
      [
        "IR 사이트 구축을 위해 안정적인 데이터 관리가 필요함",
        "Sequelize + PostgreSQL 기반으로 DB를 설계하고 안정적인 CRUD API를 개발함",
      ],
    ],
  },
];
