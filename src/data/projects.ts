export const projects = [
  {
    careerId: "planery",
    title: "배너 자동화",
    content:
      "특정 유저를 타겟팅한 배너 노출을 통한 매출 증가를 위해 웹사이트 메인 페이지의 상단/하단 배너를 관리하는 adminAPI/ clientAPI를 구현했습니다.",
    boundary: ["BE"],
    tech: ["Django", "Python", "React", "JavaScript"],
    url: "https://heyjoyce.com",
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
    title: "쿠폰 패키지",
    content:
      "새로운 형태의 상품을 판매하기 위해 신규 시스템을 개발했습니다. 프로모션을 위한 새로운 패키지를 생성할 수 있게 하여 매출을 증가시켰으며, 유저에게 새로운 경험을 제공했습니다.",
    boundary: ["FE", "BE"],
    tech: [
      "AWS-Lambda",
      "AWS-EventBridge",
      "AWS-DynamoDB",
      "React",
      "JavaScript",
    ],
    url: "https://heyjoyce.com/package",
    solutions: [
      [
        "새로운 형태의 상품을 판매하고 싶음, 장고에서 서버리스 모델로 전환하는 과정에서 기존 구매 시스템 내에서 구현해야 함",
        "상품 구매부터 쿠폰 발급까지의 과정을 단계별 이벤트로 나누고 AWS EventBridge로 연결하여 시스템 모니터링과 각 부분의 유지보수 및 확장 용이하게 구현함",
      ],
      [
        "새로운 상품에 대한 유저 문의가 발생함",
        'CX팀과 협업하여 "문제점 정의 -> UX/UI 개선 -> CS 데이터 확인" 과정을 반복하며 개선함',
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
    url: "",
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
    url: "https://heyjoyce.com/feed/list",
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
    url: "",
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
    url: "",
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
    url: "https://heyjoyce.com/blog/list",
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
    url: "",
    solutions: [
      [
        "아이디/비밀번호 찾기 과정의 안전성과 사용성을 높여야 함",
        "꼭 필요한 과정을 기준으로 단계를 설계하고 이에 맞춰 api를 쪼개어 설계함, api호출 사이에 보안을 위한 과정을 추가함",
      ],
    ],
  },
  {
    careerId: "planery",
    title: "웹/앱 개편",
    content:
      "앱 이용자 수를 늘리기 위해 사용성을 개선하고 앱에서만 사용할 수 있는 기능을 추가했습니다.",
    boundary: ["FE"],
    tech: ["React-Native", "next.js", "TypeScript"],
    url: "",
    solutions: [
      [
        "앱 사용성을 높여 유저 수를 증가시키고 싶음",
        "앱 친화적인 UX/UI를 사용하여 앱 전용 기능을 구현함",
      ],
      [
        "사이트 접근 및 외부 공유 경험 개선 필요",
        "링크 공유 시 미리 보이는 썸네일&설명 데이터(오픈 그래프)가 중요하거나 검색(seo)이 중요한 페이지를 Next.js로 개발하여 SPA의 단점을 보완함",
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
    url: "",
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
    url: "",
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
];
