# 🚀 Shrimp Task Manager - DevNotes 프로젝트 작업 계획

**프로젝트**: DevNotes - Notion CMS 기반 개발 학습 자료 공유 플랫폼  
**생성일**: 2026-07-09  
**총 작업 수**: 23개  
**예상 기간**: 9-14일

---

## 📊 작업 계획 요약

### Phase 1: 프로젝트 초기 설정 (1-2일) - 골격
**상태**: 📋 미시작
**우선순위**: 🔴 높음
**의존성**: 없음 (가장 먼저)
**목표**: 견고한 프로젝트 기반 구축

### Phase 2: 공통 모듈 개발 (2-3일) - 공통
**상태**: 📋 미시작
**우선순위**: 🔴 높음
**의존성**: Phase 1 완료 후
**목표**: 모든 기능에서 사용할 공통 API 함수와 컴포넌트

### Phase 3: 핵심 기능 개발 (3-4일) - 개별
**상태**: 📋 미시작
**우선순위**: 🔴 높음
**의존성**: Phase 2 완료 후
**목표**: 블로그 기본 기능 (목록, 상세)

### Phase 4: 추가 기능 개발 (2-3일) - 개별
**상태**: 📋 미시작
**우선순위**: 🟡 중간
**의존성**: Phase 3 완료 후
**목표**: 사용자 편의성 기능 (검색, 필터)

### Phase 5: 최적화 및 배포 (1-2일) - 마무리
**상태**: 📋 미시작
**우선순위**: 🟡 중간
**의존성**: Phase 4 완료 후
**목표**: 성능 최적화 및 프로덕션 배포

---

## 📋 전체 작업 목록 (우선순위 순서)

### ✅ PHASE 1: 프로젝트 초기 설정 (골격)

#### 1-1. Node.js 패키지 설치 및 검증
- **ID**: TASK-1
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0 (최우선)
- **의존성**: 없음
- **예상 시간**: 30분
- **설명**: npm 패키지 설치, Notion API 패키지 추가, 환경 변수 설정
- **완료 기준**:
  - [ ] npm install 완료
  - [ ] 모든 패키지 설치됨
  - [ ] .env.example 파일 작성

#### 1-2. TypeScript 타입 정의 (lib/types.ts)
- **ID**: TASK-2
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-1 완료
- **예상 시간**: 1시간
- **설명**: BlogPost, Category, SearchResult 등 핵심 타입 정의
- **완료 기준**:
  - [ ] lib/types.ts 파일 생성
  - [ ] 모든 핵심 인터페이스 정의
  - [ ] TypeScript 타입 검사 통과

#### 1-3. 프로젝트 폴더 구조 정리
- **ID**: TASK-3
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-1 완료
- **예상 시간**: 1시간
- **설명**: 불필요한 파일 정리, app/api 폴더 구조 생성
- **완료 기준**:
  - [ ] 구조 최적화 완료
  - [ ] 폴더 계층 명확
  - [ ] 불필요한 파일 제거

#### 1-4. Notion API 환경 설정
- **ID**: TASK-4
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-1, TASK-3 완료
- **예상 시간**: 1시간
- **설명**: .env.local 파일 생성, API 키 및 DB ID 설정
- **완료 기준**:
  - [ ] .env.local 파일 생성
  - [ ] 모든 환경 변수 설정
  - [ ] 환경 변수 로드 테스트

#### 1-5. 기본 레이아웃 구조 확인
- **ID**: TASK-5
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-1 완료
- **예상 시간**: 30분
- **설명**: Root layout 확인, 전역 스타일 로드, 페이지 메타데이터 기본 구조
- **완료 기준**:
  - [ ] Layout 정상 작동
  - [ ] 전역 스타일 로드됨
  - [ ] 메타데이터 기본 구조 설정

#### 1-6. 개발 환경 준비 및 테스트
- **ID**: TASK-6
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-1, TASK-4 완료
- **예상 시간**: 30분
- **설명**: npm run dev 실행, TypeScript 검사, 빌드 테스트
- **완료 기준**:
  - [ ] npm run dev 실행 성공
  - [ ] TypeScript 타입 검사 통과
  - [ ] npm run build 성공
  - [ ] 콘솔 에러 없음

---

### ✅ PHASE 2: 공통 모듈 개발 (공통)

#### 2-1. Notion API 클라이언트 초기화
- **ID**: TASK-7
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-6 완료 (Phase 1 완료)
- **예상 시간**: 30분
- **설명**: lib/notion.ts 파일 생성, Notion 클라이언트 초기화
- **완료 기준**:
  - [ ] lib/notion.ts 생성
  - [ ] 클라이언트 초기화 성공
  - [ ] 환경 변수 정상 로드

