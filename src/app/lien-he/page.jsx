import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MapIcon from "@mui/icons-material/Map";
import LanguageIcon from "@mui/icons-material/Language";
import { CardMedia, Container, Grid, Typography } from "@mui/material";
import WallImage from "../../../public/img/Wall_image.jpg";
import style from "./style.module.css";
import { sanityFetch } from "@/sanity/lib/client";
import { CENTER_QUERY } from "@/sanity/lib/queries";
export const metadata = {
  title: "Liên hệ",
  description: "Liên hệ",
  openGraph: {
    title: "Liên hệ",
    description: "Trung tâm ngoại ngữ Taiyo",
    images: [
      `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
    ],
  },
};
export default async function LienHe() {
  const title = "Trung tâm Ngoại Ngữ Taiyo";

  const centerInfor = await sanityFetch({ query: CENTER_QUERY });
  const { tel, email, address } = centerInfor;

  const emptyInfor = (
    <Typography>Thông tin liên hệ đang được cập nhật</Typography>
  );

  return (
    <Container maxWidth={"lg"}>
      <Grid sx={{ flexGrow: 1 }} container spacing={1} pt={5}>
        <Grid item xs={12} md={12} sx={{ pb: 3 }}>
          <CardMedia
            component="img"
            image={WallImage.src}
            alt={title}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} md={12} sx={{ pb: 3 }}>
          <h1 className={style.title}>TRUNG TÂM NGOẠI NGỮ TAIYO</h1>
          <div className={style.slogan}>
            "Taiyo - Vững vàng như mặt trời tỏa rạng"
          </div>
          <div className={style.slogan}>"Tiếng Nhật khó? Có Taiyo!"</div>
        </Grid>
        <Grid item xs={12} md={12} sx={{ pb: 3 }}>
          <div>
            <CallIcon />
            <span className={style.content}>
              HOTLINE : {tel ? tel : emptyInfor}
            </span>
          </div>
          <div className={style.contentDiv}>
            <MapIcon />
            <span className={style.content}>
              ĐỊA CHỈ : {address ? address : emptyInfor}
            </span>
          </div>
          <div className={style.contentDiv}>
            <LanguageIcon />
            <span className={style.content}>
              WEBSITE : http://taiyo.edu.vn/
            </span>
          </div>
          <div className={style.contentDiv}>
            <EmailIcon />
            <span className={style.content}>
              EMAIL : {email ? email : emptyInfor}
            </span>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
