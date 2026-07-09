/**
 * Notion 데이터를 애플리케이션 타입으로 변환하는 함수들
 */

import { BlogPost, NotionPage } from './types';
import { formatDate } from './utils';

/**
 * Notion 페이지를 BlogPost로 변환
 */
export function transformNotionPageToPost(notionPage: NotionPage): BlogPost {
  const props = notionPage.properties;

  // 제목 추출
  const title = props.Title?.title?.[0]?.plain_text || '제목 없음';

  // Slug 생성 (제목에서 자동으로 생성)
  const slug = props.Slug?.rich_text?.[0]?.plain_text || generateSlug(title);

  // 카테고리 추출
  const category = props.Category?.select?.name || 'General';

  // 태그 추출
  const tags = props.Tags?.multi_select?.map((tag: any) => tag.name) || [];

  // 난이도 추출
  const difficulty = props.Difficulty?.select?.name || 'intermediate';

  // 발행일 추출
  const publishedDate = props['Published Date']?.date?.start
    ? new Date(props['Published Date'].date.start)
    : new Date();

  // 수정일 추출
  const updatedDate = props['Updated Date']?.date?.start
    ? new Date(props['Updated Date'].date.start)
    : new Date(notionPage.last_edited_time);

  // 상태 추출
  const status = props.Status?.select?.name || 'draft';

  // 요약 추출
  const summary = props.Summary?.rich_text?.[0]?.plain_text || '';

  // Featured 추출
  const featured = props.Featured?.checkbox || false;

  // 조회수 추출
  const views = props.Views?.number || 0;

  return {
    id: notionPage.id,
    title,
    slug,
    summary,
    category,
    tags,
    difficulty: difficulty.toLowerCase() as 'beginner' | 'intermediate' | 'advanced',
    publishedDate,
    updatedDate,
    status: status.toLowerCase() as 'draft' | 'published' | 'archived',
    featured,
    views,
  };
}

/**
 * Notion 블록을 HTML로 변환
 */
export function transformBlocksToHtml(blocks: any[]): string {
  let html = '';

  for (const block of blocks) {
    if (block.type === 'paragraph') {
      const text = block.paragraph.rich_text.map((rt: any) => rt.plain_text).join('');
      html += `<p>${text}</p>`;
    } else if (block.type === 'heading_1') {
      const text = block.heading_1.rich_text.map((rt: any) => rt.plain_text).join('');
      html += `<h1>${text}</h1>`;
    } else if (block.type === 'heading_2') {
      const text = block.heading_2.rich_text.map((rt: any) => rt.plain_text).join('');
      html += `<h2>${text}</h2>`;
    } else if (block.type === 'heading_3') {
      const text = block.heading_3.rich_text.map((rt: any) => rt.plain_text).join('');
      html += `<h3>${text}</h3>`;
    } else if (block.type === 'bulleted_list_item') {
      const text = block.bulleted_list_item.rich_text.map((rt: any) => rt.plain_text).join('');
      html += `<li>${text}</li>`;
    } else if (block.type === 'numbered_list_item') {
      const text = block.numbered_list_item.rich_text.map((rt: any) => rt.plain_text).join('');
      html += `<li>${text}</li>`;
    } else if (block.type === 'code') {
      const text = block.code.rich_text.map((rt: any) => rt.plain_text).join('');
      const language = block.code.language || 'plaintext';
      html += `<pre><code class="language-${language}">${escapeHtml(text)}</code></pre>`;
    } else if (block.type === 'image') {
      const url = block.image.external?.url || block.image.file?.url || '';
      html += `<img src="${url}" alt="Image" class="max-w-full h-auto rounded-lg">`;
    } else if (block.type === 'quote') {
      const text = block.quote.rich_text.map((rt: any) => rt.plain_text).join('');
      html += `<blockquote class="border-l-4 border-gray-300 pl-4">${text}</blockquote>`;
    } else if (block.type === 'divider') {
      html += '<hr class="my-4">';
    }
  }

  return html;
}

/**
 * 제목에서 Slug 생성
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * HTML 특수문자 이스케이프
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
