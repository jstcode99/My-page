<template>
  <div
    :id="id"
    class="img-parallax"
  >
    <div class="background-overlay">
      <div class="title-brand" data-aos="fade-down">
        <h1 class="title__text fadeIn text-uppercase">{{ title }}</h1>
        <h3 class="fadeIn subtitle__text text-uppercase text-center">{{ subtitle }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Parallax',
  props: {
    img: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
  mounted() {
    const paralax = document.getElementById(this.id)
    paralax.style.backgroundImage = `url(${this.img})`;
    paralax.style.height = '23rem';

  },
}
</script>