<template>
  <b-row class="mb-5">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="(brand, index) in brands"
        :key="index"
        md="4"
      >
        <b-img
          v-if="brand.img"
          :src="brand.img"
          width="159.25px"
          class="mb-2 mt-5"
        />
      </swiper-slide>
    </swiper>
  </b-row>
</template>
 
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        brands: [
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/fincaraizvaness.png'),
          },
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/funlam.png'),
          },
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/pegasus.png'),
          },
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/protegerips.png'),
          },
          {
            title: 'Diseño Web',
            img: require('@/assets/img/brands/sena.png'),
          },
        ],
        swiperOptions: {
          loop: true,
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 20,
          slideClass: 'custom-slide-class',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
          // Some Swiper option/callback...
        }
      }
    },
  }
</script> 