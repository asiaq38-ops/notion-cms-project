# add-component

Creates a new React component file with TypeScript, JSDoc comments, and Tailwind CSS styling.

**Usage:** `/add-component <component-name> [--ui]`

**Arguments:**
- `<component-name>` - Component name in PascalCase (e.g., "Card", "UserProfile")
- `--ui` - Create in components/ui/ folder for shadcn/ui style components (optional)

**Example:**
```
/add-component Hero
/add-component UserCard --ui
/add-component BlogHeader
```

---

## Task

사용자가 입력한 컴포넌트명 `$1`을 받아서 다음을 수행해줘:

1. **파일 경로 결정**:
   - `--ui` 플래그가 있으면: `components/ui/$1.tsx`
   - 없으면: `components/$1.tsx`

2. **컴포넌트 파일 생성**:
   - React 함수형 컴포넌트
   - TypeScript interface 사용
   - JSDoc 주석 추가 (/** */ 형식)
   - Props interface 정의
   - Tailwind CSS 클래스 사용
   - cn() 유틸 import

3. **기본 템플릿**:

```tsx
import { cn } from "@/lib/utils";

interface $1Props extends React.HTMLAttributes<HTMLDivElement> {
  // Add your props here
}

/**
 * $1 component
 * @param {$1Props} props - Component props
 */
export function $1({ className, ...props }: $1Props) {
  return (
    <div className={cn("", className)} {...props}>
      {/* Add your component content here */}
    </div>
  );
}
```

4. **export 문 추가**: 파일 마지막에 `export { $1 };`

완료 후 생성된 컴포넌트 경로와 import 코드를 사용자에게 알려줘.

**Import example:**
```tsx
import { $1 } from "@/components/$1";
```
