import WallImage from "../../public/img/Wall_image.jpg";

export default function manifest() {
  return {
    name: "Taiyo app",
    short_name: "Taiyo",
    description: "Trung tâm ngoại ngữ Taiyo",
    icons: [
      {
        src: `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: `https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#1A94FF",
    background_color: "#1A94FF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    related_applications: [
      {
        platform: "webapp",
        url: "https://Taiyo.edu.vn/manifest.json",
      },
    ],
    scope: "/",
  };
}
