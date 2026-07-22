export type CategorySlug =
  | "education"
  | "healthcare"
  | "business-leaders"
  | "finance-economy"
  | "beauty-wellness";

export interface CategoryMeta {
  slug: CategorySlug;
  name: string;
}

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  category: CategorySlug;
  date: string;
  coverImage: string;
  featured: boolean;
  imageCredit: string;
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

export type ArticleSummary = ArticleFrontmatter;
