<template>
  <div class="container" data-aos="fade-down">  
    <b-row>
      <b-col
        cols="12"
        lg="12"
        offset-lg="3"
        class="mx-auto"
      >
        <div class="">
          <h3 class="text-success text-center p-2">
            Muestra de proyectos realizados
          </h3>
        </div>
      </b-col>
      <b-col
        lg="12"
        offset-lg="3"
        class="mx-auto"
      >
        <b-carousel
          id="carousel-gallery"
          class="carousel-radius"
          style="box-shadow: 1px 1px 2px #333; border-radius: 15px !important;"
          fade
          controls
          indicators
          :interval="4000"
          background="#ababab"
          img-width="1024"
          img-height="480"
        >
          <div
            v-for="(gallery, index) in gallerys"
            :key="index"
          >
            <b-carousel-slide
              :caption="gallery.caption"
              :img-src="gallery.img"
            />
          </div>
        </b-carousel>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'Gallery',
  data() {
    return {
      gallerys: [
        {
          Caption: 'Diseño Paginas Web',
          img: require('@/assets/img/gallery/Diseño Web.webp'),
        },
        {
          Caption: 'Diseño de Sistema',
          img: require('@/assets/img/gallery/Diseño Sistema.webp'),
        },
        {
          Caption: 'Diseño de UI & UX',
          img: require('@/assets/img/gallery/Diseño UIUX.webp'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
