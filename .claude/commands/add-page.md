# add-page

Creates a new Next.js page with default layout, Header component, and Tailwind CSS styling.

**Usage:** `/add-page <page-name>`

**Arguments:**
- `<page-name>` - Page name/path (e.g., "about", "blog/post", "features")

**Example:**
```
/add-page about
/add-page blog/featured-posts
/add-page docs/getting-started
```

---

## Task

사용자가 입력한 페이지명 `$1`을 받아서 다음을 수행해줘:

1. **파일 생성**: `app/$1/page.tsx` 경로에 새 파일 생성
2. **페이지 템플릿 추가**: 
   - Header 컴포넌트 import
   - 페이지 제목 (파일명을 기반으로 생성)
   - Card 컴포넌트를 사용한 기본 레이아웃
   - Tailwind CSS로 스타일링
   - TypeScript export default function 사용

3. **레이아웃 파일이 없으면 생성**: `app/$1/layout.tsx` 확인 후 필요하면 생성

예시 페이지 구조:
```tsx
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PageName() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
          <div className="container max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight">Page Title</h1>
            <p className="text-lg text-muted-foreground mt-2">Page description</p>
          </div>
        </section>

        <section className="border-t">
          <div className="container max-w-4xl space-y-8 py-8 md:py-12">
            {/* Page content */}
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add your content here */}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
```

완료 후 생성된 파일 경로를 사용자에게 알려줘.
