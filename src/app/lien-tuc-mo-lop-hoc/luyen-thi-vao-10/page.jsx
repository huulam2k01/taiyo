import { Container, Grid } from "@mui/material";
import style from "./style.module.css";
import Img from "../../../../public/img/lien_tuc_mo_lop_hoc/thivao10/thivao10Docs.png";
import SmallCardBox from "@/components/card-box/small-card-box";
import Image from "next/image";
import Layout from "@/components/layout";
export const metadata = {
  title: "Luyện thi vào 10",
  description: "Luyện thi vào 10",
};
const dataPage = [
  {
    title: "Đối tượng",
    content: "Học sinh lớp 9 chuẩn bị thi vào lớp 10.",
  },
  {
    title: "Nội dung",
    content:
      "Ôn tập ngữ pháp, từ vựng, và các dạng bài thi trong đề thi vào 10.",
  },
  {
    title: "Kỹ năng",
    content:
      "Phát triển kỹ năng làm bài thi, đặc biệt là kỹ năng nghe và viết.",
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
export default function ThiVao10() {
  return (
    <Layout>
      <Container>
        <Grid container spacing={1} pt={5}>
          <Grid item xs={12} md={12} mb={5} className={style.title}>
            <h1>KHÓA HỌC LUYỆN THI VÀO 10</h1>
          </Grid>

          {dataPage.map((item) => (
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
