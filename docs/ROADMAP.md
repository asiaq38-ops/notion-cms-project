# 📍 DevNotes 개발 로드맵

**프로젝트**: DevNotes - Notion CMS 기반 개발 학습 자료 공유 플랫폼  
**상태**: 준비 완료 (PRD 완성)  
**작성일**: 2026-07-09

---

## 🎯 개발 철학

> **"골격 → 공통 → 개별"**

올바른 개발 순서를 따르면:
- ✅ 기능 재사용으로 중복 코드 방지
- ✅ 견고한 기반 위에 기능 구축
- ✅ 변경에 강한 아키텍처 유지
- ✅ 팀 협업 시 명확한 역할 분담

---

## 📅 전체 일정

| Phase | 단계명 | 예상 기간 | 상태 |
|-------|--------|----------|------|
| 1 | 프로젝트 초기 설정 | 1-2일 | 📋 예정 |
| 2 | 공통 모듈 개발 | 2-3일 | 📋 예정 |
| 3 | 핵심 기능 개발 | 3-4일 | 📋 예정 |
| 4 | 추가 기능 개발 | 2-3일 | 📋 예정 |
| 5 | 최적화 및 배포 | 1-2일 | 📋 예정 |

**총 예상 기간**: 9-14일 (약 2주)

---

## Phase 1️⃣: 프로젝트 초기 설정 (1-2일)

### 🎯 목표
견고한 프로젝트 기반을 구축하고 Notion API 연동 환경을 준비합니다.

### 📝 구현 항목

#### 1.1 Node.js 패키지 설치 및 검증
- [ ] npm 패키지 확인 및 필요한 패키지 설치
- [ ] Notion API 패키지 설치 (@notionhq/client)
- [ ] React Query 또는 SWR 설치 (데이터 캐싱용)
- [ ] 환경 변수 예제 파일 작성 (.env.example)

**필요한 패키지**:
```bash
@notionhq/client
@tanstack/react-query (또는 swr)
date-fns
clsx
tailwind-merge
```

#### 1.2 TypeScript 타입 정의
- [ ] `lib/types.ts` 생성
- [ ] Notion 데이터베이스 구조에 맞는 인터페이스 정의
  - `NotionPage` - Notion 페이지 타입
  - `BlogPost` - 블로그 글 타입
  - `Category` - 카테고리 타입
  - `SearchResult` - 검색 결과 타입

**예시**:
```typescript
interface BlogPost {
  id: string;
  title: string;
  category: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  publishedDate: Date;
  updatedDate: Date;
  status: 'draft' | 'published' | 'archived';
  content: string;
  summary: string;
  slug: string;
  views: number;
  featured: boolean;
}
```

#### 1.3 프로젝트 폴더 구조 정리
- [ ] `app/api/` - API Routes 디렉토리 생성
- [ ] `lib/` - 유틸리티/API 디렉토리 구조 확인
- [ ] `components/` - 컴포넌트 디렉토리 구조 정리
- [ ] 불필요한 Starter Kit 예제 파일 정리

**최종 구조**:
```
app/
├── api/
│   ├── notes/
│   │   └── route.ts          (GET: 글 목록)
│   ├── notes/[slug]/
│   │   └── route.ts          (GET: 글 상세)
│   ├── search/
│   │   └── route.ts          (GET: 검색)
│   └── category/
│       └── route.ts          (GET: 카테고리 필터)
├── page.tsx                  (홈)
├── notes/
│   ├── page.tsx              (목록)
│   └── [slug]/
│       └── page.tsx          (상세)
├── search/
│   └── page.tsx              (검색 결과)
├── category/
│   └── [name]/
│       └── page.tsx          (카테고리)
└── layout.tsx
```

#### 1.4 Notion API 환경 설정
- [ ] `.env.local` 파일 생성
- [ ] Notion API 키 설정
- [ ] Notion 데이터베이스 ID 설정
- [ ] 환경 변수 로드 테스트

#### 1.5 기본 레이아웃 구조
- [ ] Root layout에서 전역 스타일 로드 확인
- [ ] 기본 헤더/푸터 구조 확인
- [ ] 페이지 메타데이터 설정 기본 구조 구성

