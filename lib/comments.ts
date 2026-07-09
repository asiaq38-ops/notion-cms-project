"use server";

import { Comment } from "./types";

// 메모리 기반 댓글 저장 (프로토타입 목적)
// 실제 배포에서는 데이터베이스 사용 권장
const commentsStore = new Map<string, Comment[]>();

/**
 * 글의 댓글 조회
 */
export async function getComments(postId: string): Promise<Comment[]> {
  return commentsStore.get(postId) || [];
}

/**
 * 댓글 추가
 */
export async function addComment(
  postId: string,
  author: string,
  email: string,
  content: string
): Promise<Comment> {
  const comment: Comment = {
    id: `comment-${Date.now()}`,
    postId,
    author,
    email,
    content,
    createdAt: new Date(),
    approved: true, // 실제 배포에서는 admin 승인 필요
  };

  if (!commentsStore.has(postId)) {
    commentsStore.set(postId, []);
  }

  commentsStore.get(postId)!.push(comment);
  return comment;
}

/**
 * 댓글 삭제 (admin only)
 */
export async function deleteComment(
  postId: string,
  commentId: string
): Promise<boolean> {
  const comments = commentsStore.get(postId);
  if (!comments) return false;

  const index = comments.findIndex((c) => c.id === commentId);
  if (index === -1) return false;

  comments.splice(index, 1);
  return true;
}
