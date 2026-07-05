import { MetadataRoute } from "next"
import { allSeoRoutes } from "@/lib/seo-pages"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mohsinimran.online"
  const routes = ["", ...allSeoRoutes.map((url) => url.replace(`${baseUrl}/`, ""))]

  return routes.map((route) => ({
    url: route ? `${baseUrl}/${route}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }))
}
