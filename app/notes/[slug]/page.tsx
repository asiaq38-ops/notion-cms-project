import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getPostBySlug, getPageContent } from "@/lib/notion-api";
import { getComments } from "@/lib/comments";
import { CommentsSection } from "@/components/comments-section";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "글을 찾을 수 없습니다 | DevNotes",
    };
  }

  return {
    title: `${post.title} | DevNotes`,
    description: post.summary,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await getPageContent(post.id);
  const comments = await getComments(post.id);

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="space-y-8 py-8 md:py-12">
          <div className="container max-w-3xl">
            {/* 제목 및 메타데이터 */}
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{post.category}</Badge>
                <Badge variant="outline">{post.difficulty}</Badge>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>📅 {formatDate(post.publishedDate)}</span>
                  <span className="flex items-center gap-1">
                    👁️ {post.views}
                  </span>
                </div>
              </div>

              {post.summary && (
                <p className="text-lg text-muted-foreground">{post.summary}</p>
              )}
            </div>

            {/* 구분선 */}
            <hr className="my-8" />

            {/* 본문 콘텐츠 */}
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* 구분선 */}
            <hr className="my-8" />

            {/* 글 정보 */}
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-base">글 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">카테고리</span>
                  <span className="font-medium">{post.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">난이도</span>
                  <span className="font-medium">{post.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">발행일</span>
                  <span className="font-medium">{formatDate(post.publishedDate)}</span>
                </div>
                {post.updatedDate && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">수정일</span>
                    <span className="font-medium">{formatDate(post.updatedDate)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">조회수</span>
                  <span className="font-medium">{post.views}</span>
                </div>
              </CardContent>
            </Card>

            {/* 이전/다음 글 네비게이션 */}
            <div className="flex justify-center gap-4 mt-12">
              <Link
                href="/notes"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                ← 글 목록으로
              </Link>
            </div>

            {/* 댓글 섹션 */}
            <hr className="my-12" />
            <CommentsSection postId={post.id} initialComments={comments} />
          </div>
        </article>
      </main>
    </>
  );
}
