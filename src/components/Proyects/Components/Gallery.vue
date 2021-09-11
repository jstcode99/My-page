<template>
  <div class="container-image">
    <b-img :src="gallery.img" class="gallery__image"></b-img>
    <div class="gallery__caption">{{ gallery.title }}</div>
  </div>
</template>
<script>
export default {
  name: 'Gallery',
  props: {
    gallery: Object,
  },
}
</script>