#### 1.6 개발 환경 준비
- [ ] TypeScript 설정 확인
- [ ] ESLint 설정 확인
- [ ] 개발 서버 실행 테스트 (`npm run dev`)
- [ ] 빌드 확인 (`npm run build`)

### ⏱️ 예상 소요 시간
- 패키지 설치: 30분
- 타입 정의: 1시간
- 폴더 구조 정리: 1시간
- 환경 설정: 1시간
- **총 예상**: 1.5-2시간

### ✅ 완료 기준
- [ ] `npm run dev` 실행 시 오류 없음
- [ ] TypeScript 타입 검사 통과
- [ ] `.env.local` 파일에 필요한 환경 변수 모두 설정
- [ ] 프로젝트 구조가 깔끔하게 정리됨
- [ ] Notion API 키가 올바르게 설정됨

### 🤔 왜 이 순서?
견고한 기반이 없으면 나중에 코드 리팩토링이 필요해집니다. 초기 설정 단계에서 프로젝트 구조, 타입 정의, 환경 설정을 완벽히 하면 이후 모든 개발이 수월합니다.

---

## Phase 2️⃣: 공통 모듈 개발 (2-3일)

### 🎯 목표
모든 기능에서 사용할 공통 API 함수와 컴포넌트를 만들어 코드 중복을 방지합니다.

### 📝 구현 항목

#### 2.1 Notion API 클라이언트 초기화
**파일**: `lib/notion.ts`

- [ ] Notion 클라이언트 초기화
```typescript
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default notion;
```

#### 2.2 핵심 API 함수 작성
**파일**: `lib/notion-api.ts`

- [ ] `getAllPosts()` - 모든 발행된 글 조회
  - 필터: Status = "발행됨"
  - 정렬: publishedDate (내림차순)
  
- [ ] `getPostBySlug(slug)` - 특정 글 상세 조회
  - Notion 페이지 콘텐츠 가져오기
  
- [ ] `getPostsByCategory(category)` - 카테고리별 글 조회
  - 필터: Category = 지정된 카테고리
  
- [ ] `searchPosts(query)` - 글 검색
  - Notion 페이지 검색 API 활용
  
- [ ] `getPageContent(pageId)` - 페이지 콘텐츠 가져오기
  - Notion 블록 API 활용
  
- [ ] `getCategories()` - 모든 카테고리 조회
  - 고유 카테고리 목록 추출

```typescript
// 예시
export async function getAllPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      select: { equals: "발행됨" }
    },
    sorts: [
      {
        property: "Published Date",
        direction: "descending"
      }
    ]
  });
  
  return response.results.map(transformNotionPageToPost);
}
```

#### 2.3 Notion 데이터 변환 함수
**파일**: `lib/notion-transform.ts`

- [ ] `transformNotionPageToPost(page)` - Notion 페이지 → BlogPost 타입으로 변환
- [ ] `transformBlocksToHtml(blocks)` - Notion 블록 → HTML로 변환
  - 텍스트 블록
  - 이미지 블록
  - 코드 블록 (문법 강조)
  - 제목 블록
  - 리스트 블록
  - 인용문 블록
  
#### 2.4 공통 컴포넌트 개발
**파일**: `components/`

##### 2.4.1 BlogCard 컴포넌트
- [ ] 블로그 글 카드 UI
- Props: BlogPost 데이터
- 표시 정보: 제목, 요약, 카테고리, 발행일, 난이도 배지

```typescript
interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.summary}</p>
        <div className="flex gap-2 mt-4">
          <Badge>{post.category}</Badge>
          <Badge variant="secondary">{post.difficulty}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
```

##### 2.4.2 PostMetadata 컴포넌트
- [ ] 글 메타데이터 표시 (작성일, 수정일, 조회수)
- [ ] Props: BlogPost의 메타데이터

##### 2.4.3 Tags 컴포넌트
- [ ] 태그 목록 표시
- [ ] 클릭 가능한 태그 (필터링 용도)

