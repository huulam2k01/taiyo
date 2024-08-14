export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://Taiyo.edu.vn/sitemap.xml",
  };
}
