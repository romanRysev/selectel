<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in bannersData" :key="item.id">
      <div class="slide">
        <h2 class="slide-title" v-html="item.title" />
        <p class="slide-description" v-html="item.description" />
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
} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.min.css'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
export default {
  name: 'SwiperExamplePaginationFraction',
  title: 'Fraction pagination',
  components: {
    Swiper,
    SwiperSlide
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
  width: 100vw;
  height: 620px;
  background: url("Rectangle.jpg");
  color: white;
  padding: 0 0 34px 64px;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
}

.swiper-pagination {
  color: white;
  margin-bottom: 50px;
  bottom: 0;
}
.swiper-button-next {
  right: 45.5%;
  bottom: 42px;
  top: auto;
  color: white;
}

.swiper-button-prev {
  left: 45.5%;
  bottom: 42px;
  top: auto;
  color: white;
}

.slide-title {
  font-weight: 500;
  font-size: 64px;
  line-height: 87px;
  margin-bottom: 14px;
}

.slide-description {
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  margin-left: 111px;
  max-width: 867px;
}

@media screen and (max-width: 970px) {
  .slide-title {
    font-size: 44px;
  }

  .slide-description {
    font-size: 20px;
    line-height: 25px;
    margin-left: 100px;
  }
  .swiper-button-prev {
    left: 40%;
  }
  .swiper-button-next {
    right: 40%;
  }
}

@media screen and (max-width: 770px) {
  .slide {
    padding: 0 17px 20px;
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
  .swiper-button-prev {
    left: 17px;
  }
  .swiper-button-next {
    right: 17px;
  }
}
</style>
