import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

export const swiperBaseInit = () => {
  document.querySelectorAll('.swiper-target').forEach((element) => {
    const container = element.querySelector('.swiper-container');
    const buttonNext = element.querySelector('.swiper-button-next');
    const buttonPrev = element.querySelector('.swiper-button-prev');
    const pagination = element.querySelector('.swiper-pagination');
  
    const swiper = new Swiper(container, {
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev
      },
      pagination: {
        el: pagination,
        clickable: true
      },
      modules: [Navigation, Pagination]
    });
  });  
}