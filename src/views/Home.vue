<template>
  <div class="home">
      <b-row>
        <b-col sm="12" md="12" lg="6" xl="6" id="home">
          <brandname />
        </b-col>
        <b-col sm="12" md="12" lg="5" xl="5" id="contact">
          <cardlanding />
        </b-col>
      </b-row>
      <Animations data-aos="fade-right" img="astronaut"></Animations>
      <Animations data-aos="fade-left"  img="earth"></Animations>
      <About data-aos="fade-up"/>
      <Services data-aos="fade-right"></Services>
      <Gallery data-aos="fade-left"></Gallery>
      <Experiences data-aos="fade-dow"/>
      <Proyects data-aos="fade-up"/>
  </div>
</template>

<script>
import Gallery from '../components/Gallery/Gallery.vue'
import Services from '../components/services/Services.vue'
// @ is an alias to /src
import Brandname from '@/components/BrandName/BrandName.vue'
import Cardlanding from '@/components/CardLanding/Cardlanding.vue'
import Animations from '../components/animations/animations.vue'
import About from '@/components/About.vue'
import Experiences from '@/components/Experiences.vue'
import Proyects from '@/components/Proyects/Proyects.vue'

export default {
  name: 'Home',
  components: {
    Gallery,
    Services,
    Brandname,
    Cardlanding,
    Animations,
    About,
    Experiences,
    Proyects,
  }
}
</script>