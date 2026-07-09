/**
 * TypeScript 타입 정의
 * Notion 데이터베이스와 애플리케이션에서 사용하는 모든 타입
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  publishedDate: Date;
  updatedDate: Date;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  views: number;
}

export interface BlogPostWithContent extends BlogPost {
  content: string; // HTML 렌더링된 콘텐츠
}

export interface NotionPage {
  id: string;
  properties: Record<string, any>;
  created_time: string;
  last_edited_time: string;
}

export interface NotionBlock {
  type: string;
  [key: string]: any;
}

export interface SearchResult {
  posts: BlogPost[];
  totalCount: number;
  query: string;
}

export interface CategoryStats {
  name: string;
  count: number;
  featured: boolean;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: Date;
  approved: boolean;
}