##### 2.4.4 CategoryBadge 컴포넌트
- [ ] 카테고리 배지 UI
- [ ] Props: 카테고리명, 난이도

##### 2.4.5 SearchBar 컴포넌트
- [ ] 전역 검색 바
- [ ] 입력 필드 + 검색 버튼
- [ ] 엔터키 또는 버튼 클릭으로 검색

#### 2.5 커스텀 Hook 개발
**파일**: `hooks/`

- [ ] `usePosts()` - 모든 글 조회 (캐싱)
- [ ] `usePost(slug)` - 특정 글 조회 (캐싱)
- [ ] `useSearch(query)` - 글 검색 (캐싱)
- [ ] `useCategories()` - 카테고리 목록 조회 (캐싱)

```typescript
export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
    staleTime: 1000 * 60 * 5 // 5분
  });
}
```

#### 2.6 유틸리티 함수
**파일**: `lib/utils.ts`

- [ ] `generateSlug(title)` - 제목에서 슬러그 생성
- [ ] `formatDate(date)` - 날짜 포맷팅
- [ ] `truncateText(text, length)` - 텍스트 잘라내기
- [ ] `highlightText(text, query)` - 검색어 하이라이팅

### ⏱️ 예상 소요 시간
- Notion API 설정: 1시간
- API 함수 작성: 2시간
- 데이터 변환 함수: 1.5시간
- 공통 컴포넌트: 2시간
- 커스텀 Hook: 1시간
- **총 예상**: 2-3시간

### ✅ 완료 기준
- [ ] 모든 Notion API 함수가 정상 작동
- [ ] 데이터 변환 함수가 올바르게 변환
- [ ] 모든 공통 컴포넌트가 렌더링됨
- [ ] TypeScript 타입 검사 통과
- [ ] 콘솔 에러 없음

### 🤔 왜 이 순서?
공통 모듈을 먼저 만들어야 개별 기능 개발이 효율적입니다. API 함수와 컴포넌트가 준비되면 각 페이지에서 간단히 조합하기만 하면 됩니다. 이렇게 하면 중복 코드 없이 일관성 있는 개발이 가능합니다.

---

## Phase 3️⃣: 핵심 기능 개발 (3-4일)

### 🎯 목표
블로그의 기본이 되는 목록 페이지와 상세 페이지를 구현합니다.

### 📝 구현 항목

#### 3.1 홈 페이지 (/)
**파일**: `app/page.tsx`

- [ ] 페이지 메타데이터 설정 (제목, 설명)
- [ ] 히어로 섹션 (프로젝트 소개)
- [ ] 최근 글 섹션 (6-8개)
  - BlogCard 컴포넌트 사용
  - `usePosts()` Hook으로 데이터 로드
- [ ] 카테고리 바로가기 섹션
- [ ] 레이아웃: 반응형 그리드

#### 3.2 글 목록 페이지 (/notes)
**파일**: `app/notes/page.tsx`

- [ ] 페이지 메타데이터 설정
- [ ] 헤더 및 제목
- [ ] 필터 사이드바 (추후 Phase 4에서 기능 추가)
- [ ] 글 목록 (그리드 또는 리스트 뷰)
  - BlogCard 컴포넌트 재사용
  - 정렬 기능 UI (선택만, 기능은 Phase 4)
- [ ] 페이지네이션
  - 한 페이지당 12개 글
  - 페이지 번호 표시
  - 이전/다음 버튼
- [ ] 반응형: 1열 (모바일) → 2열 (태블릿) → 3열 (데스크톱)

```typescript
// 예시 구조
export default async function NotesPage() {
  const posts = await getAllPosts();
  
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="flex gap-8">
            {/* 사이드바 - Phase 4에서 기능 추가 */}
            <aside className="w-64">
              {/* 필터 */}
            </aside>
            
            {/* 메인 콘텐츠 */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              {/* 페이지네이션 */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
```

#### 3.3 글 상세 페이지 (/notes/[slug])
**파일**: `app/notes/[slug]/page.tsx`

