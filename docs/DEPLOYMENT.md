# 🚀 Vercel 배포 가이드

DevNotes MVP를 Vercel에 배포하는 단계별 가이드입니다.

## 📋 배포 전 필수 작업

### 1단계: Notion 데이터베이스 생성

1. **Notion 로그인**
   - [Notion](https://notion.so)에 로그인하세요

2. **데이터베이스 생성**
   - "새 페이지" → "데이터베이스" 선택
   - 이름: "LearningNotes" (또는 원하는 이름)

3. **필드 추가** (다음 순서대로)
   - **Title**: Title (제목)
   - **Category**: Select (카테고리: JavaScript, Python, TypeScript 등)
   - **Tags**: Multi-select (태그: async/await, Promise 등)
   - **Difficulty**: Select (난이도: beginner, intermediate, advanced)
   - **Published Date**: Date (발행 일자)
   - **Updated Date**: Date (수정 일자)
   - **Status**: Select (상태: draft, published, archived)
   - **Summary**: Text (요약)
   - **Slug**: Text (URL-friendly 이름)
   - **Featured**: Checkbox (홈페이지 표시 여부)
   - **Views**: Number (조회수, 기본값 0)

4. **샘플 데이터 추가**
   - 최소 2-3개의 글을 "published" 상태로 추가하세요

### 2단계: Notion API 키 발급

1. **Notion Developers 접속**
   - [Notion Developers](https://developers.notion.com)에 접속

2. **새 인테그레이션 생성**
   - "Create new integration" 클릭
   - 이름: "DevNotes" (또는 원하는 이름)
   - 필요한 기능 선택 (Read 권한 필수)
   - "Submit" 클릭

3. **API 키 복사**
   - "Internal Integration Token" 섹션에서 API 키 복사
   - 이 키를 안전하게 보관하세요

4. **데이터베이스에 접근 권한 설정**
   - Notion에서 생성한 데이터베이스 열기
   - 우측 상단 "•••" → "Connections" 선택
   - 방금 생성한 인테그레이션 추가

### 3단계: 데이터베이스 ID 확인

1. **데이터베이스 ID 찾기**
   - Notion에서 데이터베이스 열기
   - URL 주소 확인: `https://notion.so/database/[DATABASE_ID]?v=...`
   - `[DATABASE_ID]` 부분을 복사 (대시 제거)

2. **형식 확인**
   - 32자의 영문과 숫자 조합이어야 함
   - 예: `12345678901234567890123456789012`

---

## 🔧 로컬에서 테스트

배포 전에 로컬에서 정상 작동하는지 확인하세요.

### 1. 환경 변수 설정

`.env.local` 파일 생성:

```env
NOTION_API_KEY=your_api_key_here
NEXT_PUBLIC_NOTION_DATABASE_ID=your_database_id_here
```

### 2. 패키지 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 테스트

- [http://localhost:3000](http://localhost:3000)에서 홈페이지 확인
- 최근 글이 표시되는지 확인
- `/notes`에서 글 목록 표시 확인
- 브라우저 콘솔에서 에러 없는지 확인

### 5. 빌드 테스트

```bash
npm run build
npm run start
```

빌드가 성공하고 프로덕션 서버가 정상 작동하는지 확인하세요.

---

## 📦 Vercel에 배포

### 1단계: Vercel 연결

1. **Vercel 가입**
   - [Vercel](https://vercel.com)에서 가입 (GitHub 계정으로 로그인 권장)

2. **GitHub 저장소 연결**
   - "New Project" 클릭
   - GitHub 저장소 선택
   - "Import" 클릭

3. **프로젝트 설정**
   - **Framework Preset**: "Next.js" 자동 선택됨
   - **Build Command**: `next build` (기본값 사용)
   - **Output Directory**: `.next` (기본값 사용)
   - **Install Command**: `npm install` (기본값 사용)

### 2단계: 환경 변수 설정

1. **Environment Variables 추가**
   - "Environment Variables" 섹션 확인
   - 다음 변수들을 추가:

   ```
   NOTION_API_KEY = your_api_key_here
   NEXT_PUBLIC_NOTION_DATABASE_ID = your_database_id_here
   ```

2. **변수 저장**
   - "Add" 버튼으로 각 변수 추가
   - "Deploy" 진행하기 전에 모두 추가했는지 확인

### 3단계: 배포

1. **배포 시작**
   - "Deploy" 버튼 클릭
   - 배포 진행 상황을 확인 (약 3-5분)

2. **배포 완료**
   - "Congratulations" 메시지 확인
   - Vercel URL 복사 (예: `https://devnotes-abc123.vercel.app`)

### 4단계: 배포 후 확인

배포된 사이트에 접속:

- [ ] 홈페이지가 정상 로드되는가?
- [ ] 최근 글 목록이 표시되는가?
- [ ] 카테고리가 표시되는가?
- [ ] `/notes`에서 글 목록이 표시되는가?
- [ ] 브라우저 콘솔에 에러가 없는가?
- [ ] 반응형 디자인이 정상 작동하는가?

---

## 🔍 배포 후 문제 해결

### 문제 1: "500 Internal Server Error"

**원인**: Notion API 연결 실패

**해결책**:
1. 환경 변수가 정확한지 확인
2. Notion API 키가 유효한지 확인
3. 데이터베이스 ID가 정확한지 확인
4. Vercel 대시보드에서 "Deployments" → "Logs" 확인

### 문제 2: "글이 표시되지 않음"

**원인**: Notion 데이터베이스가 비어있거나 접근 권한 없음

**해결책**:
1. Notion에서 글이 "published" 상태인지 확인
2. Notion 데이터베이스에 인테그레이션이 추가되었는지 확인
3. 샘플 글 다시 추가 후 몇 분 대기

### 문제 3: "빌드 실패"

**해결책**:
1. Vercel 대시보드에서 빌드 로그 확인
2. TypeScript 에러가 있는지 확인
3. 필요한 환경 변수가 모두 설정되었는지 확인
4. GitHub에서 최신 코드를 로컬에서 테스트

### 문제 4: "스타일이 적용되지 않음"

**해결책**:
1. 캐시 삭제 (Ctrl+Shift+Delete)
2. 브라우저 개발자 도구에서 CSS 로드 확인
3. Vercel에서 "Redeploy" 실행

---

## 📊 배포 모니터링

### Vercel Analytics

1. **활성화**
   - Vercel 대시보드 → "Analytics" 탭
   - 자동으로 활성화됨

2. **확인 사항**
   - **Performance**: Core Web Vitals 점수
   - **Traffic**: 방문자 수
   - **Errors**: 에러 발생 현황

### Google Lighthouse

1. **점수 확인**
   - Chrome 개발자 도구 → "Lighthouse" 탭
   - "Generate report" 실행

2. **목표 점수**
   - Performance: 90점 이상
   - Accessibility: 90점 이상
   - SEO: 90점 이상

---

## 🔄 지속적 배포

### 자동 배포 설정

1. **GitHub Push 시 자동 배포**
   - 기본적으로 활성화됨
   - `main` 브랜치에 push하면 자동 배포

2. **배포 상태 확인**
   - Vercel 대시보드에서 배포 이력 확인
   - GitHub에서 "commit" 옆 배포 상태 아이콘 확인

### 수동 배포

1. **Vercel 대시보드 방문**
2. **프로젝트 선택**
3. **"Redeploy" 클릭**
4. **배포 완료 대기**

---

## 📝 다음 단계

### MVP 이후 개선사항

1. **Phase 4: 추가 기능**
   - 카테고리 필터링
   - 검색 기능
   - SEO 최적화

2. **Phase 5: 최적화 및 배포**
   - 성능 최적화
   - 반응형 디자인 완성
   - 다크모드

3. **모니터링 설정**
   - Sentry로 에러 추적
   - Google Analytics로 사용자 분석

---

## 💡 팁

- **환경 변수 보안**: `.env.local`은 절대 git에 커밋하지 마세요
- **캐싱**: Notion API 응답을 캐싱하면 성능 향상
- **무한 스크롤**: 글이 많아지면 페이지네이션 추가
- **이미지 최적화**: Notion의 이미지 URL을 Next.js Image로 최적화

---

**마지막 업데이트**: 2026-07-09

배포 완료 후 Vercel URL을 제출해주세요! 🚀
