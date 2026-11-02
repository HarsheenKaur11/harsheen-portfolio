import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://harsheenkaur.dev";

  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/skills",
    "/education",
    "/achievements",
    "/contact",
    "/world",
    "/resume",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const worldProjectRoutes = projects.map((p) => ({
    url: `${baseUrl}/world/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...worldProjectRoutes];
}