#### 2-2. 핵심 Notion API 함수 작성
- **ID**: TASK-8
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-7 완료
- **예상 시간**: 2시간
- **설명**: getAllPosts(), getPostBySlug(), getPostsByCategory(), searchPosts(), getPageContent(), getCategories() 함수
- **완료 기준**:
  - [ ] 모든 API 함수 구현
  - [ ] 함수 호출 테스트 성공
  - [ ] 정상적인 데이터 반환

#### 2-3. Notion 데이터 변환 함수
- **ID**: TASK-9
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-8 완료
- **예상 시간**: 1.5시간
- **설명**: transformNotionPageToPost(), transformBlocksToHtml() 함수
- **완료 기준**:
  - [ ] 변환 함수 구현
  - [ ] 샘플 데이터 변환 테스트
  - [ ] HTML 렌더링 확인

#### 2-4. 공통 컴포넌트 개발 (UI)
- **ID**: TASK-10
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-2 완료
- **예상 시간**: 2시간
- **설명**: BlogCard, PostMetadata, Tags, CategoryBadge, SearchBar 컴포넌트
- **완료 기준**:
  - [ ] 모든 컴포넌트 생성
  - [ ] 컴포넌트 렌더링 성공
  - [ ] Props 타입 정의 완료

#### 2-5. 커스텀 Hook 개발
- **ID**: TASK-11
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-8, TASK-9 완료
- **예상 시간**: 1시간
- **설명**: usePosts(), usePost(), useSearch(), useCategories() Hook
- **완료 기준**:
  - [ ] 모든 Hook 구현
  - [ ] 데이터 캐싱 작동
  - [ ] Hook 호출 테스트

#### 2-6. 유틸리티 함수 작성
- **ID**: TASK-12
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-2 완료
- **예상 시간**: 1시간
- **설명**: generateSlug(), formatDate(), truncateText(), highlightText() 함수
- **완료 기준**:
  - [ ] 모든 유틸 함수 구현
  - [ ] 함수 동작 테스트
  - [ ] TypeScript 타입 일관성

---

### ✅ PHASE 3: 핵심 기능 개발 (개별 기능)

#### 3-1. 홈 페이지 구현 (/)
- **ID**: TASK-13
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-12 완료 (Phase 2 완료)
- **예상 시간**: 1시간
- **설명**: 최근 글, 카테고리 바로가기, 히어로 섹션
- **완료 기준**:
  - [ ] 페이지 렌더링
  - [ ] 최근 글 표시
  - [ ] 카테고리 섹션 표시

#### 3-2. 글 목록 페이지 구현 (/notes)
- **ID**: TASK-14
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-13 완료
- **예상 시간**: 1.5시간
- **설명**: 글 목록, 그리드 뷰, 페이지네이션
- **완료 기준**:
  - [ ] 글 목록 표시
  - [ ] 그리드/리스트 뷰 구성
  - [ ] 페이지네이션 작동

#### 3-3. 글 상세 페이지 구현 (/notes/[slug])
- **ID**: TASK-15
- **상태**: 📋 미시작
- **우선순위**: 🔴 P0
- **의존성**: TASK-14 완료
- **예상 시간**: 2시간
- **설명**: Notion 콘텐츠 렌더링, 목차 생성, 메타데이터 표시
- **완료 기준**:
  - [ ] 동적 라우트 작동
  - [ ] 콘텐츠 HTML 렌더링
  - [ ] 목차 자동 생성
  - [ ] 메타데이터 표시

#### 3-4. API Routes 구현
- **ID**: TASK-16
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-15 완료
- **예상 시간**: 1시간
- **설명**: /api/notes, /api/notes/[slug] 엔드포인트
- **완료 기준**:
  - [ ] API 엔드포인트 생성
  - [ ] 데이터 응답 확인
  - [ ] 에러 처리 구현

---

### ✅ PHASE 4: 추가 기능 개발 (부가 기능)

#### 4-1. 카테고리 필터링 구현
- **ID**: TASK-17
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-14 완료 (Phase 3 완료)
- **예상 시간**: 1시간
- **설명**: /category/[name] 페이지, 카테고리별 필터링
- **완료 기준**:
  - [ ] 카테고리 페이지 생성
  - [ ] 카테고리별 글 필터링
  - [ ] 동적 라우트 작동

