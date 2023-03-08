import 'virtual:svg-icons-register';
import '@/styles/main';
import { swiperBaseInit } from '@/scripts/swiper';
import { scenesInit } from '@/scripts/scenes';
import Toggle from '@/scripts/toggle';
import Offices from '@/components/offices/offices';

new Offices('js-offices');
new Toggle('js-directions');

scenesInit();
swiperBaseInit();