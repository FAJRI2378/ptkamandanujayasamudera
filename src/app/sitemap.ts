// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://kamandanujayasamudera.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://kamandanujayasamudera.com/services/ship-management',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... add all pages
  ]
}

// app/robots.ts
