<template>
  <swiper class="swiper swiper-brands" :options="swiperOption">
    <swiper-slide
      v-for="(brand, index) in brands"
      :key="index"
    >
      <b-link :href="brand.link">
        <b-img :src="brand.img"></b-img>
      </b-link>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        brands: [
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/fincaraizvaness.webp'),
            link: 'https://fincaraizvaness.com/'
          },
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/funlam.webp'),
            link: 'https://www.funlam.edu.co/'
          },
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/pegasus.webp'),
            link: 'https://web.colpegasus.com/'
          },
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/protegerips.webp'),
            link: 'https://www.protegerips.com/'
          },
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/sena.webp'),
            link: 'https://www.sena.edu.co/'
          },
        ],
        swiperOption: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 40,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