- [ ] 동적 라우트 설정
  - `generateStaticParams()` - 정적 생성을 위한 slug 목록
  - `getStaticProps()` 같은 효과로 블로그 글 데이터 로드

- [ ] 페이지 메타데이터 설정
  - 제목: 글 제목
  - 설명: 글 요약
  - OG 이미지 (선택 사항)

- [ ] 글 헤더
  - 제목
  - PostMetadata 컴포넌트 (작성일, 수정일, 조회수)
  - 카테고리 + 난이도 배지
  - Tags 컴포넌트

- [ ] 목차 (TOC) 생성
  - 콘텐츠의 제목(h2, h3)으로 자동 생성
  - 클릭 시 해당 섹션으로 스크롤

- [ ] 글 본문
  - Notion 콘텐츠 HTML 렌더링
  - `transformBlocksToHtml()` 함수 활용
  - 코드 블록에 문법 강조 (예: highlight.js)
  - 이미지 최적화 (Next.js Image)

- [ ] 하단 섹션
  - 공유 버튼 (Twitter, LinkedIn, Copy Link)
  - 이전/다음 글 네비게이션
  - 관련 글 추천 (같은 카테고리 3개)

- [ ] 오른쪽 사이드바 (데스크톱)
  - 목차 sticky 포지션

```typescript
// 예시 구조
export default async function PostDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPostBySlug(params.slug);
  const content = await getPageContent(post.id);
  
  return (
    <>
      <Header />
      <main className="container grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 메인 콘텐츠 */}
        <article className="lg:col-span-3">
          <header>
            <h1>{post.title}</h1>
            <PostMetadata post={post} />
          </header>
          
          <div className="prose prose-lg">
            {/* 변환된 HTML 렌더링 */}
          </div>
          
          {/* 공유 및 네비게이션 */}
        </article>
        
        {/* 오른쪽 사이드바 */}
        <aside className="hidden lg:block">
          {/* 목차 */}
          {/* 관련 글 */}
        </aside>
      </main>
    </>
  );
}
```

#### 3.4 API Routes 구현
**파일**: `app/api/`

- [ ] `/api/notes` (GET)
  - 전체 글 목록 조회
  - 쿼리 파라미터: page, limit
  - 응답: 페이지네이션된 글 목록

- [ ] `/api/notes/[slug]` (GET)
  - 특정 글 상세 조회
  - 응답: BlogPost + 콘텐츠

#### 3.5 Error Handling
- [ ] 글을 찾을 수 없는 경우 (404)
- [ ] Notion API 오류 처리
- [ ] 로딩 상태 처리

### ⏱️ 예상 소요 시간
- 홈 페이지: 1시간
- 글 목록 페이지: 1.5시간
- 글 상세 페이지: 2시간
- API Routes: 1시간
- 에러 처리: 1시간
- **총 예상**: 3-4시간

### ✅ 완료 기준
- [ ] 홈 페이지에서 최근 글 정상 표시
- [ ] 글 목록 페이지 페이지네이션 작동
- [ ] 글 상세 페이지에서 Notion 콘텐츠 렌더링
- [ ] 동적 라우트 작동 (예: /notes/javascript-async)
- [ ] 404 페이지 정상 작동
- [ ] 모든 페이지 반응형 표시

### 🤔 왜 이 순서?
공통 모듈(API, 컴포넌트)이 준비된 후 핵심 기능을 개발합니다. 이렇게 하면 각 페이지는 공통 컴포넌트를 조합하기만 하면 되어 개발이 빠릅니다.

---

## Phase 4️⃣: 추가 기능 개발 (2-3일)

### 🎯 목표
검색, 필터링, 정렬 등 사용자 편의성 기능을 추가합니다.

### 📝 구현 항목

#### 4.1 카테고리별 필터링 (/category/[name])
**파일**: `app/category/[name]/page.tsx`

- [ ] 동적 라우트 설정
- [ ] 특정 카테고리의 글만 표시
- [ ] 글 목록 페이지와 유사한 구조
- [ ] 카테고리 설명 및 통계 (선택 사항)

