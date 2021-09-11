<template>
  <b-container>
      <navbar />
      <router-view/>
      <floting-vertical-links v-bind:links="linksSocialIcons" v-bind:orientation="orientationSocialIcons"/>
      <floting-vertical-links v-bind:links="linksWebPage" v-bind:orientation="orientationWebPage"/>
  </b-container>
  <!-- <Animations img="astronaut" ></Animations> -->
</template>
<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import FlotingVerticalLinks from '@/components/FlotingVerticalLinks/FlotingVerticalLinks.vue'
// import Animations from '../components/animations/animations'

export default {
  name: 'App',
    components: {
    Navbar,
    FlotingVerticalLinks,
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
        },
        {
          route: 'https://github.com/jstcode99',
          text: '',
          icon: 'github',
        },
        {
          route: 'https://linkedin.com/in/juan-sebastian-torres',
          text: '',
          icon: 'linkedin',
        }
      ],
      orientationWebPage: 'orientation__right',
      linksWebPage: [
        {
          route: 'http://sebastian-dev.tech/',
          text: 'http://sebastian-dev.tech/',
          icon: '',
        }
      ]
    }
  },
}
</script>
