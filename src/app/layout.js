import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ScrollToTop from "@/components/scroll-to-top";
import Hotline from "@/components/hotline";
import Footer from "@/components/layout/footer";
import { Box } from "@mui/material";
import PopupZalo from "@/components/popup-zalo";
import getHotline from "@/utils/getHotline";
import Script from "next/script";
import { cookies } from "next/headers";
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
  const pathname = cookies().get("pathname")?.value;
  const hotline = await getHotline();
  return (
    <html lang="vi">
      {pathname === undefined ? (
        <body>{children}</body>
      ) : (
        <body className={inter.className}>
          <Header />
          <ScrollToTop />
          <Hotline hotline={hotline} />
          <PopupZalo hotline={hotline} />
          <Box sx={{ paddingTop: "100px", minHeight: "calc(100vh - 68px)" }}>
            {children}
          </Box>
          <Footer />
        </body>
      )}

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(info) }}
      />
    </html>
  );
}
