import { Container, Grid } from "@mui/material";
import style from "./style.module.css";
import Img from "../../../../public/img/lien_tuc_mo_lop_hoc/socap1/A1-docs.jpg";
import SmallCardBox from "@/components/card-box/small-card-box";
import Image from "next/image";
import Layout from "@/components/layout";
export const metadata = {
  title: "Sơ cấp 1",
  description: "Sơ cấp 1",
};
const dataSoCap1 = [
  {
    title: "Đối tượng",
    content: "Người mới bắt đầu",
  },
  {
    title: "Nội dung",
    content:
      "Học bảng chữ cái Hiragana và Katakana, ngữ pháp cơ bản (thì hiện tại, câu khẳng định, phủ định), từ vựng hàng ngày (gia đình, thời gian, sở thích)",
  },
  {
    title: "Kỹ năng",
    content:
      "Nghe, nói, đọc và viết câu đơn giản. Thực hành giao tiếp cơ bản trong các tình huống đời thường.",
  },
  {
    title: "Một số tài liệu học tập",
    content: (
      <Image
        src={Img.src}
        alt="Một số tài liệu học tập"
        width={1112}
        height={600}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
];

export default function SoCap1() {
  return (
    <Layout>
      <Container>
        <Grid container spacing={1} pt={5}>
          <Grid item xs={12} md={12} mb={5} className={style.title}>
            <h1>KHÓA HỌC SƠ CẤP 1</h1>
          </Grid>
          {dataSoCap1.map((item) => (
            <Grid item xs={12} md={12} key={item.title}>
              <SmallCardBox
                title={item.title}
                content={item.content}
                key={item.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
