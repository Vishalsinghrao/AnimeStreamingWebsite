
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSlider.css'; 
import AnimeCard from './Animecard';

const CardSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <AnimeCard image={item.image} title={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
