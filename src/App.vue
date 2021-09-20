<template>
  <div>
      <navbar />
      <router-view/>
      <floting-vertical-links v-bind:links="linksSocialIcons" v-bind:orientation="orientationSocialIcons"/>
      <floting-vertical-links v-bind:links="linksWebPage" v-bind:orientation="orientationWebPage"/>
  </div>
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
