"use client";
import { useEffect } from "react";
const Messenger = ({}) => {
  useEffect(() => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="2193116414104254" // Thay thế bằng ID trang của bạn
        theme_color="#0084ff"
        logged_in_greeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
        logged_out_greeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
      ></div>
    </div>
  );
};

export default Messenger;
