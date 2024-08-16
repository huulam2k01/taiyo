import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taiyo",
  description: "Trung tâm ngoại ngữ Taiyo",
  openGraph: {
    title: "Taiyo",
    description: "Trung tâm ngoại ngữ Taiyo",
    images: [
      `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
    ],
  },
};
const info = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Taiyo",
  image: {
    "@type": "ImageObject",
    url: `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
    width: 1080,
    height: 1080,
  },
  telephone: "0984313155",
  url: "https://Taiyo.edu.vn/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 NGÕ 91 LƯƠNG ĐỊNH CỦA - ĐỐNG ĐA - HÀ NỘI",
    addressLocality: "Ha Noi",
    postalCode: "700000",
    addressRegion: "Ha Noi",
    addressCountry: "VN",
  },
  priceRange: "1000 - 1000000000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.79664498748942",
    longitude: "106.65856519879867",
  },
};
export default async function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(info) }}
      />
    </html>
  );
}
