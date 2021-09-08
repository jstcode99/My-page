<template>
  <div>
    <b-row>
      <b-col
        v-for="(proyect, index) in proyects"
        :key="index"
        cols="12"
      >
        <CardInfo :proyect=proyect />
      </b-col>
      <b-col cols="12">
        <h3 class="text-heading text-monospace">.Otros proyectos</h3>
        <div class="continer-gallery">
          <div class="row-gallery">
            <div class="column-gallery">
              <Gallery :gallery="gallerys[0]" />
            </div>
            <div class="column-gallery">
              <Gallery :gallery="gallerys[1]" />
              <Gallery :gallery="gallerys[2]" />
            </div>
            <div class="column-gallery">
              <Gallery :gallery="gallerys[3]" />
              <Gallery :gallery="gallerys[4]" />
            </div>
            <div class="column-gallery">
              <Gallery :gallery="gallerys[6]" />
              <Gallery :gallery="gallerys[5]" />
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import CardInfo from './Components/CardInfo.vue'
import Gallery from './Components/Gallery'

export default {
  name: 'Proyects',
  data() {
    return {
      proyects: [
        {
          title: 'Sistema de hoteleria',
          description: `Sistema de hoteleria diseñado y desarrollado como sistema de atencion, recepcion y administracion de hoteles,
          el cual tiene funciones como Check-in, registro de clientes, proveedores, habitaciones y parqueadero, entre otras funciones desarrollado, el sistema es simple usa de Single Page y uso de Ajax.
          `,
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
          img: require('@/assets/img/proyects/Hottur.png'),
        },
                {
          title: 'Sistema de control de procesos juridicos',
          description: `Control de casos y procesos  juridico, administra la informacion mas relevante de los casos, manejo de estados de casos y procesos, informacion y control de las partes, esta desarrollado con laravel en su version 4.7`,
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
          img: require('@/assets/img/proyects/Juris.png'),
        },
                {
          title: 'Sigma',
          description: `Gestor de cartas descriptivas de cursos de educacion superior, versiones de cursos, carga de recursos externos, gestion de usuarios entre otros, esta desarrollado con Vue 2 y Lumen (Laravel), su principal obtencion de datos es mediate peticiones a la API que gestiona todos los procesos de back-end.`,
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
          img: require('@/assets/img/proyects/sigma.png'),
        },
      ],
      gallerys: [
        {
          title: 'Email Marketing',
          img: require('@/assets/img/gallery/email-templates.png'),
        },
        {
          title: 'Email Web',
          img: require('@/assets/img/gallery/gestion-de-base-de-datos.png'),
        },
        {
          title: 'Diseño de Apps',
          img: require('@/assets/img/gallery/apps-dising.png'),
        },
        {
          title: 'Prototipos de Apps',
          img: require('@/assets/img/gallery/prototipos-mobiles.png'),
        },
        {
          title: 'Diseño Web',
          img: require('@/assets/img/gallery/fincarraiz-vaness.png'),
        },
        {
          title: 'Diseño Web a la medida',
          img: require('@/assets/img/gallery/fincarraiz-vaness-2.png'),
        },
        {
          title: 'Email Web',
          img: require('@/assets/img/gallery/email-templates-2.png'),
        },
      ]
    }
  },
  components: {
    Gallery,
    CardInfo,
  }
}
</script>