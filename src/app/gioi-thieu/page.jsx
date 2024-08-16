import { CardMedia, Container, Grid, Typography } from "@mui/material";
import AboutImage from "../../../public/img/aboutImage.jpg";
import WallImage from "../../../public/img/Wall_image.jpg";
import SmallCardBox from "@/components/card-box/small-card-box";
import Layout from "@/components/layout";
export const metadata = {
  title: "Giới thiệu",
  description: "Giới thiệu",
  openGraph: {
    title: "Giới thiệu",
    description: "Trung tâm ngoại ngữ Taiyo",
    images: [
      `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
    ],
  },
};
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const title = "TRUNG TÂM NHẬT NGỮ TAIYO";
const dataPage = [
  {
    title: "Giới thiệu chung",
    content: (
      <>
        <Typography>
          Taiyo là trung tâm chuyên về học và luyện thi Tiếng Nhật, đồng hành
          cùng học viên qua các kỳ thi như: Tuyển sinh vào lớp 10 các trường
          Công lập, Tốt nghiệp Trung học Phổ thông Quốc gia, thi chứng chỉ JLPT
          các cấp…
        </Typography>
        <Typography>
          Với những kết quả đầu ra đáng tự hào, Taiyo tự tin có thể đáp ứng đầy
          đủ nhu cầu của học viên, trở thành nơi đáng tin cậy cho cả học sinh và
          các bậc phụ huynh.
        </Typography>
      </>
    ),
  },
  {
    title: "Vì sao chọn Taiyo?",
    content: (
      <>
        <Typography>
          Là trung tâm chuyên sâu về tiếng Nhật, tập trung vào nhóm Học sinh có
          nhu cầu nâng cao thành tích, luyện thi vào 10, tốt nghiệp THPTQG và
          hướng đến thi Năng lực Tiếng Nhật các cấp (JLPT), chúng tôi tự hào là
          nơi tiếp bước vững vàng, giúp các học viên chắc kiến thức từ căn bản,
          đào tạo nên các học sinh, sinh viên ưu tú, giúp các bạn tự tin tiến
          bước chinh phục mọi kì thi.
        </Typography>
        <Typography>
          Đặc biệt, với đội ngũ giáo viên đang công tác và giảng dạy chính quy ở
          các trường THPT như Kim Liên, Việt Đức, chúng tôi luôn theo sát và cập
          nhật nhanh chóng để giảng dạy sát với yêu cầu đổi mới của Bộ Giáo dục,
          xây dựng lộ trình vững chắc theo nguyện vọng của mỗi học viên. Ngoài
          ra, đội ngũ trợ giảng là sinh viên từ các trường đại học danh giá như
          Đại học Ngoại thương, Đại học Kinh tế Quốc dân,... các “tiền bối” hiểu
          rõ những băn khoăn của học viên sẽ luôn sẵn sàng hỗ trợ và thảo luận
          định hướng cùng các em một cách chân thực, gần gũi.
        </Typography>
        <CardMedia
          component="img"
          image={AboutImage.src}
          alt={title}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </>
    ),
  },
  {
    title: "Hình thành và phát triển",
    content: (
      <>
        <Typography>
          Được hình thành từ 2019, sau gần {`${currentYear - 2019}`} năm hoạt
          động, Trung tâm Tiếng Nhật Taiyo tự hào là trung tâm hàng đầu trong
          việc đào tạo, luyện thi tiếng Nhật trên địa bàn Hà Nội. Taiyo đã và
          đang trên đà phát triển, đồng hành cùng học viên trên con đường chinh
          phục tiếng Nhật.
        </Typography>
        <Typography>
          Tới nay, Trung tâm Tiếng Nhật Taiyo đã đào tạo hơn xxx học viên, trong
          đó hơn xx% học viên đạt điểm 10 kỳ thi tuyển sinh vào 10 công lập, xx%
          học viên đạt trên 9,5 điểm trong kỳ thi tốt nghiệp THPTQG,... cùng rất
          nhiều những học viên thành công lấy bằng N3, N2, tạo lợi thế lớn cho
          các em vào Đại học.
        </Typography>
      </>
    ),
  },
  {
    title: "Sứ mệnh",
    content:
      "Ở Taiyo, chúng tôi luôn hướng tới mục tiêu giúp hàng triệu học sinh, sinh viên theo đuổi nguyện vọng, có thêm con đường thành công nhờ ngoại ngữ, qua đó đào tạo nên nguồn nhân sự chất lượng cao tương lai trên các ngành có liên quan đến ngôn ngữ Nhật. Taiyo đã, đang và sẽ luôn nỗ lực đổi mới và phát triển, gửi đến các học viên môi trường học tập năng động và hiệu quả.",
  },
  {
    title: "Giá trị cốt lõi",
    content: (
      <>
        <Typography sx={{ pl: 2 }}>
          <u>Thấu hiểu</u>
        </Typography>
        <Typography sx={{ pl: 4 }}>
          Luôn quan tâm đến nguyện vọng của học viên, có những phương pháp giảng
          dạy phù hợp cho từng đối tượng, từng mục tiêu.
        </Typography>
        <Typography sx={{ pl: 2 }}>
          <u>Hiệu quả</u>
        </Typography>
        <Typography sx={{ pl: 4 }}>
          Mỗi một phương án dạy - học đều đảm bảo chất lượng, giúp học viên đạt
          mục tiêu đúng hạn
        </Typography>
        <Typography sx={{ pl: 2 }}>
          <u>Thấu hiểu</u>
        </Typography>
        <Typography sx={{ pl: 4 }}>
          Học tập chắc từ căn bản theo giáo trình tổng hợp, học viên sẽ nhớ vững
          kiến thức ngôn ngữ, giúp các em có được hành trang hiệu quả nhất trên
          con đường chinh phục tiếng Nhật.
        </Typography>
      </>
    ),
  },
  {
    title: "Taiyo là sự vững vàng.",
    content: (
      <>
        <Typography sx={{ pl: 2 }}>
          <u>Lộ trình vững chắc từ căn bản</u>
        </Typography>
        <Typography sx={{ pl: 4 }}>
          Theo sát các học viên cả trên chương trình học chính khóa (Giáo trình
          Sở) và cả ôn luyện JLPT, có phương pháp và lộ trình học cho từng nhóm
          học viên, giúp học viên năm chắc kiến thức, tự tin chinh phục mọi kỳ
          thi.
        </Typography>
        <Typography sx={{ pl: 2 }}>
          <u>Cập nhật kịp thời</u>
        </Typography>
        <Typography sx={{ pl: 4 }}>
          Taiyo luôn đổi mới, cập nhật nhanh nhất các đề thi JLPT, đề thi THPTQG
          và áp dụng ngay vào giảng dạy. Trung tâm cũng thường xuyên cập nhật
          tình hình học viên để tối ưu hóa quá trình học của các em.{" "}
        </Typography>
        <Typography sx={{ pl: 2 }}>
          <u>Đội ngũ giáo viên</u>
        </Typography>
        <Typography sx={{ pl: 4 }}>
          Đội ngũ giáo viên chất lượng cao, dày dạn kinh nghiệm và đều có bằng
          Sư phạm, đang trực tiếp giảng dạy tại các trường THPT danh tiếng là
          yếu tố vô cùng quan trọng tạo nên Taiyo của ngày hôm nay.
        </Typography>
        <Typography sx={{ pl: 2 }}>
          <u>Đội ngũ trợ giảng</u>
        </Typography>
        <Typography sx={{ pl: 4 }}>
          Hỗ trợ cho cả giáo viên và học viên, đội ngũ trợ giảng của chúng tôi
          là những sinh viên ưu tú từ các trường Đại học hàng đầu, luôn năng
          động và linh hoạt, sẵn sàng chia sẻ kinh nghiệm và giúp đỡ các học
          viên cả về học ngôn ngữ và định hướng nguyện vọng.
        </Typography>
      </>
    ),
  },
];
export default function about() {
  return (
    <Layout>
      <Container maxWidth={"lg"}>
        <Grid container spacing={1} pt={5}>
          <CardMedia
            component="img"
            image={WallImage.src}
            alt={title}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Typography
            variant="h3"
            sx={{
              fontSize: { xl: "h3.fontSize", xs: "h4.fontSize" },
              color: "#213782",
              marginTop: "5%",
              paddingBottom: "5%",
            }}
          >
            TRUNG TÂM NHẬT NGỮ TAIYO
          </Typography>
          {dataPage.map((item, i) => (
            <Grid item xs={12} md={12} key={i}>
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
