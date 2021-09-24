<template>
  <footer class="container footer-distributed">
    <div class="footer-left">
      <h3>Sebastian<span>DevWeb</span></h3>

      <p class="footer-links">
        <a href="#">Inicio</a>
        ·
        <a href="#">Perfil</a>
        ·
        <a href="#">Contacto</a>
        ·
        <a href="#">Experiencia</a>
        ·
        <a href="#">Proyectos</a>
      </p>

      <p class="footer-company-name">Sebastian-dev.tech &copy; 2021</p>
    </div>

    <div class="footer-center">
      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Villavicencio</span> Colombia</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>+57 316 8314191</p>
      </div>

      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:jstorres0211@gmail.com">jstorres0211@gmail.com</a></p>
      </div>
    </div>

    <div class="footer-right">
      <p class="footer-company-about">
        <span>Sobre mí</span>
        Soy un desarrollador web, con mas de 2 años de experiencia en tecnologias web
      </p>

      <div class="footer-icons">
        <a 
        v-for="(link, index) in links"
        :key="index"
        :href="link.route"
        :target="link.target">
          <span v-if="link.text">{{ link.text }}</span>
          <b-icon 
            v-if="link.icon"
            :icon="link.icon"
            variant="dark"
          >
          </b-icon>
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FlotingVerticalLinks',
  props: {
    links: {
      type: Array,
      required: true,
    },
  }
}
</script>