#### 4-2. 검색 기능 구현
- **ID**: TASK-18
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-17 완료
- **예상 시간**: 1.5시간
- **설명**: /search 페이지, 검색 결과 표시, 하이라이팅
- **완료 기준**:
  - [ ] 검색 페이지 생성
  - [ ] 검색 결과 표시
  - [ ] 검색어 하이라이팅

#### 4-3. 글 목록 필터/정렬 기능
- **ID**: TASK-19
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-18 완료
- **예상 시간**: 1시간
- **설명**: 필터 사이드바, 정렬 옵션, URL 쿼리 파라미터
- **완료 기준**:
  - [ ] 필터 UI 생성
  - [ ] 정렬 기능 작동
  - [ ] URL 쿼리 처리

#### 4-4. SEO 최적화
- **ID**: TASK-20
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-19 완료
- **예상 시간**: 1시간
- **설명**: 메타 태그, JSON-LD, sitemap, robots.txt
- **완료 기준**:
  - [ ] 메타 태그 설정
  - [ ] 구조화된 데이터 추가
  - [ ] sitemap 생성

---

### ✅ PHASE 5: 최적화 및 배포 (마무리)

#### 5-1. 성능 최적화
- **ID**: TASK-21
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-20 완료 (Phase 4 완료)
- **예상 시간**: 1시간
- **설명**: 이미지 최적화, 번들 크기, 캐싱 정책
- **완료 기준**:
  - [ ] 이미지 최적화
  - [ ] 번들 크기 감소
  - [ ] ISR/캐싱 설정

#### 5-2. 반응형 디자인 및 다크모드 완성
- **ID**: TASK-22
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-21 완료
- **예상 시간**: 1시간
- **설명**: 모바일/태블릿/데스크톱 테스트, 다크모드
- **완료 기준**:
  - [ ] 모든 화면 크기 테스트
  - [ ] 다크모드 적용
  - [ ] 접근성 검사 (Lighthouse 90점+)

#### 5-3. Vercel 배포
- **ID**: TASK-23
- **상태**: 📋 미시작
- **우선순위**: 🟡 P1
- **의존성**: TASK-22 완료
- **예상 시간**: 1시간
- **설명**: Vercel 배포, 환경 변수 설정, 배포 후 검증
- **완료 기준**:
  - [ ] Vercel 배포 성공
  - [ ] 프로덕션 URL 접근 가능
  - [ ] 모든 기능 정상 작동
  - [ ] Lighthouse 점수 확인 (성능 90+)

---

## 📊 작업 의존성 그래프

```
TASK-1 (Package Install)
    ↓
TASK-2 (TypeScript Types) + TASK-3 (Folder Structure) + TASK-4 (Env Setup)
    ↓
TASK-5 (Layout) + TASK-6 (Dev Test)
    ↓
[PHASE 1 완료] ────────────────────────────┐
                                            ↓
TASK-7 (Notion Client) ← TASK-2, TASK-4     │
    ↓                                       │
TASK-8 (API Functions) ← TASK-7             │
    ↓                                       │
TASK-9 (Data Transform) ← TASK-8            │
    ↓                                       │
TASK-10 (Components) + TASK-11 (Hooks) + TASK-12 (Utils)
    ↓
[PHASE 2 완료] ────────────────────────────┤
                                            ↓
TASK-13 (Home Page) ← TASK-12               │
    ↓                                       │
TASK-14 (Notes List) ← TASK-13              │
    ↓                                       │
TASK-15 (Notes Detail) ← TASK-14            │
    ↓                                       │
TASK-16 (API Routes) ← TASK-15              │
    ↓
[PHASE 3 완료] ────────────────────────────┤
                                            ↓
TASK-17 (Category Filter) ← TASK-14         │
    ↓                                       │
TASK-18 (Search) ← TASK-17                  │
    ↓                                       │
TASK-19 (Filter/Sort) ← TASK-18             │
    ↓                                       │
TASK-20 (SEO) ← TASK-19                     │
    ↓
[PHASE 4 완료] ────────────────────────────┤
                                            ↓
TASK-21 (Performance) ← TASK-20             │
    ↓                                       │
TASK-22 (Responsive/Dark) ← TASK-21         │
    ↓                                       │
TASK-23 (Vercel Deploy) ← TASK-22           │
    ↓
[PHASE 5 완료 - 프로젝트 완성! 🎉]
```

---

## ⚡ 작업 실행 순서 (Priority 순)

### 🔴 P0 (즉시 실행) - 7개 작업
1. TASK-1: Package Install
2. TASK-2: TypeScript Types
3. TASK-3: Folder Structure
4. TASK-4: Env Setup
5. TASK-7: Notion Client
6. TASK-8: API Functions
7. TASK-9: Data Transform

