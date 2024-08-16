import { Container, Grid, Link } from "@mui/material";
import style from "./style.module.css";
import VerticalCardBox from "@/components/card-box/vertical-card-box";
import Layout from "@/components/layout";

export const metadata = {
  title: "Đăng ký",
  description: "Đăng ký",
  openGraph: {
    title: "Đăng ký",
    description: "Trung tâm ngoại ngữ Taiyo",
    images: [
      `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
    ],
  },
};

export default function DangKy() {
  const tel = "098 431 31 55";
  const link = "https://www.facebook.com/taiyo.edu.vn";
  const address = "24 NGÕ 91 LƯƠNG ĐỊNH CỦA - ĐỐNG ĐA - HÀ NỘI";

  const contentOpt1 = () => (
    <>
      Click vào link và nhắn tin thông qua fanpage:{" "}
      <Link href={link}>{link}</Link>
    </>
  );

  const textHref = "tel:" + tel;
  const contentOpt2 = () => {
    return (
      <>
        Đăng ký thông qua số điện thoại Hotline:{" "}
        <Link href={textHref}>{tel}</Link>
      </>
    );
  };

  const contentOpt3 = () => {
    return <>Trực tiếp đến với trung tâm chúng tôi. Địa chỉ: {address}</>;
  };
  return (
    <Layout>
      <Container maxWidth={"lg"}>
        <Grid sx={{ flexGrow: 1 }} container spacing={1} pt={5}>
          <Grid item xs={12} md={12} sx={{ pb: 3 }}>
            <div className={style.titleBrand}>
              <h1>
                <span className={style.title}>TRUNG TÂM NGOẠI NGỮ </span>
                <span className={style.taiyoTitle}>TAIYO </span>
              </h1>
              <h3>
                <span>Bạn có thể đăng ký khóa học bằng những cách sau</span>
              </h3>
            </div>
          </Grid>
          <Grid item xs={12} md={12} sx={{ pb: 3 }}>
            <VerticalCardBox
              title="Hotline (ưu tiên)"
              alt="Trung tâm ngoại ngữ Taiyo"
              content={contentOpt2()}
              src="data:image/png;base64,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"
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ pb: 3 }}>
            <VerticalCardBox
              title="Trực tiếp (ưu tiên)"
              alt="Trung tâm ngoại ngữ Taiyo "
              content={contentOpt3()}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA3lBMVEX///+9w8fnTDyVpabmfiLAOSs0mNvCx8vTVAApgLmmsrS8xMrGs6XnexLJcGjqRzW9LBrgpqHmPSmRp6nOcEHaZBLmfB3oiT/xxA/FT0W+Lx+erK3Xi4TbRjbLbWTmQC3Cq57UTgDwlY3uh37vkIjwmJDui4KYscNjl74ticaovMruhHr3y8hwnb9Mjr06hrqJqsF+o8AwkdF5q9FMn9iUtc5do9ZBnNmCr9DlLA73xsHlNh/52NXbXwDLuavalY/cWErZOyn75OLoix/usRXwvhDqmhvvtxPsphjfcBiSGNvuAAAGdUlEQVR4nO3ce1saRxQGcFZtFlgTUlqtLWkIKhpIQhIMarykF6LR7/+Fugu7sJe5nTkzyzg97z/Jk0cJP99zdrg80mhQKBQKhUKhGM/Vpu+A7Qyvh5u+C3Yz7G51vSbGwC2viQugz8QU6C9xBfSVmAP6SSwAfSQeFoEx8XDTd8lsKkDfiMMq0K9BZQJ9IjJG1K9B5QJ9IXJG1J9BFTToR4sS4NMnSoFPnSjcQaVd/Ot3fn6uzcGNQoOyFl+9/ImXl5sXKgKFxFd/OCxUBoqILgsBQAHRYSEIyCe6KzyGAWPiMfN2nBVyG+z83QG16KqQD3zxywsQ0VGhCLgNI7opFAK3YUQnhXzg6wQYE1+rE10Ucq+iywa3xS2Wr6gOChWAEKJ7QskOKhCLg+qc8LivBBQR+4UWXRMqjShoUB0TAoCqRLeE0mOiRFQ5NJwSghpUbdElIRioRHRIqAFUIboj5B8TzB2U72J6aDgjVG+wB2vRFaE6sB22QURHhABgEAQgohtCGBBGdEIIGdGFEDCoQxeE0AZBLXb+5AJrE/KB5WNiDawSuYfGFp9Yk/BEo0FQi3xiPUJdoAliLUKdHTRGrEOo/lCtCsTvYg1CwIiGDKH6ocEm2hfq76CZQbUuxOygEaJt4Ynqq2oCII5oWYjcQRO7aFeI30F8i1aFuGNCTFQ+NGwKDY0oclAtCs2NKGpQ7QlNA3WJ1oT8YwK+gzyi0i7aEhrdwSxau2hJiBrRMAyiKEr+MDGodoR8oHREw+D0w+Rjq9X6OPlwGlSQ8EG1ItR/qBaO37byeTsuG8Et2hBqj2jZxzRCiRaE+sBPFV+STziieaH2MRFWC0xrlBDFu2hcqH9M8IAxsfSjALVoWnikPaJ8oLxFEdGw0PQOGthFs0L9Y2IsBLZa40BM5O/iPyaFgBEtH3OTPGc0mk6no1H+nyalr1ffxc67jQDL9/d0rZs+W2e6Vp5qH/39I1NAxLOJMKtw9KyczDjRfwDXPzEDPEK8qpZtYcWXhLOJtbeIAYafOQXma/xcfapRKxH3dGkiAqbE6phC3ghHDyruGX0oBqZE1jPl2nYRcUxkaygCLonVRQS9148aVMwOZkIhcHG5YQkhu4g4F9HvTcSn4VQinMYnIvubaxhUbIOLDiXApER2hxCi5qACgLxX1cbSCpMSeUL1XdQj4huMI68wLpH/7VaJfCDghd9QfCFdZiR4XdXioL7Dj2giPFMQnoluwNoVFQDk3704YwUhbw3ZLRoiGtnBRb5IgV8kt2BlF43s4DIzqXAmuwkLu2hmBxVLlFVoYxdN7eAysk0UbyG7RSTR4IguGhBfTkUXUj4RNahmG0yI5wLgueJ7jAZbNA4MRKsoX0LjRBvAIOK1eB6p34ghouEdXIW9i2eg2zCyi0aPiXzC2UXFdzED3oaBFq2MaJrosmi8uARMaBo00SYwriCardfxfBbBCjRC5ANxO5jPeHZ5eTlTOeTViPxdZBCt7aDJYHbR7oiaizbx5qv9EbVD5A7q15si8Yr90q9jDbKInBa7lY+3v2KNqYNARWKf8fn9jBadBCoRqw0meX9d/jm4toNZKrtYnr/r9yxgTCx+YX9Y+q3kDR4TxZQPjd6wdM85wBKxO2wUha40mKRI7BU/gpIPjIm5D4Y/bBSFLgFLxF7hMzm6AmB8LnZzwILQLWCRGAvXxO6NCBi32El3sFEUOrODWfK7mAgb6S52hA2uiOmHpvacbTBJuyhc7qJoB1eDer362I2ey8AccSlMfpvuWjKiKXH1sbeZ0LkRXWY1qKkw3kUlYKPxb/aXnssNJmkXhet7rpqe48CM2JNTREIMMFILlogTYnYw2v1VJbsI4mIXUULUiEZvBk15Bm8wJSYtYoS4HaxFGBMRQuRFph5h0NYXYq+iNQmDtrYQe9DXJQxJSEISCoS3e/LcPmXh7vMdeZ5jHtOQkIQkJCEJSUhCEpKQhCQkIQlJSEISkpCEJPRdOP9+9+PBZ+H9QZK7ubfC+cEyd94KH1Lhwb2vwh+Z8IGET1V4nwnnvgofv6dr+OircK+5uNbcDzwWDh7n89tBc89fYbM5SN4B97bDx+w9/B1fhYsS0wo9FS5b3N/xWLizs5/9xVvhKiQkIQlJSEISkpCEJCQhCUlIwv+BcF+ejQqx+fabSr6h/x9tIYVCoVAoFAqFQqFQKBQKhUKhUCgUSo35D+lGju+79oiQAAAAAElFTkSuQmCC"
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ pb: 3 }}>
            <VerticalCardBox
              title="Fanpage"
              alt="ảnh mũi tên xuống"
              content={contentOpt1()}
              src="data:image/png;base64,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"
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
