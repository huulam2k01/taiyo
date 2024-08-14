import { Container, Grid } from "@mui/material";
import style from "./style.module.css";
import Img1 from "../../../../public/img/lien_tuc_mo_lop_hoc/n3/n3Docs1.png";
import Img2 from "../../../../public/img/lien_tuc_mo_lop_hoc/n3/n3Docs2.png";
import SmallCardBox from "@/components/card-box/small-card-box";
import Image from "next/image";
export const metadata = {
  title: "Luyện thi N3",
  description: "Luyện thi N3",
};
const dataPage = [
  {
    title: "Đối tượng",
    content: "Học viên có trình độ N4, chuẩn bị cho N3.",
  },
  {
    title: "Nội dung",
    content:
      "Ngữ pháp nâng cao, từ vựng chuyên sâu, và kỹ năng nghe hiểu thông tin cụ thể.",
  },
  {
    title: "Kỹ năng",
    content:
      "Phát triển khả năng đọc hiểu bài viết dài và viết luận ngắn. Thực hành đề thi mẫu và phân tích đáp án.",
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
export default function N3() {
  return (
    <Container>
      <Grid container spacing={1} pt={5}>
        <Grid item xs={12} md={12} mb={5} className={style.title}>
          <h1>KHÓA HỌC LUYỆN THI N3</h1>
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
  );
}
