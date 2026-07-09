import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllPosts, getCategories } from "@/lib/notion-api";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "DevNotes - 개발 학습 자료 공유 플랫폼",
  description: "Notion CMS 기반 개발 학습 자료를 관리하고 공유하세요",
};

export default async function Home() {
  const posts = await getAllPosts(6);
  const categories = await getCategories();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container max-w-4xl">
            <div className="flex flex-col gap-4">
              <Badge>DevNotes - 학습 자료 공유</Badge>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                개발 학습 자료를 한곳에서 관리하세요
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Notion에서 작성한 학습 자료가 자동으로 웹사이트에 반영됩니다. 효율적이고 간편한 콘텐츠 관리를 경험해보세요.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/notes">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/80 h-10 px-4 py-2 rounded-lg">
                    글 목록 보기
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/50">
          <div className="container max-w-4xl space-y-8 py-8 md:py-12 lg:py-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">최근 글</h2>
              <p className="text-muted-foreground">새로 발행된 학습 자료를 확인해보세요</p>
            </div>

            {posts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post.id} href={`/notes/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{post.summary}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge variant="outline">{post.difficulty}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{formatDate(post.publishedDate)}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">아직 발행된 글이 없습니다.</p>
                </CardContent>
              </Card>
            )}

            <div className="text-center">
              <Link href="/notes" className="text-primary hover:underline font-medium">
                모든 글 보기 →
              </Link>
            </div>
          </div>
        </section>

        {categories.length > 0 && (
          <section className="border-t">
            <div className="container max-w-4xl space-y-8 py-8 md:py-12 lg:py-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">카테고리</h2>
                <p className="text-muted-foreground">주제별로 학습 자료를 탐색하세요</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {categories.map((category) => (
                  <Link key={category} href={`/category/${encodeURIComponent(category)}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold">{category}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {posts.filter((p) => p.category === category).length}개의 글
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
