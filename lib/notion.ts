/**
 * Notion API 클라이언트 초기화
 */

import { Client } from '@notionhq/client';

if (!process.env.NOTION_API_KEY) {
  throw new Error('Missing NOTION_API_KEY environment variable');
}

if (!process.env.NEXT_PUBLIC_NOTION_DATABASE_ID) {
  throw new Error('Missing NEXT_PUBLIC_NOTION_DATABASE_ID environment variable');
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const NOTION_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export default notion;
