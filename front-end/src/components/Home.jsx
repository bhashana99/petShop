import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import wallpaper_1 from '../components/images/wallpaper_1.jpg';
// import wallpaper_2 from '../components/images/wallpaper_2.jpg';
// import wallpaper_3 from '../components/images/wallpaper_3.jpeg';

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
          <SwiperSlide><img src={wallpaper_1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={wallpaper_2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={wallpaper_3} alt="" /></SwiperSlide>
          
        </Swiper>
        
      </div>
      <ViewAll/>
    </div>
    
  );
}