#### 4.2 검색 기능 (/search)
**파일**: `app/search/page.tsx`

- [ ] 검색 쿼리 파라미터 처리
  - URL: `/search?q=async`
  
- [ ] 검색 결과 페이지
  - 검색어와 매칭되는 글 표시
  - 검색어 하이라이팅
  - 검색 결과 수 표시
  
- [ ] 검색 필터 옵션 (선택 사항)
  - 카테고리별
  - 난이도별

```typescript
// 예시
export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || '';
  const results = await searchPosts(query);
  
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>검색 결과: "{query}"</h1>
          <p>{results.length}개의 결과</p>
          
          <div className="grid">
            {results.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
```

#### 4.3 글 목록 페이지 필터/정렬 기능
**파일**: `app/notes/page.tsx` 수정

- [ ] 카테고리 필터링
  - 체크박스로 여러 카테고리 선택 가능
  - URL 쿼리 파라미터 활용

- [ ] 난이도 필터링
  - 라디오 버튼 또는 체크박스

- [ ] 정렬 기능
  - 최신순 (기본값)
  - 인기순 (조회수)
  - 이름순 (A-Z)

```typescript
// 사이드바 필터 컴포넌트
export function FilterSidebar() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [difficulty, setDifficulty] = useState('all');
  
  return (
    <aside>
      <h3>필터</h3>
      
      {/* 카테고리 */}
      <div>
        <h4>카테고리</h4>
        {categories.map(cat => (
          <label key={cat}>
            <input 
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>
      
      {/* 난이도 */}
      <div>
        <h4>난이도</h4>
        {['모두', '초급', '중급', '고급'].map(level => (
          <label key={level}>
            <input 
              type="radio"
              name="difficulty"
              value={level}
              checked={difficulty === level}
              onChange={() => setDifficulty(level)}
            />
            {level}
          </label>
        ))}
      </div>
    </aside>
  );
}
```

#### 4.4 상세 페이지 추가 기능
**파일**: `app/notes/[slug]/page.tsx` 수정

- [ ] 관련 글 추천 개선
  - 같은 카테고리 + 비슷한 난이도
  - 최대 3-5개

- [ ] 방문자 조회수 카운팅
  - 클라이언트사이드 + 서버사이드 기록

- [ ] 목차 개선
  - 현재 읽고 있는 섹션 하이라이트

#### 4.5 SEO 최적화
- [ ] 메타 태그 설정 (title, description, OG 태그)
- [ ] 구조화된 데이터 (JSON-LD)
  - Article 스키마
  - Organization 스키마
  
- [ ] sitemap.xml 생성
- [ ] robots.txt 설정

