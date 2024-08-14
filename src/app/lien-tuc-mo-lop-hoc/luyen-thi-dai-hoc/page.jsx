import { Container, Grid } from "@mui/material";
import style from "./style.module.css";
import Img from "../../../../public/img/lien_tuc_mo_lop_hoc/thidaihoc/thiDaiHocDocs.png";
import SmallCardBox from "@/components/card-box/small-card-box";
import Image from "next/image";
export const metadata = {
  title: "Luyện thi đại học",
  description: "Luyện thi đại học",
};
const dataPage = [
  {
    title: "Đối tượng",
    content: "Học sinh lớp 12, chuẩn bị cho kỳ thi đại học.",
  },
  {
    title: "Nội dung",
    content:
      "Tổng hợp ngữ pháp, từ vựng chuyên sâu, luyện tập đề thi đại học trước đây.",
  },
  {
    title: "Kỹ năng",
    content:
      "Kỹ năng làm bài nhanh, đọc hiểu tài liệu phức tạp, và viết luận. Tập trung vào chiến lược làm bài thi hiệu quả.",
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
export default function ThiDaiHoc() {
  return (
    <Container>
      <Grid container spacing={1} pt={5}>
        <Grid item xs={12} md={12} mb={5} className={style.title}>
          <h1>KHÓA HỌC LUYỆN THI ĐẠI HỌC</h1>
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
