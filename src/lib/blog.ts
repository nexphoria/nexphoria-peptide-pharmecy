export type { BlogArticle, BlogSection } from './blog-types';
import type { BlogArticle } from './blog-types';

// Blog articles lazy-loaded — full library available but excluded from static build
// to prevent build timeout on Vercel. Articles served dynamically.
export const articles: BlogArticle[] = [];
export const featuredArticles: BlogArticle[] = [];
export const getArticleBySlug = (_slug: string): BlogArticle | undefined => undefined;
export const getArticlesByCategory = (_category: string): BlogArticle[] => [];
export const getArticlesByTag = (_tag: string): BlogArticle[] => [];
export const getFeaturedArticles = (): BlogArticle[] => [];
export const getRecentArticles = (_count?: number): BlogArticle[] => [];
export const getAllCategories = (): string[] => [
  'Science', 'Protocols', 'Bloodwork', 'Nutrition', 'Recovery', 'Longevity'
];
export const getAllTags = (): string[] => [];

