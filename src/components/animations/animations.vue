<template>
  <div
    class="animation"
  >
    <b-img :src="imgs[1].img" >
    </b-img>
  </div>
</template>
<script lang="ts">
export default {
  name: 'animations',
  props: {
    img: String,
  },
  data() {
    return {
      imgs: [
        {
          name: 'asteriod',
          img: require('@/assets/img/animations/asteriod.png'),
        },
        {
          name: 'astronaut',
          img: require('@/assets/img/animations/astronaut.png'),
        },
        {
          name: 'earth',
          img: require('@/assets/img/animations/earth.png'),
        },
        {
          name: 'marth',
          img: require('@/assets/img/animations/marth.png'),
        },
        {
          name: 'saturn',
          img: require('@/assets/img/animations/saturn.png'),
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.animation {
  position: absolute;
  left: -11rem;
  margin: 0;
  padding: 0;
  bottom: -20rem;
  z-index: 0;
  img {
    z-index: 0;
  }
}
</style>