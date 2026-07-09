"use client";

import { useState } from "react";
import { addComment, getComments } from "@/lib/comments";
import { Comment } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

interface CommentsSectionProps {
  postId: string;
  initialComments: Comment[];
}

export function CommentsSection({
  postId,
  initialComments,
}: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!author.trim() || !email.trim() || !content.trim()) {
      alert("모든 필드를 입력해주세요");
      return;
    }

    setLoading(true);
    try {
      const newComment = await addComment(postId, author, email, content);
      setComments([...comments, newComment]);
      setAuthor("");
      setEmail("");
      setContent("");
      setSubmitted(true);

      // 2초 후 제출 완료 메시지 숨기기
      setTimeout(() => setSubmitted(false), 2000);
    } catch (error) {
      console.error("Failed to add comment:", error);
      alert("댓글 작성에 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* 댓글 폼 */}
      <div>
        <h3 className="text-xl font-bold mb-4">댓글 작성</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">이름</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="이름을 입력하세요"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">이메일</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">댓글</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="댓글을 입력하세요"
              rows={4}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? "제출 중..." : "댓글 작성"}
          </button>

          {submitted && (
            <div className="p-3 bg-green-100 text-green-800 rounded-lg text-sm">
              ✓ 댓글이 작성되었습니다!
            </div>
          )}
        </form>
      </div>

      {/* 댓글 목록 */}
      <div>
        <h3 className="text-xl font-bold mb-4">
          댓글 {comments.length}개
        </h3>

        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">{comment.author}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(comment.createdAt)}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm whitespace-pre-wrap">{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-6">
                아직 댓글이 없습니다. 첫 번째 댓글을 작성해주세요!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
