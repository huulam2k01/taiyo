import "../../app/globals.css";
import Header from "@/components/layout/header";
import ScrollToTop from "@/components/scroll-to-top";
import Hotline from "@/components/hotline";
import Footer from "@/components/layout/footer";
import { Box } from "@mui/material";
import PopupZalo from "@/components/popup-zalo";
import getHotline from "@/utils/getHotline";

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

export default async function RootLayout({ children }) {
  const hotline = await getHotline();
  return (
      <>
        <Header />
        <ScrollToTop />
        <Hotline hotline={hotline} />
        <PopupZalo hotline={hotline} />
        <Box sx={{ paddingTop: "100px", minHeight: "calc(100vh - 68px)" }}>
          {children}
        </Box>
        <Footer />
      </>
  );
}
