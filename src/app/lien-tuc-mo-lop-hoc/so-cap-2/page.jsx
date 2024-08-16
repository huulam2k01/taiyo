import { Container, Grid } from "@mui/material";
import style from "./style.module.css";
import Img from "../../../../public/img/lien_tuc_mo_lop_hoc/socap2/a2Docs.jpg";
import SmallCardBox from "@/components/card-box/small-card-box";
import Image from "next/image";
import Layout from "@/components/layout";
export const metadata = {
  title: "Sơ cấp 2",
  description: "Sơ cấp 2",
};
const dataSoCap2 = [
  {
    title: "Đối tượng",
    content: "Học viên đã hoàn thành Sơ cấp 1.",
  },
  {
    title: "Nội dung",
    content:
      "Tiếp tục với ngữ pháp nâng cao hơn (câu hỏi, thì quá khứ, động từ thể khả năng), từ vựng phong phú hơn.",
  },
  {
    title: "Kỹ năng",
    content:
      "Tăng cường khả năng giao tiếp, đọc hiểu văn bản đơn giản và viết đoạn văn ngắn. Thực hành tình huống giao tiếp phức tạp hơn.",
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

export default function SoCap2() {
  return (
    <Layout>
      <Container>
        <Grid container spacing={1} pt={5}>
          <Grid item xs={12} md={12} mb={5} className={style.title}>
            <h1>KHÓA HỌC SƠ CẤP 2</h1>
          </Grid>
          {dataSoCap2.map((item) => (
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
