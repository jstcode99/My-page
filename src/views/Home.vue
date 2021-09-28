<template>
  <div class="home">
    <Landing></Landing>
    <About/>
    <Services data-aos="fade-right"></Services>
    <Gallery></Gallery>
    <Experiences data-aos="fade-dow"/>
    <Proyects data-aos="fade-up"/>
    <!-- 
    -->
  </div>
</template>

<script>
import Landing from '@/components/Landing/Landing'
import About from '@/components/About.vue'
import Services from '@/components/Services/Services.vue'
import Gallery from '@/components/Gallery/Gallery.vue'
import Experiences from '@/components/Experiences.vue'
import Proyects from '@/components/Proyects/Proyects.vue'

export default {
  name: 'Home',
  components: {
    Landing,
    About,
    Services,
    Gallery,
    Experiences,
    Proyects,
  }
}
</script>