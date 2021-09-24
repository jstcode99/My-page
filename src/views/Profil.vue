<template>
  <div>
    <Parallax :img="img" title="Perfil" id="profil"></Parallax>
    <About></About>
    <SwiperBrands></SwiperBrands>
  </div>
</template>
<script>
import SwiperBrands from '../components/SwiperBrands/SwiperBrands'
import About from '../components/About'
import Parallax from '../components/Subpage/Parallax/Parallax'
export default {
  name: 'Profil',
  components: {
    SwiperBrands,
    About, Parallax },
  data() {
    return {
      img: require('@/assets/img/animations/parallax-profil.jpg'),
    }
  },  
}
</script>