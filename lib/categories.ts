import { CategoryMeta, CategorySlug } from "@/types/article";

// Homepage display order (per project spec — differs from a generic alphabetical order):
// Education first, then Healthcare, Business Leaders, Finance & Economy,
// with Beauty & Wellness last.
export const HOMEPAGE_CATEGORY_ORDER: CategorySlug[] = [
  "education",
  "healthcare",
  "business-leaders",
  "finance-economy",
  "beauty-wellness",
];

export const CATEGORIES: Record<CategorySlug, CategoryMeta> = {
  education: { slug: "education", name: "Education" },
  healthcare: { slug: "healthcare", name: "Healthcare" },
  "business-leaders": { slug: "business-leaders", name: "Business Leaders" },
  "finance-economy": { slug: "finance-economy", name: "Finance & Economy" },
  "beauty-wellness": { slug: "beauty-wellness", name: "Beauty & Wellness" },
};

export const CATEGORY_LIST: CategoryMeta[] = HOMEPAGE_CATEGORY_ORDER.map(
  (slug) => CATEGORIES[slug]
);

export function isCategorySlug(value: string): value is CategorySlug {
  return Object.prototype.hasOwnProperty.call(CATEGORIES, value);
}
