<template>
  <div class="home">
      <Landing></Landing>
      <About data-aos="fade-up"/>
      <Services data-aos="fade-right"></Services>
      <Gallery></Gallery>
      <Experiences data-aos="fade-dow"/>
      <Proyects data-aos="fade-up"/>
  </div>
</template>

<script>
import Landing from '../components/Landing/Landing'
import Gallery from '../components/Gallery/Gallery.vue'
import Services from '../components/services/Services.vue'
// @ is an alias to /src
// import Brandname from '@/components/BrandName/BrandName.vue'
// import Cardlanding from '@/components/CardLanding/Cardlanding.vue'
// import Animations from '../components/animations/animations.vue'
import About from '@/components/About.vue'
import Experiences from '@/components/Experiences.vue'
import Proyects from '@/components/Proyects/Proyects.vue'

export default {
  name: 'Home',
  components: {
    Landing,
    Gallery,
    Services,
    // Brandname,
    // Cardlanding,
    // Animations,
    About,
    Experiences,
    Proyects,
  }
}
</script>