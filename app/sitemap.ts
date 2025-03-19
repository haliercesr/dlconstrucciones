import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dlconstrucciones.com"

  // Define all services
  const services = [
    "construccion-tradicional",
    "sistema-constructivo",
    "remodelaciones",
    "diseno-arquitectonico",
    "construccion-comercial",
    "obras-civiles",
  ]

  // Create service URLs
  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/servicios/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  return [...mainPages, ...serviceUrls]
}

