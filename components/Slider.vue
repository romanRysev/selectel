<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in bannersData" :key="item.id">
      <div class="slide">
        <img class="slide-background" src="Rectangle.jpg" alt="">
        <h2 class="slide-title" v-html="item.title" />
        <p class="slide-description" v-html="item.description" />
        <div class="slide__button-container">
          <vButton :link="item.button.link" :text="item.button.text" />
        </div>
      </div>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination p1-desktop" />
    <div slot="button-prev" class="swiper-button-prev" />
    <div slot="button-next" class="swiper-button-next" />
  </swiper>
</template>

<script>
import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay
} from 'swiper/swiper.esm' //
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter' // без этих двух строчек свайпер не работает. Проблема известная, возможно потом починят)
import 'swiper/swiper-bundle.min.css'
import '../swiper.css'
import vButton from '@/components/UI/vButton'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
export default {
  name: 'SwiperExamplePaginationFraction',
  title: 'Fraction pagination',
  components: {
    Swiper,
    SwiperSlide,
    vButton
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    bannersData () {
      return this.$store.getters['data/getBannersData']
    }
  }
}
</script>

<style>
.slide {
  max-width: 1440px;
  height: 620px;
  color: white;
  padding: 0 0 34px 64px;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin: auto;
}

.slide-background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit: cover;
    bottom: 0;
}

.slide__button-container {
  max-width: 175px;
}

.slide-title {
  font-weight: 500;
  font-size: 64px;
  line-height: 87px;
  margin-bottom: 14px;
  position: relative;
}

.slide-description {
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  margin-left: 111px;
  margin-bottom: 40px;
  max-width: 867px;
  position: relative;
}

@media screen and (max-width: 970px) {
  .slide-title {
    font-size: 44px;
  }

  .slide-description {
    font-size: 20px;
    line-height: 25px;
    margin-left: 100px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 770px) {
  .slide {
    padding: 0 17px 90px;
    height: 400px;
  }

  .slide-title {
    font-size: 36px;
    line-height: 49px;
  }
  .slide-description {
    font-size: 18px;
    line-height: 25px;
    margin-left: 0;
  }
  .slide__button-container {
  max-width: 100%;
}
}
</style>
