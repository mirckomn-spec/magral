export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  cardTitle: string;
  excerpt: string;
  intro: string;
  problem: string;
  causes: string[];
  help: string;
  relatedProducts: string[];
  applications: { title: string; text: string }[];
  relatedContent: string[];
};

export type Product = {
  slug: string;
  name: string;
  series: string;
  category: string;
  excerpt: string;
  description: string;
  image: string;
  highlights: { title: string; text: string }[];
  specs: { label: string; value: string }[];
  applications: string[];
  models: { code: string; capacity: string; stroke: string; thread: string }[];
  related: string[];
  downloads: { name: string; type: string }[];
  solutionSlugs: string[];
};

export type Segment = {
  slug: string;
  name: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  applications: { title: string; text: string }[];
  solutions: string[];
  products: string[];
  cases: string[];
};

export type ContentItem = {
  slug: string;
  category: "artigos" | "guias" | "cases" | "videos" | "faq";
  title: string;
  excerpt: string;
  image: string;
  date: string;
  body: string[];
  relatedSolutions?: string[];
};

export type EngineeringService = {
  slug: string;
  title: string;
  excerpt: string;
  text: string;
};

export type NavColumn = {
  title: string;
  href: string;
  items: { label: string; href: string }[];
};
