<template>
  <div>
  </div>
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