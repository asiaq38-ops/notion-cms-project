# 🚀 DevNotes - Claude Code 프로젝트 컨텍스트

## 📋 프로젝트 개요

**프로젝트명**: DevNotes - Notion CMS 기반 개발 학습 자료 공유 플랫폼

**목표**: Notion을 CMS로 활용하여 개발 학습 자료를 웹사이트에서 관리하고 공유

**상태**: PRD 완성, 로드맵 작성 중, 구현 준비 완료

## 📚 핵심 문서

### 1. PRD (Product Requirements Document)
**파일**: `@docs/PRD.md`

프로젝트의 전반적인 요구사항과 기능을 정의합니다.

주요 내용:
- 프로젝트 개요 및 목적
- 6가지 주요 기능
- 기술 스택 정의
- Notion 데이터베이스 구조
- UI/UX 화면 구성
- MVP 범위

### 2. ROADMAP (개발 로드맵)
**파일**: `@docs/ROADMAP.md`

PRD의 기능을 "어떤 순서로 구현할 것인가"를 명확히 정의합니다.

5가지 Phase:
- **Phase 1**: 프로젝트 초기 설정 (1-2일)
- **Phase 2**: 공통 모듈 개발 (2-3일)
- **Phase 3**: 핵심 기능 개발 (3-4일)
- **Phase 4**: 추가 기능 개발 (2-3일)
- **Phase 5**: 최적화 및 배포 (1-2일)

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Icons**: Lucide React
- **Utilities**: date-fns, clsx, tailwind-merge

### Backend/CMS
- **CMS**: Notion API (@notionhq/client)
- **Data Fetching**: React Query (또는 SWR)
- **API**: Next.js API Routes

### Deployment
- **Hosting**: Vercel
- **Version Control**: Git + GitHub

## 📊 Notion 데이터베이스 구조

**데이터베이스명**: LearningNotes

| 필드명 | 타입 | 설명 |
|--------|------|------|
| Title | Title | 학습 자료 제목 |
| Category | Select | 프로그래밍 언어/주제 |
| Tags | Multi-select | 세부 태그 |
| Difficulty | Select | 난이도 (초급/중급/고급) |
| Published Date | Date | 발행 일자 |
| Updated Date | Date | 수정 일자 |
| Status | Select | 상태 (초안/발행됨/보관됨) |
| Content | Page | 본문 내용 |
| Summary | Text | 자료 요약 |
| Views | Number | 조회수 |
| Slug | Text | URL-friendly 이름 |
| Featured | Checkbox | 홈페이지 표시 여부 |

## 🎯 개발 원칙

### 1. 골격 → 공통 → 개별
- Phase 1: 프로젝트 기초 구축
- Phase 2: 재사용되는 모듈/컴포넌트
- Phase 3~4: 개별 페이지/기능

### 2. 타입 안전성
- TypeScript strict mode 사용
- 모든 함수에 명시적 타입 지정
- Notion 데이터 구조에 맞는 인터페이스 정의

### 3. 컴포넌트 재사용
- shadcn/ui 컴포넌트 활용
- 공통 컴포넌트는 Phase 2에서 개발
- Props 인터페이스 명확히 정의

### 4. 성능 최적화
- ISR (Incremental Static Regeneration) 활용
- API 캐싱 (React Query/SWR)
- 이미지 최적화 (Next.js Image)

## 🚀 시작하기

### 필수 설정
1. `.env.local` 파일 생성
2. Notion API 키 설정
3. Notion 데이터베이스 ID 설정

```env
NOTION_API_KEY=your_api_key
NEXT_PUBLIC_NOTION_DATABASE_ID=your_database_id
```

### 개발 서버 실행
```bash
npm install
npm run dev
```

### 빌드 및 배포
```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
notion-cms-project/
├── app/                        # Next.js App Router
│   ├── api/                   # API Routes
│   ├── notes/                 # 글 목록/상세 페이지
│   ├── category/              # 카테고리 페이지
│   ├── search/                # 검색 결과 페이지
│   ├── page.tsx               # 홈 페이지
│   ├── layout.tsx             # Root 레이아웃
│   └── globals.css            # 전역 스타일
├── components/                # React 컴포넌트
│   ├── ui/                    # shadcn/ui 컴포넌트
│   └── [커스텀 컴포넌트]
├── lib/                       # 유틸리티/API
│   ├── notion.ts              # Notion API 클라이언트
│   ├── notion-api.ts          # API 함수
│   ├── notion-transform.ts    # 데이터 변환
│   ├── types.ts               # TypeScript 타입
│   └── utils.ts               # 유틸리티 함수
├── hooks/                     # 커스텀 React Hooks
├── docs/
│   ├── PRD.md                 # 프로젝트 요구사항
│   └── ROADMAP.md             # 개발 로드맵
├── public/                    # 정적 파일
├── .env.local                 # 환경 변수 (Git 제외)
├── README.md                  # 프로젝트 설명
└── CLAUDE.md                  # 이 파일
```

