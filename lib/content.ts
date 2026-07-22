import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { Article, ArticleFrontmatter, CategorySlug } from "@/types/article";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function readAllArticleFiles(): string[] {
  return fs.readdirSync(ARTICLES_DIR).filter((file) => file.endsWith(".md"));
}

function parseFrontmatter(fileName: string): Article {
  const fullPath = path.join(ARTICLES_DIR, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    ...(data as ArticleFrontmatter),
    content,
  };
}

let cachedArticles: Article[] | null = null;

export function getAllArticles(): Article[] {
  if (cachedArticles) return cachedArticles;
  const files = readAllArticleFiles();
  const articles = files.map(parseFrontmatter);
  articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  cachedArticles = articles;
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export async function renderMarkdown(markdown: string): Promise<string> {
  const processed = await remark().use(remarkHtml).process(markdown);
  return processed.toString();
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getFeaturedArticle(): Article {
  const articles = getAllArticles();
  const featured = articles.find((article) => article.featured);
  return featured ?? articles[0];
}

export function getLatestByCategory(
  category: CategorySlug,
  limit: number
): Article[] {
  return getArticlesByCategory(category).slice(0, limit);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
