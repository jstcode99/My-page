<template>
  <div class="app">
      <Navbar />
      <router-view/>
      <FlotingVerticalLinks :links="linksSocialIcons" :orientation="orientationSocialIcons"/>
      <FlotingVerticalLinks :links="linksWebPage" v-bind:orientation="orientationWebPage"/>
      <Footer :links="linksSocialIcons" />
  </div>
  <!-- <Animations img="astronaut" ></Animations> -->
</template>
<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import FlotingVerticalLinks from '@/components/FlotingVerticalLinks/FlotingVerticalLinks.vue'
import Footer from '@/components/Footer/Footer.vue'

// import Animations from '../components/animations/animations'

export default {
  name: 'App',
    components: {
    Navbar,
    FlotingVerticalLinks,
    Footer,
    // Animations,
  },
  data() {
    return {
      orientationSocialIcons: 'orientation__left',
      linksSocialIcons: [
        {
          route: 'https://www.facebook.com/sebastianblack1696/',
          text: '',
          icon: 'facebook',
          target: '_blank'
        },
        {
          route: 'https://github.com/jstcode99',
          text: '',
          icon: 'github',
          target: '_blank'
        },
        {
          route: 'https://linkedin.com/in/juan-sebastian-torres',
          text: '',
          icon: 'linkedin',
          target: '_blank'
        }
      ],
      orientationWebPage: 'orientation__right',
      linksWebPage: [
        {
          route: 'https://Sebastian-dev.tech/',
          text: 'Sebastian-dev.tech/',
          icon: '',
          target: '_self'
        }
      ]
    }
  },
}
</script>