## 🔑 중요 파일 및 역할

### 타입 정의
- `lib/types.ts` - 모든 TypeScript 인터페이스

### API 통합
- `lib/notion.ts` - Notion 클라이언트 초기화
- `lib/notion-api.ts` - Notion API 함수 (getAllPosts, getPostBySlug 등)
- `lib/notion-transform.ts` - Notion 데이터 → TypeScript 타입 변환

### 공통 컴포넌트
- `components/ui/` - shadcn/ui 컴포넌트
- `components/[컴포넌트명].tsx` - 커스텀 컴포넌트 (BlogCard, SearchBar 등)

### 페이지
- `app/page.tsx` - 홈 페이지 (최근 글, 카테고리)
- `app/notes/page.tsx` - 글 목록 (필터, 정렬, 페이지네이션)
- `app/notes/[slug]/page.tsx` - 글 상세 (콘텐츠, 목차, 공유)
- `app/search/page.tsx` - 검색 결과
- `app/category/[name]/page.tsx` - 카테고리별 글

## 💡 개발 시 참고사항

### 1. PRD와 ROADMAP 항상 참고
- 기능 추가 전 PRD에서 요구사항 확인
- 구현 순서는 ROADMAP을 따름

### 2. TypeScript strict mode 유지
```typescript
// ✅ Good
interface BlogPost {
  id: string;
  title: string;
  slug: string;
}

// ❌ Avoid
interface BlogPost {
  id: any;
  title: any;
}
```

### 3. 컴포넌트는 Phase 2에서 개발
- 개별 페이지에서만 사용되는 컴포넌트는 해당 페이지에
- 여러 페이지에서 사용되는 컴포넌트는 `components/`에

### 4. API 함수는 `lib/notion-api.ts`에 집중
- 모든 Notion API 호출을 여기에 정의
- 페이지에서는 이 함수들만 import

### 5. 에러 처리 필수
```typescript
try {
  const posts = await getAllPosts();
  // ...
} catch (error) {
  console.error('Failed to fetch posts:', error);
  // 사용자 친화적인 에러 메시지 표시
}
```

## 🧪 테스트 및 검증

### Phase별 테스트
- **Phase 1**: `npm run dev` 실행, TypeScript 타입 검사
- **Phase 2**: API 함수 호출 테스트, 컴포넌트 렌더링
- **Phase 3**: 모든 페이지 접속 테스트
- **Phase 4**: 검색/필터 기능 테스트
- **Phase 5**: Lighthouse 점수, Vercel 배포

### Notion 연동 테스트
1. Notion 데이터베이스 생성
2. 샘플 데이터 5-10개 입력
3. API 함수로 데이터 조회 테스트
4. 브라우저에서 렌더링 확인

## 🐛 문제 해결

### Notion API 연결 실패
```
Error: Invalid API key or database ID
→ .env.local에서 API 키/DB ID 확인
```

### 콘텐츠 렌더링 오류
```
Error: Cannot render Notion block
→ lib/notion-transform.ts에서 블록 타입 확인
```

### 성능 저하
```
Slow API response
→ React Query 캐싱 정책 조정 또는 ISR 사용
```

## 📞 유용한 링크

### 공식 문서
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Notion API Docs](https://developers.notion.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)

### Notion CMS 관련
- [Notion Blocks API](https://developers.notion.com/docs/working-with-page-content)
- [Notion Database API](https://developers.notion.com/docs/working-with-databases)

## 📅 진행 상황

```
Phase 1: [ ] 프로젝트 초기 설정
Phase 2: [ ] 공통 모듈 개발
Phase 3: [ ] 핵심 기능 개발
Phase 4: [ ] 추가 기능 개발
Phase 5: [ ] 최적화 및 배포

Progress: 0 / 5 (0%)
```

## 🎯 다음 단계

1. Phase 1 시작 - 프로젝트 초기 설정
2. Notion 데이터베이스 생성
3. Notion API 연동 테스트
4. 공통 모듈 개발 (Phase 2)

---

**작성일**: 2026-07-09  
**마지막 업데이트**: 2026-07-09  
**상태**: 프로젝트 준비 완료 ✅

✨ 이제 Phase 1부터 시작하면 됩니다!
