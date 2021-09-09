<template>
  <div
    class="animation"
    :class="getImg.name"
  >
    <b-img :src="getImg.img" >
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
  computed: {
    getImg() {
      return this.imgs.find(img => img.name === this.img)
    }
  }
}
</script>
<style lang="scss">
.animation {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0.9;
  box-sizing: inherit;
  z-index: -10000;
  img {
    width: 800px;
    z-index: -10000;
    // transform: rotate(-90deg);
  }
}
.astronaut{
  margin: 0;
  padding: 0;
}
.earth{
  top: 0;
}

@media only screen and (min-width: 400px) {
  .astronaut{
    left: 0rem;
    bottom: 10rem;
    img {
      width: 150px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .astronaut{
    left: 0rem;
    bottom: 10rem;
    top: 19rem;
    img {
      width: 150px;
    }
  }
  .earth{
    top: 0;
    right: 0;
    img {
      width: 150px;
    }
  }
}
@media only screen and (min-width: 600px) {
  .astronaut{
    left: 3rem;
    bottom: 0rem;
    img {
      width: 250px;
    }
  }
  .earth{
    top: 0;
    right: 0;
    img {
      width: 250px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .astronaut{
    left: 3rem;
    bottom: 0rem;
    img {
      width: 250px;
    }
  }
  .earth{
    top: 0;
    right: 0;
    img {
      width: 250px;
    }
  }
} 

@media only screen and (min-width: 992px) {
  .astronaut{
    bottom: 0rem;
    left: 3rem;
    img {
      width: 250px;
      transform: rotate(-40deg);
    }
  }
  .earth{
    right: 0rem;
  }
} 

@media only screen and (min-width: 1200px) {
  .astronaut{
    left: 0rem;
    top: 21rem;
    img {
      opacity: 0.8;
      width: 350px;
      transform: rotate(-40deg);
    }
  }
  .earth{
    right: 0rem;
  }
}
</style>