### 🟡 P1 (Phase 완료 후) - 12개 작업
8. TASK-5: Layout Setup
9. TASK-6: Dev Test
10. TASK-10: Components
11. TASK-11: Hooks
12. TASK-12: Utils
13. TASK-13: Home Page
14. TASK-14: Notes List
15. TASK-15: Notes Detail
16. TASK-16: API Routes
17. TASK-17: Category
18. TASK-18: Search
19. TASK-19: Filter/Sort
20. TASK-20: SEO
21. TASK-21: Performance
22. TASK-22: Responsive
23. TASK-23: Deploy

---

## 📈 진행 상황 추적

### Completed (0%)
```
[                    ] 0 / 23
```

### By Phase
- **Phase 1**: 0 / 6 작업 (0%)
- **Phase 2**: 0 / 6 작업 (0%)
- **Phase 3**: 0 / 4 작업 (0%)
- **Phase 4**: 0 / 4 작업 (0%)
- **Phase 5**: 0 / 3 작업 (0%)

---

## 💡 작업 완료 체크리스트

### Phase 1 완료 확인
- [ ] TASK-1: Package Install 완료
- [ ] TASK-2: TypeScript Types 완료
- [ ] TASK-3: Folder Structure 완료
- [ ] TASK-4: Env Setup 완료
- [ ] TASK-5: Layout Setup 완료
- [ ] TASK-6: Dev Test 완료
- **Phase 1 상태**: ⏳ 준비 중

### Phase 2 완료 확인
- [ ] TASK-7: Notion Client 완료
- [ ] TASK-8: API Functions 완료
- [ ] TASK-9: Data Transform 완료
- [ ] TASK-10: Components 완료
- [ ] TASK-11: Hooks 완료
- [ ] TASK-12: Utils 완료
- **Phase 2 상태**: ⏳ 준비 중

### Phase 3 완료 확인
- [ ] TASK-13: Home Page 완료
- [ ] TASK-14: Notes List 완료
- [ ] TASK-15: Notes Detail 완료
- [ ] TASK-16: API Routes 완료
- **Phase 3 상태**: ⏳ 준비 중

### Phase 4 완료 확인
- [ ] TASK-17: Category Filter 완료
- [ ] TASK-18: Search 완료
- [ ] TASK-19: Filter/Sort 완료
- [ ] TASK-20: SEO 완료
- **Phase 4 상태**: ⏳ 준비 중

### Phase 5 완료 확인
- [ ] TASK-21: Performance 완료
- [ ] TASK-22: Responsive/Dark 완료
- [ ] TASK-23: Vercel Deploy 완료
- **Phase 5 상태**: ⏳ 준비 중

---

## 🎯 핵심 원칙 (반드시 지킬 것!)

✅ **올바른 개발 순서**
```
Phase 1 (골격)
    ↓
Phase 2 (공통)
    ↓
Phase 3 (개별 기능)
    ↓
Phase 4 (추가 기능)
    ↓
Phase 5 (최적화 & 배포)
```

✅ **각 Phase는 이전 Phase 완료 후 시작**
- Phase 2는 Phase 1 완료 후
- Phase 3은 Phase 2 완료 후
- Phase 4는 Phase 3 완료 후
- Phase 5는 Phase 4 완료 후

✅ **공통 모듈이 개별 기능보다 먼저**
- 모든 API 함수는 Phase 2에서 개발
- 모든 공통 컴포넌트는 Phase 2에서 개발
- 개별 페이지는 Phase 3 이후에 개발

---

## 📞 문제 해결 가이드

### 어느 작업부터 시작해야 하나요?
→ **TASK-1 (Package Install)부터 시작하세요!**

### 여러 작업을 동시에 할 수 있나요?
→ **같은 Phase 내의 독립적인 작업만 병렬 실행 가능**
예: TASK-2, TASK-3, TASK-4는 동시 실행 가능 (모두 TASK-1에만 의존)

### 작업 순서를 바꿔도 되나요?
→ **절대 안 됩니다!** 의존성을 반드시 지켜야 합니다.
예: TASK-8 (API Functions)은 반드시 TASK-7 (Notion Client) 이후

---

**마지막 업데이트**: 2026-07-09
**상태**: 📋 계획 수립 완료
**다음 단계**: TASK-1 시작 - Package Install

🚀 이 순서대로 진행하면 안정적이고 확장 가능한 프로젝트를 완성할 수 있습니다!
