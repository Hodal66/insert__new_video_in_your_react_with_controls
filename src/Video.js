import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import myVideo from "./sources/yt5s.com-Muremyi w'Isi By Fabrice .mp4";
function VideoComponent() {
  let posterLink =
    "http://e.huawei.com/-/mediae/EBG/Images/case-study/airport/airport-banner-wap2.jpg";
  return (
    <div>
      <Video autoPlay loop poster={posterLink}>
        <source src={myVideo} type="video/mp4" />
      </Video>
    </div>
  );
}

export default VideoComponent;
