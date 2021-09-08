<template>
  <div
    class="experiences"
    data-aos="fade-left"
    data-aos-offset="150"
    data-aos-delay="100"
    data-aos-duration="5000"
    data-aos-easing="ease-in-left"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <b-row>
      <b-col cols="12" xl="12">
        <h3 class="text-heading text-monospace">.Mis Experiencias</h3>
      </b-col>
      <b-col cols="12" xl="12">
        <b-card class="b-card-dark">
          <b-card-text>
            <b-tabs class="tab-experiences" card vertical>
              <b-tab
                v-for="(experience, index) in experiences"
                :key="index"
                :title="experience.company"
                :active="index === 0"
              >
                <b-row>
                  <b-col>
                    <b-card-text>
                      <div
                        class="panel-content-experiences"
                      >
                        <h3>
                          <b>{{ experience.workPosition }}</b>
                          <span class="company">
                            &nbsp;@&nbsp;
                            <a
                              :href="experience.webPage"
                              class="inline-link text-success"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {{ experience.fullname }}
                            </a>
                          </span>
                        </h3>
                            <p class="text-muted">{{ experience.firstDateContrat }} - {{ experience.lastDateContrat }}</p>
                          <div>
                            {{ experience.tasks }}
                          </div>
                      </div>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'Experiences',
  data() {
    return {
      experiences: [
        {
          company: 'Sena',
          fullname: 'Servicio Nacional de Aprendizaje (SENA)',
          firstDateContrat: '27-03-2018',
          lastDateContrat: '25-09-2018',
          tasks: 'Trabajé como analista y desarrollador de sistemas de información, junto con un equipo de trabajo en el cual desarrollamos la plataforma de control y recepción hotelera para estudiantes de hotelería y turismo, realice actividades de levantamiento de requerimientos técnicos a través de las normas IEEE, diseño y estructuración de base de datos relacionadas aplicando normas 1 y 2 en la cual se hizo uso de motor MariaDB, como backend se utilizó las tecnologías web (PHP,HTML,CSS,JS) se implementó los framework de JS como JQuery y estilos e interfaces BOOTSTRAP',
          webPage: 'https://www.sena.edu.co/es-co/Paginas/default.aspx',
          workPosition: 'Desarrollador Web',
        },
        {
          company: 'Dominogroup',
          fullname: 'Dominogroup SAS',
          firstDateContrat: '22-10-2018',
          lastDateContrat: '15-03-2019',
          tasks: 'Creación y estructuración de la plataforma JURIS, encargada de la gestión de procesos y casos jurídicos de la empresa. dicha plataforma fue desarrollada con el framework Laravel en su versión 5.7 y base de datos MariasDB, también realice modificaciones en su página web y la creación de su blog informativo de casos jurídicos',
          webPage: 'www.dominogroupsas.com',
          workPosition: 'Desarrollador Web',
        },
        {
          company: 'Colpegasus',
          fullname: 'Pegasus Software',
          firstDateContrat: '25-05-2019',
          lastDateContrat: '27-09-2019',
          tasks: 'Trabajé en el equipo de desarrollo de la plataforma Académica Web 2.0 en la cual realice el trabajo de actualización de modulo creados en flash y modificados y actualizados haciendo uso de las tecnologías web (PHP, JS, CSS) y gestión de datos en MariaDB, cree informes específicos para la plataforma con el uso de TPCPDF y diseñe módulos de correspondencia a correo y teléfono haciendo uso de API Rest.',
          webPage: 'https://web.colpegasus.com/',
          workPosition: 'Desarrollador Web',
        },
        {
          company: 'ProtegerIPS',
          fullname: 'Proteger IPS',
          firstDateContrat: '22-07-2020',
          lastDateContrat: '29-09-2020',
          tasks: 'Trabajé como desarrollador creando micro servicios para las conferencias que brinda la empresa a sus clientes, también realice cambios de contenido y mantenimiento de sus sitios cómo: Proteger IPS | Profesionales en Salud Ocupacional, también me fue encargado el sistema de notificaciones de eventos, haciendo uso de servicios de mensajería por correo electrónico, como Amazon, MailChimp, Hablame, Etc.',
          webPage: 'https://www.protegerips.com/',
          workPosition: 'Desarrollador Web',
        },
        {
          company: 'Funlam',
          fullname: 'UNIVERSIDAD LUIS AMIFO SEDE MEDELLIN',
          firstDateContrat: '26-09-2020',
          lastDateContrat: 'Actualidad',
          tasks: 'Me encuentro desarrollando un sistema de gestion de versiones de cartas descripticas (información de cursos, materias, ponderaciones y conexion con servicios Google Sheets, el sistema se esta desarrollando con el framework Vue..Js en su ultima versión,, y con lumen (microframework de laravel) y con base de datos relaciones en MariaDB',
          webPage: 'https://www.funlam.edu.co/',
          workPosition: 'Desarrollador Web',
        },
      ]
    }
  },
}
</script>