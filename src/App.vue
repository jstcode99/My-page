<template>
  <div id="app">
    <b-container>
      <navbar />
      <router-view/>
      <floting-vertical-links v-bind:links="linksSocialIcons" v-bind:orientation="orientationSocialIcons"/>
      <floting-vertical-links v-bind:links="linksWebPage" v-bind:orientation="orientationWebPage"/>
    </b-container>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import FlotingVerticalLinks from '@/components/FlotingVerticalLinks/FlotingVerticalLinks.vue'

export default {
  name: 'App',
  data() {
    return {
      orientationSocialIcons: 'orientation__left',
      linksSocialIcons: [
        {
          route: '/',
          text: '',
          icon: 'facebook',
        },
        {
          route: '/',
          text: '',
          icon: 'github',
        },
        {
          route: '/',
          text: '',
          icon: 'linkedin',
        }
      ],
      orientationWebPage: 'orientation__right',
      linksWebPage: [
        {
          route: '/',
          text: 'http://localhost:8080/#/',
          icon: '',
        }
      ]
    }
  },
  components: {
    Navbar,
    FlotingVerticalLinks,
  },
}
</script>
