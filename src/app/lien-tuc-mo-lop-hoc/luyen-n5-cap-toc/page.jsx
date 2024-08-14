import { Container, Grid } from "@mui/material";
import style from "./style.module.css";
import Img from "../../../../public/img/lien_tuc_mo_lop_hoc/n5captoc/n5Docs.png";
import SmallCardBox from "@/components/card-box/small-card-box";
import Image from "next/image";
export const metadata = {
  title: "Luyện N5 cấp tốc",
  description: "Luyện N5 cấp tốc",
};
const dataN5 = [
  {
    title: "Đối tượng",
    content: "Học viên muốn thi N5 trong thời gian ngắn.",
  },
  {
    title: "Nội dung",
    content:
      "Tập trung vào ngữ pháp và từ vựng theo đề thi N5, luyện nghe qua bài thi mẫu.",
  },
  {
    title: "Kỹ năng",
    content:
      "Đặc biệt chú trọng vào kỹ năng nghe và nói, giúp học viên tự tin khi thi.",
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

export default function N5CapToc() {
  return (
    <Container>
      <Grid container spacing={1} pt={5}>
        <Grid item xs={12} md={12} mb={5} className={style.title}>
          <h1>KHÓA HỌC LUYỆN N5 CẤP TỐC</h1>
        </Grid>

        {dataN5.map((item) => (
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
