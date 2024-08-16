import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import style from "./style.module.css";
import { sanityFetch } from "@/sanity/lib/client";
import { TEACHERS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";

export const metadata = {
  title: "Giảng Viên",
  description: "Giảng viên",
  openGraph: {
    title: "Danh sách giảng viên",
    description: "Trung tâm ngoại ngữ Taiyo",
    images: [
      `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
    ],
  },
};
const DynamicHorizontalCardBox = dynamic(
  () => import("@/components/card-box/horizontal-card-box"),
  {
    loading: () => <p>Loading...</p>,
    // ssr: false,
  }
);
export default async function GiangVien() {
  const listTeacher = await sanityFetch({ query: TEACHERS_QUERY });

  const emptyTeacher = (
    <Typography>Danh sách giảng viên đang được cập nhật.</Typography>
  );

  return (
    <Layout>
      <Container>
        <Typography
          variant="h3"
          sx={{ fontSize: { xl: "h3.fontSize", xs: "h4.fontSize" } }}
          className={style.title}
        >
          GIẢNG VIÊN CỦA CHÚNG TÔI
        </Typography>
        {!listTeacher.length
          ? emptyTeacher
          : listTeacher.map((item, i) => {
              const url = urlFor(item.image.asset._ref).url();
              return (
                <DynamicHorizontalCardBox
                  key={item.name}
                  src={url}
                  name={item.name}
                  content={item.bio}
                  option={i % 2 == 0 ? true : false}
                />
              );
            })}
      </Container>
    </Layout>
  );
}