```typescript
// 메타데이터 예시
export const metadata: Metadata = {
  title: `${post.title} | DevNotes`,
  description: post.summary,
  openGraph: {
    title: post.title,
    description: post.summary,
    type: 'article',
    publishedTime: post.publishedDate.toISOString(),
    url: `https://devnotes.example.com/notes/${post.slug}`,
  },
};
```

#### 4.6 추가 UI 개선
- [ ] 로딩 스켈레톤
- [ ] 무한 스크롤 (선택 사항)
- [ ] 다크모드 최적화
- [ ] 접근성 개선 (a11y)

### ⏱️ 예상 소요 시간
- 카테고리 페이지: 1시간
- 검색 기능: 1.5시간
- 필터/정렬: 1시간
- SEO 최적화: 1시간
- **총 예상**: 2-3시간

### ✅ 완료 기준
- [ ] 필터/정렬이 정상 작동
- [ ] 검색 결과가 정확하게 표시
- [ ] 카테고리 페이지에서 올바른 글만 표시
- [ ] SEO 메타 태그가 설정됨
- [ ] Google Lighthouse SEO 점수 90점 이상

### 🤔 왜 이 순서?
핵심 기능(목록, 상세)이 완성된 후 추가 기능을 개발합니다. 이렇게 하면 필터/검색 등이 안정적으로 작동합니다.

---

## Phase 5️⃣: 최적화 및 배포 (1-2일)

### 🎯 목표
성능을 최적화하고 프로덕션 환경에 배포합니다.

### 📝 구현 항목

#### 5.1 성능 최적화
- [ ] 이미지 최적화
  - Next.js Image 컴포넌트 활용
  - 반응형 이미지 크기
  - WebP 포맷 지원

- [ ] 번들 크기 최적화
  - 동적 import (code splitting)
  - 불필요한 라이브러리 제거

- [ ] API 캐싱 최적화
  - ISR (Incremental Static Regeneration)
  - SWR / React Query 캐싱 정책 조정

```typescript
// ISR 예시
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export const revalidate = 3600; // 1시간마다 재생성
```

- [ ] 폰트 최적화
  - Google Fonts 최적화
  - system-ui 폰트 우선 설정

- [ ] CSS 최적화
  - Tailwind PurgeCSS 확인
  - 미사용 스타일 제거

#### 5.2 반응형 디자인 완성
- [ ] 모바일 (320px)에서 테스트
- [ ] 태블릿 (768px)에서 테스트
- [ ] 데스크톱 (1024px)에서 테스트
- [ ] 모바일 네비게이션 최적화
- [ ] 터치 UX 최적화 (버튼 크기 44px 이상)

#### 5.3 다크모드 완성
- [ ] 모든 페이지에서 다크모드 테스트
- [ ] 이미지와 배경 색상 충돌 확인
- [ ] 코드 블록 다크모드 스타일

#### 5.4 접근성 개선
- [ ] WCAG 2.1 준수
- [ ] 색상 대비 확인 (4.5:1 이상)
- [ ] 키보드 네비게이션 테스트
- [ ] 스크린 리더 호환성 테스트
- [ ] ARIA 라벨 및 역할 설정

```typescript
// 접근성 예시
<button 
  aria-label="글 검색하기"
  aria-expanded={isOpen}
>
  검색
</button>
```

#### 5.5 보안 검수
- [ ] .env.local이 .gitignore에 포함됨
- [ ] API 키 노출 확인
- [ ] XSS 취약점 확인
- [ ] CSRF 토큰 필요 여부 확인

#### 5.6 Vercel 배포 설정
- [ ] Vercel 프로젝트 생성
- [ ] GitHub 연결
- [ ] 환경 변수 설정
  - `NOTION_API_KEY`
  - `NEXT_PUBLIC_NOTION_DATABASE_ID`

- [ ] 빌드 설정 확인
  - Build command: `next build`
  - Output directory: `.next`

- [ ] 배포 전 최종 점검
  - 로컬 빌드 성공 확인
  - 번들 분석 (`npm run build && npm run start`)

#### 5.7 배포 후 검증
- [ ] 프로덕션에서 모든 페이지 접속 확인
- [ ] API 응답 정상 확인
- [ ] 콘솔 에러/경고 확인
- [ ] Google Lighthouse 점수 확인
  - 성능: 90점 이상
  - 접근성: 90점 이상
  - SEO: 90점 이상

#### 5.8 모니터링 및 로깅 (선택 사항)
- [ ] Vercel Analytics 설정
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring

```typescript
// Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

#### 5.9 문서화
- [ ] README.md 최종 검토
- [ ] ROADMAP.md 완성 표시
- [ ] API 문서 작성 (선택 사항)
- [ ] 배포 가이드 작성

#### 5.10 최종 체크리스트
- [ ] 모든 링크가 정상 작동
- [ ] 404 페이지 스타일링
- [ ] 500 에러 페이지 스타일링
- [ ] 모든 페이지가 로딩된 후 표시 (hydration 오류 없음)
- [ ] 브라우저 호환성 (Chrome, Firefox, Safari, Edge)

### ⏱️ 예상 소요 시간
- 이미지/번들 최적화: 1시간
- 반응형 디자인 테스트: 1시간
- 접근성 개선: 1시간
- Vercel 배포: 30분
- 배포 후 검증: 1시간
- **총 예상**: 1.5-2시간

