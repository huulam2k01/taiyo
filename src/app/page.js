import Banner from "@/components/banner/banner";
import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Layout from "@/components/layout";
import { sanityFetch } from "@/sanity/lib/client";
import { COURSES_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import getHotline from "@/utils/getHotline";
import logo from "../../public/img/logo-removebg.png";
import dynamic from "next/dynamic";
const DynamicVerticalCardBox = dynamic(
  () => import("@/components/card-box/vertical-card-box"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicYTB = dynamic(
  () => import("@/components/youtube/youtube-plugin"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicFB = dynamic(
  () => import("@/components/plugin-page/facebook-page-plugin"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const path = [
  {
    title: "Sơ cấp 1",
    route: "so-cap-1",
  },
  {
    title: "Sơ cấp 2",
    route: "so-cap-2",
  },
  {
    title: "Luyện N5 cấp tốc",
    route: "luyen-n5-cap-toc",
  },
  {
    title: "Luyện N4 cấp tốc",
    route: "luyen-n4-cap-toc",
  },
  {
    title: "Luyện thi N3",
    route: "luyen-thi-n3",
  },
  {
    title: "Luyện thi vào lớp 10",
    route: "luyen-thi-vao-10",
  },
  {
    title: "Luyện thi đại học",
    route: "luyen-thi-dai-hoc",
  },
  {
    title: "Lớp tiếng Nhật trẻ em",
    route: "lop-tieng-nhat-tre-em",
  },
];

const urltaiyo = "taiyo.edu.vn";
const taiyo = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${urltaiyo}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

const pageUrlFB =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fyourpage&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";

export default async function Home() {
  const course = await sanityFetch({ query: COURSES_QUERY });

  const dataCard = path.map((p) => {
    const courseItem = course.find((c) => c.name.trim() === p.title.trim());

    return {
      title: p.title,
      image: courseItem?.image
        ? urlFor(courseItem.image.asset._ref).url()
        : logo.src,
      route: p.route,
    };
  });
  const emptyCourse = (
    <Typography>Danh sách khóa học đang được cập nhật</Typography>
  );

  const hotline = await getHotline();
  return (
    <Layout>
      <Banner hotline={hotline} />
      <Container maxWidth={"lg"}>
        <Grid
          item
          sx={{ flexGrow: 1 }}
          paddingTop={2}
          container
          spacing={2}
          justifyContent="center"
        >
          <Grid item xs={12} md={12} display="flex" justifyContent="center">
            <Typography
              maxWidth="600px"
              fontWeight="600"
              lineHeight="30px"
              letterSpacing="0.5px"
              color="#be382d"
              variant="h5"
              sx={{
                fontSize: { xl: "h5.fontSize", xs: "h6.fontSize" },
                padding: "2px 10px",
                marginBottom: "10px",
                borderBottom: "1px solid #be382d",
              }}
            >
              LIÊN TỤC MỞ LỚP HỌC
            </Typography>
          </Grid>

          {!dataCard.length
            ? emptyCourse
            : dataCard.map((item) => {
                return (
                  <Grid
                    component={Link}
                    href={`/lien-tuc-mo-lop-hoc/${item?.route}`}
                    item
                    xs={12}
                    md={4}
                    key={item?.title}
                  >
                    <DynamicVerticalCardBox
                      src={item?.image}
                      title={item?.title}
                      alt={item?.title}
                    />
                  </Grid>
                );
              })}
          <Grid item xs={12} md={12} display="flex" justifyContent="center">
            <Typography
              maxWidth="600px"
              fontWeight="600"
              lineHeight="30px"
              letterSpacing="0.5px"
              color="#be382d"
              variant="h5"
              sx={{
                fontSize: { xl: "h5.fontSize", xs: "h6.fontSize" },
                padding: "2px 10px",
                borderBottom: "1px solid #be382d",
                marginBottom: "10px",
              }}
            >
              Về chúng tôi
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} marginBottom={5}>
            <DynamicYTB
              srcPlugin={
                "https://www.youtube.com/embed/YmscnTAmOXw?si=McOuwXzGFwmenbJQ"
              }
            />
          </Grid>
          <Grid item xs={12} md={6} marginBottom={5}>
            <DynamicFB pageUrl={taiyo} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
