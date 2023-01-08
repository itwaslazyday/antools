import { Swiper, SwiperSlide } from 'swiper/react';
import { feedbackList } from '../../const';
import {Navigation, Pagination} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './feedbacks.css';

function Feedbacks (): JSX.Element {

  return (
    <section className='feedbacks'>
      <div className='container'>
        <div className='feedbacks__inner'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={
              {
                'el': '.feedbacks__pagination-wrapper',
                'clickable': true,
                'bulletClass': 'custom-bullet dot swiper-pagination-bullet',
                'bulletActiveClass': 'custom-bullet-active swiper-pagination-bullet-active'
              }
            }
            slidesPerView={1}
            speed={500}
            grabCursor
            mousewheel
          >
            {feedbackList.map((item) => (
              <SwiperSlide
                className='feedbacks__slide feedback'
                key={item.quote}
              >
                <figure className='feedback__quote'>
                  <figcaption className='feedback__person'>
                    <picture>
                      <source srcSet={`img/${item.image}.webp`} type="image/webp"/>
                      <img src={`img/${item.image}.png`} alt={item.person + item.job} width='399' height='492'/>
                    </picture>
                    <div>
                      <span>{item.person}</span>
                      <span>{item.job}</span>
                    </div>
                  </figcaption>
                  <blockquote className='feedback__text'>
                    {item.quote}
                  </blockquote>
                </figure>
              </SwiperSlide>
            ))}
            <div className='feedbacks__pagination-wrapper'></div>
          </Swiper>
        </div>
      </div>
    </section>

  );
}

export default Feedbacks;
