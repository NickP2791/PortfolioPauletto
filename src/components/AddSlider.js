import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const AddSlider = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, EffectFade, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      a11y={{ enabled: true }}
      pagination={{ clickable: true }}
      effect='fade'
      fadeEffect={{ crossFade: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      {children}
    </Swiper>
  );
};

export default AddSlider;
