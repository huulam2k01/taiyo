import { Container, Grid, CardMedia } from "@mui/material";
import MainImage from "../../../public/img/lo-trinh-hoc-tap.jpg";
import A1Doc from "../../../public/img/lien_tuc_mo_lop_hoc/socap1/A1-docs.jpg";
import A2Doc from "../../../public/img/lien_tuc_mo_lop_hoc/socap2/a2Docs.jpg";
import N5Doc from "../../../public/img/lien_tuc_mo_lop_hoc/n5captoc/n5Docs.png";
import N4Doc1 from "../../../public/img/lien_tuc_mo_lop_hoc/n4captoc/n4Docs1.png";
import N4Doc2 from "../../../public/img/lien_tuc_mo_lop_hoc/n4captoc/n4Docs2.png";
import N3Doc1 from "../../../public/img/lien_tuc_mo_lop_hoc/n3/n3Docs1.png";
import N3Doc2 from "../../../public/img/lien_tuc_mo_lop_hoc/n3/n3Docs2.png";
import LuyenThi10Doc from "../../../public/img/lien_tuc_mo_lop_hoc/thivao10/thivao10Docs.png";
import LuyenThiDaiHocDoc from "../../../public/img/lien_tuc_mo_lop_hoc/thidaihoc/thiDaiHocDocs.png";
import TiengNhatTreEmDoc from "../../../public/img/lien_tuc_mo_lop_hoc/tiengnhattreem/tiengNhatTreEmDocs.png";

import style from "./style.module.css";
import SmallCardBox from "@/components/card-box/small-card-box";
export const metadata = {
  title: "Thư viện",
  description: "Thư viện",
};
const dataPage = [
  {
    title: "LỘ TRÌNH HỌC TẬP",
    content: (
      <CardMedia
        component="img"
        image={MainImage.src}
        alt="Lộ trình học tập"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
  {
    title: "TÀI LIỆU KHÓA SƠ CẤP 1",
    content: (
      <CardMedia
        component="img"
        image={A1Doc.src}
        alt="TÀI LIỆU KHÓA SƠ CẤP 1"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
  {
    title: "TÀI LIỆU KHÓA SƠ CẤP 2",
    content: (
      <CardMedia
        component="img"
        image={A2Doc.src}
        alt="TÀI LIỆU KHÓA SƠ CẤP 2"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
  {
    title: "TÀI LIỆU KHÓA LUYỆN N5 CẤP TỐC",
    content: (
      <CardMedia
        component="img"
        image={N5Doc.src}
        alt="TÀI LIỆU KHÓA LUYỆN N5 CẤP TỐC"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
  {
    title: "TÀI LIỆU KHÓA LUYỆN N4 CẤP TỐC",
    content: (
      <>
        <Grid item xs={12} md={12} className={style.title}>
          <CardMedia
            component="img"
            image={N4Doc1.src}
            alt="TÀI LIỆU KHÓA LUYỆN N4 CẤP TỐC"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} md={12} className={style.title}>
          <CardMedia
            component="img"
            image={N4Doc2.src}
            alt="TÀI LIỆU KHÓA LUYỆN N4 CẤP TỐC"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </>
    ),
  },
  {
    title: "TÀI LIỆU KHÓA LUYỆN THI N3",
    content: (
      <>
        <Grid item xs={12} md={12} className={style.title}>
          <CardMedia
            component="img"
            image={N3Doc1.src}
            alt="TÀI LIỆU KHÓA LUYỆN THI N3"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} md={12} className={style.title}>
          <CardMedia
            component="img"
            image={N3Doc2.src}
            alt="TÀI LIỆU KHÓA LUYỆN THI N3"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </>
    ),
  },

  {
    title: "TÀI LIỆU KHÓA LUYỆN THI VÀO 10",
    content: (
      <CardMedia
        component="img"
        image={LuyenThi10Doc.src}
        alt="TÀI LIỆU KHÓA LUYỆN THI VÀO 10"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
  {
    title: "TÀI LIỆU KHÓA LUYỆN THI ĐẠI HỌC",
    content: (
      <CardMedia
        component="img"
        image={LuyenThiDaiHocDoc.src}
        alt="TÀI LIỆU KHÓA LUYỆN THI ĐẠI HỌC"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
  {
    title: "TÀI LIỆU KHÓA TIẾNG NHẬT TRẺ EM",
    content: (
      <CardMedia
        component="img"
        image={TiengNhatTreEmDoc.src}
        alt="TÀI LIỆU KHÓA TIẾNG NHẬT TRẺ EM"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
];
export default function ThuVien() {
  return (
    <Container sx={{ paddingTop: "120px" }}>
      {dataPage.map((item) => (
        <Grid item xs={12} md={12}>
          <SmallCardBox
            title={item.title}
            content={item.content}
            key={item.title}
          />
        </Grid>
      ))}
    </Container>
  );
}
