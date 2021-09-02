<template>
  <div class="home">
      <b-row
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="5000"
        data-aos-easing="ease-in-down"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <b-col sm="12" md="12" lg="6" xl="6">
          <brandname />
        </b-col>
        <b-col sm="12" md="12" lg="5" xl="5">
          <cardlanding />
        </b-col>
      </b-row>
      <About />
      <Experiences />
  </div>
</template>

<script>
// @ is an alias to /src
import Brandname from '@/components/BrandName/BrandName.vue'
import Cardlanding from '@/components/CardLanding/Cardlanding.vue'
import About from '@/components/About.vue'
import Experiences from '@/components/Experiences.vue'


export default {
  name: 'Home',
  components: {
    Cardlanding,
    Brandname,
    About,
    Experiences,
  }
}
</script>