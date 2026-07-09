import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllPosts, getPostsByCategory, getCategories, getTags, getPostsByTag } from "@/lib/notion-api";
import { formatDate } from "@/lib/utils";

interface NotesPageProps {
  searchParams: Promise<{ category?: string; tag?: string }>;
}

export async function generateMetadata({ searchParams }: NotesPageProps) {
  const { category, tag } = await searchParams;
  let title = "모든 글 | DevNotes";
  let description = "DevNotes의 모든 학습 자료를 보세요";

  if (category) {
    title = `${category} - 모든 글 | DevNotes`;
    description = `${category} 카테고리의 학습 자료`;
  } else if (tag) {
    title = `${tag} - 모든 글 | DevNotes`;
    description = `"${tag}" 태그의 학습 자료`;
  }

  return { title, description };
}

export default async function NotesPage({ searchParams }: NotesPageProps) {
  const { category, tag } = await searchParams;
  const categories = await getCategories();
  const tags = await getTags();

  let posts = [];
  if (category) {
    posts = await getPostsByCategory(category);
  } else if (tag) {
    posts = await getPostsByTag(tag);
  } else {
    posts = await getAllPosts();
  }

  let title = "모든 글";
  if (category) title = `${category} 카테고리`;
  else if (tag) title = `"${tag}" 태그`;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
          <div className="container max-w-4xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
              <p className="text-lg text-muted-foreground">
                {posts.length}개의 학습 자료
              </p>
            </div>
          </div>
        </section>

        {/* 카테고리 필터 */}
        <section className="border-t bg-muted/50">
          <div className="container max-w-4xl py-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">카테고리</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/notes">
                    <button className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      !category && !tag
                        ? "bg-primary text-primary-foreground"
                        : "border border-input hover:bg-accent"
                    }`}>
                      모든 카테고리
                    </button>
                  </Link>
                  {categories.map((cat) => (
                    <Link key={cat} href={`/notes?category=${encodeURIComponent(cat)}`}>
                      <button className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        category === cat
                          ? "bg-primary text-primary-foreground"
                          : "border border-input hover:bg-accent"
                      }`}>
                        {cat}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium">태그</span>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/notes">
                      <button className={`px-3 py-1 rounded-full text-xs transition-colors ${
                        !tag
                          ? "bg-secondary text-secondary-foreground"
                          : "border border-input hover:bg-accent"
                      }`}>
                        모든 태그
                      </button>
                    </Link>
                    {tags.map((t) => (
                      <Link key={t} href={`/notes?tag=${encodeURIComponent(t)}`}>
                        <button className={`px-3 py-1 rounded-full text-xs transition-colors ${
                          tag === t
                            ? "bg-secondary text-secondary-foreground"
                            : "border border-input hover:bg-accent"
                        }`}>
                          #{t}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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
                    해당 카테고리의 발행된 글이 없습니다.
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
