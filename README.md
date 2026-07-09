# 📚 DevNotes - Notion CMS 기반 개발 학습 자료 공유 플랫폼

> Notion을 CMS로 활용한 개인 개발 학습 자료 저장소 및 공유 플랫폼

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwind-css)
![Notion API](https://img.shields.io/badge/Notion_API-✓-000000?style=flat-square&logo=notion)

## 🎯 프로젝트 소개

**DevNotes**는 Notion을 CMS(Content Management System)로 활용하는 Next.js 웹 애플리케이션입니다.

개발 공부하면서 작성한 학습 자료를 Notion에서 관리하고, 웹사이트에서 자동으로 검색하고 공유할 수 있습니다.

### 주요 특징

- 🎓 **Notion CMS 기반**: Notion 데이터베이스에서 콘텐츠 자동 동기화
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 대응
- 🔍 **검색 & 필터**: 카테고리, 난이도, 태그로 학습 자료 검색
- 🌙 **다크모드**: 시스템 설정에 따라 자동 전환
- ⚡ **빠른 로딩**: Next.js 최적화 및 Notion API 캐싱
- 📊 **SEO 최적화**: 메타 태그, 구조화된 데이터
- ♿ **접근성**: WCAG 준수

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Icons**: Lucide React
- **Utilities**: date-fns, clsx, tailwind-merge

### Backend/CMS
- **CMS**: Notion API (@notionhq/client)
- **API**: Next.js API Routes
- **Environment**: Node.js 18+

### Deployment
- **Hosting**: Vercel
- **Database**: Notion (Cloud)

## 🚀 빠른 시작

### 필수 조건
- Node.js 18 이상
- npm 또는 yarn
- Notion 계정
- Notion API 키

### 설치

1. **저장소 클론**
```bash
git clone https://github.com/username/notion-cms-project.git
cd notion-cms-project
```

2. **패키지 설치**
```bash
npm install
```

3. **환경 변수 설정**

`.env.local` 파일을 생성하고 다음을 추가합니다:

```env
# Notion API
NEXT_PUBLIC_NOTION_DATABASE_ID=your_database_id
NOTION_API_KEY=your_api_key
```

Notion API 키와 데이터베이스 ID를 얻으려면:
1. [Notion Developers](https://developers.notion.com) 방문
2. 새 인테그레이션 생성
3. API 키 복사
4. Notion 데이터베이스에서 데이터베이스 ID 복사 (URL에서: `/database/DATABASE_ID?v=...`)

4. **개발 서버 실행**
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 📁 프로젝트 구조

```
notion-cms-project/
├── app/
│   ├── page.tsx                 # 홈 페이지
│   ├── notes/page.tsx           # 학습 자료 목록
│   ├── notes/[slug]/page.tsx    # 자료 상세 페이지
│   ├── category/[name]/page.tsx # 카테고리별 자료
│   ├── search/page.tsx          # 검색 결과
│   ├── api/
│   │   ├── notes/route.ts       # 자료 목록 API
│   │   ├── search/route.ts      # 검색 API
│   │   └── notion/route.ts      # Notion 프록시
│   ├── layout.tsx               # Root 레이아웃
│   └── globals.css              # 전역 스타일
├── lib/
│   ├── notion.ts                # Notion API 클라이언트
│   ├── utils.ts                 # 유틸리티 함수
│   └── types.ts                 # TypeScript 타입 정의
├── components/
│   ├── ui/                      # shadcn/ui 컴포넌트
│   ├── header.tsx               # 헤더
│   ├── footer.tsx               # 푸터
│   ├── note-card.tsx            # 자료 카드
│   ├── search-bar.tsx           # 검색 바
│   └── filter-sidebar.tsx       # 필터 사이드바
├── docs/
│   └── PRD.md                   # 프로젝트 요구사항 문서
└── .env.local                   # 환경 변수 (Git 제외)
```

## 📚 Notion 데이터베이스 설정

### 데이터베이스 생성

Notion에서 새 데이터베이스를 생성하고 다음 프로퍼티를 추가합니다:

| 프로퍼티명 | 타입 | 설명 |
|-----------|------|------|
| **Title** | Title | 학습 자료 제목 |
| **Category** | Select | 프로그래밍 언어/주제 |
| **Tags** | Multi-select | 세부 태그 |
| **Difficulty** | Select | 초급/중급/고급 |
| **Published Date** | Date | 발행 일자 |
| **Status** | Select | 초안/발행됨/보관됨 |
| **Content** | Page | 본문 내용 |

### 샘플 데이터

```
예시 글:
- Title: JavaScript 비동기 처리 완벽 가이드
- Category: JavaScript
- Tags: async/await, Promise
- Difficulty: 중급
- Published Date: 2026-07-09
- Status: 발행됨
```

자세한 내용은 [`docs/PRD.md`](./docs/PRD.md) 참조

## 🎨 주요 페이지

### 홈페이지 (/)
- 최근 발행된 학습 자료 표시
- 인기 자료 섹션
- 카테고리 바로가기

### 자료 목록 (/notes)
- 필터링 (카테고리, 난이도)
- 정렬 (최신순, 인기순)
- 페이지네이션
- 반응형 그리드 뷰

### 자료 상세 (/notes/[slug])
- Notion 콘텐츠 HTML 렌더링
- 목차 자동 생성
- 관련 글 추천
- 소셜 공유 버튼

### 카테고리 (/category/[name])
- 특정 카테고리의 모든 자료

### 검색 (/search?q=keyword)
- 전문 검색 결과
- 검색어 하이라이팅

## 🔧 주요 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start

# 코드 린팅
npm run lint

# TypeScript 타입 검사
npx tsc --noEmit
```

## 🚀 배포

### Vercel 배포

1. **GitHub에 푸시**
```bash
git push origin main
```

2. **Vercel 연결**
   - [Vercel](https://vercel.com) 방문
   - GitHub 저장소 임포트
   - 환경 변수 설정 (`NOTION_API_KEY`, `NEXT_PUBLIC_NOTION_DATABASE_ID`)
   - 배포

3. **커스텀 도메인 (선택사항)**
   - Vercel 대시보드에서 도메인 연결

## 📖 API 사용 가이드

### Notion API 인증

Notion API는 Bearer 토큰 인증을 사용합니다:

```typescript
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
```

### 자료 목록 조회

```typescript
const response = await notion.databases.query({
  database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
  filter: {
    property: "Status",
    select: { equals: "발행됨" }
  }
});
```

자세한 API 문서는 [Notion API Reference](https://developers.notion.com/reference) 참조

## 🔐 보안

- API 키는 `.env.local`에서 관리 (Git 제외)
- 공개 가능한 데이터만 노출 (`NEXT_PUBLIC_*` 접두사)
- Notion API 권한은 읽기만 설정 권장
- `.env.local` 파일을 `.gitignore`에 추가했습니다

## 📊 성능 최적화

- Image optimization (Next.js)
- Incremental Static Regeneration (ISR)
- API 응답 캐싱
- 클라이언트사이드 캐싱 (React Query)

## ♿ 접근성

- WCAG 2.1 준수
- 시맨틱 HTML
- ARIA 라벨 및 역할
- 키보드 네비게이션 지원

## 🐛 문제 해결

### "Notion API 연결 실패"
- API 키 확인 (`NOTION_API_KEY`)
- 데이터베이스 ID 확인 (`NEXT_PUBLIC_NOTION_DATABASE_ID`)
- Notion 인테그레이션에 데이터베이스 권한 있는지 확인

### "콘텐츠 로딩 안 됨"
- Notion 데이터베이스에 "Status: 발행됨" 항목이 있는지 확인
- 필수 프로퍼티 (Title, Content)가 채워져 있는지 확인

### "스타일 적용 안 됨"
```bash
npm run build
npm run dev
```
Tailwind CSS 캐시 재설정

## 📚 추가 자료

- [Next.js 문서](https://nextjs.org/docs)
- [Notion API 가이드](https://developers.notion.com/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

## 📝 라이선스

MIT License - [LICENSE](./LICENSE) 파일 참조

## 🤝 기여

이 프로젝트에 기여하고 싶으신가요?

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💬 피드백

버그 리포트, 기능 요청, 개선 제안은 [GitHub Issues](https://github.com/username/notion-cms-project/issues)에서 환영합니다!

## 👤 저자

**Your Name**
- GitHub: [@username](https://github.com/username)
- Email: your.email@example.com

---

**Made with ❤️ using Next.js, Notion API, and Claude Code**

*마지막 업데이트: 2026-07-09*
