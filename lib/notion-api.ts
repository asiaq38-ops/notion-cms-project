/**
 * Notion API 함수들
 * 블로그 글 조회, 검색, 필터링 등의 핵심 기능
 */

import notion, { NOTION_DATABASE_ID } from './notion';
import { BlogPost, NotionPage } from './types';
import { transformNotionPageToPost, transformBlocksToHtml } from './notion-transform';

/**
 * 모든 발행된 블로그 글 조회
 */
export async function getAllPosts(pageSize = 100): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Status',
        select: { equals: 'published' },
      },
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending',
        },
      ],
      page_size: pageSize,
    });

    return response.results.map((page) => transformNotionPageToPost(page as NotionPage));
  } catch (error) {
    console.error('Failed to fetch all posts:', error);
    return [];
  }
}

/**
 * Slug로 특정 글 조회
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: { contains: slug },
      },
    });

    if (response.results.length === 0) return null;

    return transformNotionPageToPost(response.results[0] as NotionPage);
  } catch (error) {
    console.error(`Failed to fetch post with slug ${slug}:`, error);
    return null;
  }
}

/**
 * 카테고리별 글 조회
 */
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: { equals: 'published' },
          },
          {
            property: 'Category',
            select: { equals: category },
          },
        ],
      },
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page) => transformNotionPageToPost(page as NotionPage));
  } catch (error) {
    console.error(`Failed to fetch posts for category ${category}:`, error);
    return [];
  }
}

/**
 * 글 검색 (제목 기반)
 */
export async function searchPosts(query: string): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: { equals: 'published' },
          },
          {
            property: 'Title',
            rich_text: { contains: query },
          },
        ],
      },
    });

    return response.results.map((page) => transformNotionPageToPost(page as NotionPage));
  } catch (error) {
    console.error(`Failed to search posts with query "${query}":`, error);
    return [];
  }
}

/**
 * 모든 카테고리 조회
 */
export async function getCategories(): Promise<string[]> {
  try {
    const posts = await getAllPosts(1000);
    const categories = new Set(posts.map((post) => post.category));
    return Array.from(categories).sort();
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

/**
 * 페이지 콘텐츠 조회 (HTML로 변환)
 */
export async function getPageContent(pageId: string): Promise<string> {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
    });

    return transformBlocksToHtml(blocks.results);
  } catch (error) {
    console.error(`Failed to fetch page content for ${pageId}:`, error);
    return '<p>콘텐츠를 불러올 수 없습니다.</p>';
  }
}

/**
 * 최근 글 조회 (홈페이지용)
 */
export async function getFeaturedPosts(limit = 6): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: { equals: 'published' },
          },
          {
            property: 'Featured',
            checkbox: { equals: true },
          },
        ],
      },
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending',
        },
      ],
      page_size: limit,
    });

    return response.results.map((page) => transformNotionPageToPost(page as NotionPage));
  } catch (error) {
    console.error('Failed to fetch featured posts:', error);
    return [];
  }
}
