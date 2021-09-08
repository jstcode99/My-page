<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="fixed-top" v-show="showNavbar" >
    <b-navbar-brand class="typewriter" to="/">
      <div class="text-monospace text-truncate">
        <b-img
          rounded
          :src="appLogoImage"
          :alt="nameApp"
          class="logo-img"
        >
        </b-img>
        <span>{{ nameApp }}</span>
      </div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="About">Perfil</b-nav-item>
          <b-nav-item to="About">Contacto</b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item to="#">EN</b-dropdown-item>
          <b-dropdown-item to="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      nameApp: 'Juan Sebastian',
      appLogoImage: require('@/assets/img/logo/Logo-blanco.png'),
      imgProps: {
        blank: true,
        blankColor: '#bbb',
        width: 42,
        height: 42,
      }
    }
  },

  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}
</script>