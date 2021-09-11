<template>
  <div>
  <b-navbar toggleable="lg" variant="dark" type="dark" class="fixed-top" v-show="showNavbar" >
    <b-navbar-brand href="#home">
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
          <b-nav-item
            :class="isActive('home') ? 'active' : ''"
            @click="active = 'home'"
            href="#home"
          >
            Inicio
          </b-nav-item>
          <b-nav-item
            :class="isActive('about') ? 'active' : ''"
            @click="active = 'about'"
            href="#perfil"
          >
            Perfil
          </b-nav-item>
          <b-nav-item
            :class="isActive('contact') ? 'active' : ''"
            @click="active = 'contact'"
            href="#contacto"
          >
            Contacto
          </b-nav-item>
          <b-nav-item
            :class="isActive('experiences') ? 'active' : ''"
            @click="active = 'experiences'"
            href="#experiencia"
          >
            Experiencia
          </b-nav-item>
          <b-nav-item
            :class="isActive('proyects') ? 'active' : ''"
            @click="active = 'proyects'"
            href="#proyectos"
          >
            Proyectos
          </b-nav-item>
        </b-navbar-nav>
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
      active: 'home',
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      nameApp: 'Juan Sebastian',
      appLogoImage: require('@/assets/img/logo/sebastian-dev.webp'),
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
    isActive(tag){
      return tag === this.active
    },
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