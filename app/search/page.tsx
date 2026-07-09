import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { searchPosts } from "@/lib/notion-api";
import { formatDate } from "@/lib/utils";

interface SearchPageProps {
  searchParams: Promise<{ q: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = decodeURIComponent(q || "");

  return {
    title: `검색 결과: ${query} | DevNotes`,
    description: `"${query}"에 대한 검색 결과`,
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = decodeURIComponent(q || "");

  let results = [];
  if (query.trim()) {
    results = await searchPosts(query);
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
          <div className="container max-w-4xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tight">
                검색 결과
              </h1>
              <p className="text-lg text-muted-foreground">
                "{query}" - {results.length}개의 결과
              </p>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="container max-w-4xl space-y-8 py-8 md:py-12">
            {results.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {results.map((post) => (
                  <Link key={post.id} href={`/notes/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.summary}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge variant="outline">{post.difficulty}</Badge>
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{formatDate(post.publishedDate)}</span>
                          <span className="flex items-center gap-1">
                            👁️ {post.views}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : query.trim() ? (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground py-12">
                    "{query}"에 대한 검색 결과가 없습니다.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground py-12">
                    검색어를 입력해주세요.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* 모든 글로 돌아가기 */}
            <div className="flex justify-center mt-12">
              <Link
                href="/notes"
                className="px-6 py-2 border border-input hover:bg-accent rounded-lg transition-colors"
              >
                ← 모든 글 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
