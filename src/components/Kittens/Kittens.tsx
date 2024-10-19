import { Autoplay, EffectFade } from 'swiper/modules'; // Import modules from swiper/modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper and SwiperSlide from 'swiper/react'

import kitten1 from '../../assets/kittens/kitten-1.jpg';
import kitten2 from '../../assets/kittens/kitten-2.jpg';
import kitten3 from '../../assets/kittens/kitten-3.jpg';
import kitten4 from '../../assets/kittens/kitten-4.jpg';
import kitten5 from '../../assets/kittens/kitten-5.jpeg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const Kittens = () => {
  return (
    <div className="w-full h-full p-4 flex justify-center items-center">
      <div className="w-80 h-80 bg-white rounded-3xl shadow-lg overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]} // Use Autoplay and EffectFade modules correctly
          slidesPerView={1}
          effect="fade"
          autoplay={{ delay: 10000 }}
          className="w-full h-full rounded-3xl overflow-hidden"
        >
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img
                src={kitten1}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img
                src={kitten2}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img
                src={kitten3}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img
                src={kitten4}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img
                src={kitten5}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
