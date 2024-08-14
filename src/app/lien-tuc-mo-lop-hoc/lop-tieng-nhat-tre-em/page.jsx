import Image from "next/image";
import { Container, Grid } from "@mui/material";
import style from "./style.module.css";
import Img from "../../../../public/img/lien_tuc_mo_lop_hoc/tiengnhattreem/tiengNhatTreEmDocs.png";
import SmallCardBox from "@/components/card-box/small-card-box";
export const metadata = {
  title: "Lớp tiếng Nhật trẻ em",
  description: "Lớp tiếng Nhật trẻ em",
  openGraph: {
    title: "Lớp tiếng Nhật trẻ em",
    description: "Trung tâm ngoại ngữ Taiyo",
    images: [
      `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
    ],
  },
};
const dataPage = [
  {
    title: "Đối tượng",
    content: "Trẻ em từ 6-12 tuổi.",
  },
  {
    title: "Nội dung",
    content:
      "Học thông qua trò chơi, bài hát và câu chuyện. Giới thiệu về Hiragana, Katakana, và từ vựng cơ bản.",
  },
  {
    title: "Kỹ năng",
    content:
      "Tăng cường khả năng nghe, nói và phát triển tư duy ngôn ngữ một cách tự nhiên. Hoạt động tương tác giúp trẻ em học mà chơi, chơi mà học.",
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

export default function TiengNhatTreEm() {
  return (
    <Container>
      <Grid container spacing={1} pt={5}>
        <Grid item xs={12} md={12} mb={5} className={style.title}>
          <h1>KHÓA HỌC LỚP TIẾNG NHẬT TRẺ EM</h1>
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
