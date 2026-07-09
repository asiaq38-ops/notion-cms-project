import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllPosts } from "@/lib/notion-api";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "모든 글 | DevNotes",
  description: "DevNotes의 모든 학습 자료를 보세요",
};

export default async function NotesPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
          <div className="container max-w-4xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tight">모든 글</h1>
              <p className="text-lg text-muted-foreground">
                {posts.length}개의 학습 자료
              </p>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="container max-w-4xl space-y-8 py-8 md:py-12">
            {posts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
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
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground py-12">
                    아직 발행된 글이 없습니다. Notion에서 글을 작성해주세요!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
