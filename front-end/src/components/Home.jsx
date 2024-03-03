import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ViewAll from "./ViewAll";


export default function Home() {
  return (
    <div>
      <div className="h-[400px] md:h-[700px] transition-transform transform origin-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="images/wallpaper 1.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="images/wallpaper 2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="images/wallpaper 3.jpg" alt="" /></SwiperSlide>
          
        </Swiper>
        
      </div>
      <ViewAll/>
    </div>
    
  );
}