### ✅ 완료 기준
- [ ] Google Lighthouse 성능 점수 90점 이상
- [ ] Google Lighthouse 접근성 점수 90점 이상
- [ ] Google Lighthouse SEO 점수 90점 이상
- [ ] Vercel에 성공적으로 배포
- [ ] 모든 페이지가 프로덕션에서 정상 작동
- [ ] .env 파일이 git에 포함되지 않음

### 🤔 왜 이 순서?
기능 개발이 완료된 후 최적화합니다. 이렇게 하면 불필요한 최적화를 피하고, 실제 성능 문제를 중심으로 개선할 수 있습니다.

---

## 📊 전체 진행 상황

```
Phase 1: [████████████████████] 100% - 프로젝트 초기 설정
Phase 2: [                    ] 0% - 공통 모듈 개발
Phase 3: [                    ] 0% - 핵심 기능 개발
Phase 4: [                    ] 0% - 추가 기능 개발
Phase 5: [                    ] 0% - 최적화 및 배포

Progress: 0 / 5 Phases (0%)
Estimated Completion: 2026-07-23
```

---

## 🎯 각 Phase별 성공 지표

| Phase | 핵심 완료 기준 | 테스트 방법 |
|-------|---------|---------|
| 1 | npm run dev 실행 오류 없음 | 터미널에서 `npm run dev` 실행 |
| 2 | 모든 API 함수 작동 | API 호출 테스트 및 콘솔 로그 확인 |
| 3 | 모든 페이지 정상 렌더링 | 브라우저에서 각 페이지 방문 |
| 4 | 검색/필터 정상 작동 | 검색어/필터 옵션 테스트 |
| 5 | Lighthouse 90점 이상 | npm run build + Vercel 배포 후 점수 확인 |

---

## 🚀 배포 체크리스트

```
- [ ] 로컬 빌드 성공 (npm run build)
- [ ] 프로덕션 서버 테스트 (npm start)
- [ ] 환경 변수 설정 확인
- [ ] GitHub 저장소 public 상태 확인
- [ ] Vercel 연결 완료
- [ ] 배포 성공 확인
- [ ] 프로덕션 URL 접속 가능
- [ ] 모든 기능 정상 작동
- [ ] 모바일 접속 정상 확인
- [ ] 성능 지표 확인 (Lighthouse)
```

---

## 📞 문제 발생 시 대처 방법

### Notion API 연결 실패
1. API 키 확인 (`.env.local`)
2. 데이터베이스 ID 확인
3. Notion 인테그레이션 권한 확인

### 콘텐츠 렌더링 오류
1. Notion 블록 변환 함수 테스트
2. 콘솔 에러 메시지 확인
3. 특정 블록 타입 대응 추가

### 성능 저하
1. Network 탭에서 API 응답 시간 확인
2. 캐싱 정책 조정
3. 이미지 크기 최적화

### 배포 실패
1. 로컬 빌드 성공 확인
2. 환경 변수 확인
3. Node 버전 확인

---

## 📅 예상 전체 일정

- **Phase 1**: 2026-07-09 ~ 2026-07-10 (2일)
- **Phase 2**: 2026-07-11 ~ 2026-07-12 (3일)
- **Phase 3**: 2026-07-13 ~ 2026-07-15 (4일)
- **Phase 4**: 2026-07-16 ~ 2026-07-17 (3일)
- **Phase 5**: 2026-07-18 ~ 2026-07-19 (2일)

**총 소요 기간**: ~10일 (약 2주)

---

## 📚 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Notion API 레퍼런스](https://developers.notion.com/reference)
- [Notion 콘텐츠 렌더링 가이드](https://developers.notion.com/docs/working-with-page-content)
- [TypeScript 최신 문법](https://www.typescriptlang.org/docs/)
- [Vercel 배포 가이드](https://vercel.com/docs)

---

**마지막 업데이트**: 2026-07-09
**상태**: 📋 계획 단계
**다음 단계**: Phase 1 시작 - 프로젝트 초기 설정

✨ 이 로드맵을 따라 체계적으로 개발하면 안정적이고 확장 가능한 Notion CMS 프로젝트를 완성할 수 있습니다!
