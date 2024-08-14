export default function sitemap() {
  return [
    {
      url: "https://Taiyo.edu.vn",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://Taiyo.edu.vn/dang-ky",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://Taiyo.edu.vn/lien-he",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
