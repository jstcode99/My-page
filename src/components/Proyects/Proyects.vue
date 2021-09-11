<template>
  <div class="proyects">
    <b-row>
      <b-col cols="12">
        <h3 class="text-heading text-monospace text-success" id="proyectos">.Proyectos desarrollados</h3>
        <p class="text-white font-italic">Estos son algunos de los proyectos que he desarrollado para las empresas</p>
        <hr>
      </b-col>
      <b-col
        v-for="(proyect, index) in proyects"
        :key="index"
        cols="12"
      >
        <CardInfo :proyect=proyect />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import CardInfo from './Components/CardInfo.vue'

export default {
  name: 'Proyects',
  components: {
    CardInfo,
  },
  data() {
    return {
      proyects: [
        {
          title: 'Sistema de hoteleria',
          description: `Sistema de hotelería diseñado y desarrollado como sistema de atención, recepción y administración de hoteles, el cual tiene funciones como Check-in, registro de clientes, proveedores, habitaciones y parqueadero, entre otras funciones desarrolladas., el sistema funciona como una  Single-page application con el  uso de Ajax para la carga de información.`,
          link: 'https://www.youtube.com/watch?v=Pj2miRJ6bZs&ab_channel=MotionlessInWhite',
          tecnologys: [
            'HTML5',
            'CSS3',
            'JS',
            'JQuery',
            'PHP',
            'MySql (Maria DB)',
            'Bootstrap v3.'
          ],
          img: require('@/assets/img/proyects/Hottur.webp'),
        },
                {
          title: 'Sistema de control de procesos juridicos',
          description: `Control de casos y procesos jurídicos. administra la información más relevante de los casos, manejo de estados de casos y procesos, información y control de las partes, está desarrollado con laravel en su versión 4.7 y con el uso de bootstrap para las interfaces.`,
          link: 'https://www.youtube.com/watch?v=Pj2miRJ6bZs&ab_channel=MotionlessInWhite',
          tecnologys: [
            'HTML5',
            'CSS3',
            'JS',
            'Larevel',
            'JQuery',
            'PHP',
            'MySql (Maria DB)',
            'Bootstrap v3.'
          ],
          img: require('@/assets/img/proyects/Juris.webp'),
        },
                {
          title: 'Sigma',
          description: `Gestor de cartas descriptivas de cursos de educación superior, versiones de cursos, carga de recursos externos, gestión de usuarios entre otros, está desarrollado con Vue.JS v2 y Lumen (Laravel), su principal obtención de datos es mediante peticiones a la API que gestiona todos los procesos de back-end.`,
          link: 'https://sigma.teidos.com/#/',
          tecnologys: [
            'HTML5',
            'SASS',
            'VUE',
            'LUMEN',
            'PHP',
            'MySql (Maria DB)',
            'Vue-Bootstrap.'
          ],
          img: require('@/assets/img/proyects/sigma.webp'),
        },
      ],
      // gallerys: [
      //   {
      //     title: 'Email Marketing',
      //     img: require('@/assets/img/gallery/email-templates.webp'),
      //   },
      //   {
      //     title: 'Email Web',
      //     img: require('@/assets/img/gallery/gestion-de-base-de-datos.webp'),
      //   },
      //   {
      //     title: 'Diseño de Apps',
      //     img: require('@/assets/img/gallery/apps-dising.webp'),
      //   },
      //   {
      //     title: 'Prototipos de Apps',
      //     img: require('@/assets/img/gallery/prototipos-mobiles.webp'),
      //   },
      //   {
      //     title: 'Diseño Web',
      //     img: require('@/assets/img/gallery/fincarraiz-vaness.webp'),
      //   },
      //   {
      //     title: 'Diseño Web a la medida',
      //     img: require('@/assets/img/gallery/fincarraiz-vaness-2.webp'),
      //   },
      //   {
      //     title: 'Email Web',
      //     img: require('@/assets/img/gallery/email-templates-2.webp'),
      //   },
      // ]
    }
  },
}
</script>