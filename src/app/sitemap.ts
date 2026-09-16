import type { MetadataRoute } from "next";
import { contents } from "@/lib/data/content";
import { products } from "@/lib/data/products";
import { segments } from "@/lib/data/segments";
import { solutions } from "@/lib/data/solutions";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/solucoes",
    "/produtos",
    "/engenharia",
    "/segmentos",
    "/conteudo",
    "/empresa",
    "/contato",
    "/manutencao",
    "/pecas",
    "/busca",
  ].map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: new Date(),
  }));

  const dynamicRoutes = [
    ...solutions.map((item) => `/solucoes/${item.slug}`),
    ...products.map((item) => `/produtos/${item.slug}`),
    ...segments.map((item) => `/segmentos/${item.slug}`),
    ...contents.map((item) => `/conteudo/${item.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
