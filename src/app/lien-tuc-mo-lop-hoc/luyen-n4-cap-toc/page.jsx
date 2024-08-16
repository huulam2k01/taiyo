import { Container, Grid } from "@mui/material";
import style from "./style.module.css";
import Img1 from "../../../../public/img/lien_tuc_mo_lop_hoc/n4captoc/n4Docs1.png";
import Img2 from "../../../../public/img/lien_tuc_mo_lop_hoc/n4captoc/n4Docs2.png";
import SmallCardBox from "@/components/card-box/small-card-box";
import Image from "next/image";
import Layout from "@/components/layout";
export const metadata = {
  title: "Luyện N4 cấp tốc",
  description: "Luyện N4 cấp tốc",
  openGraph: {
    title: "Luyện N4 cấp tốc",
    description: "Trung tâm ngoại ngữ Taiyo",
    images: [
      `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
    ],
  },
};
const dataPage = [
  {
    title: "Đối tượng",
    content: "Học viên có nền tảng N5, muốn thi N4.",
  },
  {
    title: "Nội dung",
    content: "Ôn tập ngữ pháp N4, từ vựng và các kỹ năng cần thiết cho kỳ thi.",
  },
  {
    title: "Kỹ năng",
    content:
      "Phát triển kỹ năng nghe, đọc hiểu văn bản phức tạp hơn và viết đoạn văn. Luyện thi qua bài mẫu thực tế.",
  },
  {
    title: "Một số tài liệu học tập",
    content: (
      <>
        <Image
          src={Img1.src}
          alt="Một số tài liệu học tập"
          width={1112}
          height={600}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Image
          src={Img2.src}
          alt="Một số tài liệu học tập"
          width={1112}
          height={600}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </>
    ),
  },
];
export default function N4CapToc() {
  return (
    <Layout>
      <Container>
        <Grid container spacing={1} pt={5}>
          <Grid item xs={12} md={12} mb={5} className={style.title}>
            <h1>KHÓA HỌC LUYỆN N4 CẤP TỐC</h1>
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
