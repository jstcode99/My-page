<template>
  <div id="perfil">
    <div class="console p-4 m-5">
      <b-row>
        <b-col cols="12">
          <h3 class="text-heading text-monospace text-success">.Desarrollador Web</h3>
          <p class="text-white">
            Hola, te cuento un poco de mi, desde el 2016 estoy en el mundo de la programación y el desarrollo de software y desde entonces aprendo cada día de esta linda carrera. Actualmente vivo en Colombia mi país natal, he trabajado desde el 2019 como desarrollador web para diferentes empresas desde empresas de salud hasta empresas del sector educativo como desarrollador web y cargos afines.
            Tambien me encanta diseñar y soy apasionado por la usabilidad y mejores prácticas en desarrollo de páginas web y aplicaciones, como desarrollador mantengo un enfoque de transparencia con los servicios y productos contratados por mis clientes.
          </p>
        </b-col>
        <b-col cols="12">
          <h3 class="text-monospace text-success">.Perfil técnico</h3>
          <p class="text-white">
            ¿Con qué herramientas y lenguajes trabajo? Actualmente me encuentro desenvolviendome en entornos Web, haciendo uso de todo tipo de herramientas y tecnologías que  ayudan a generar herramientas increíbles, estas son algunas de las tecnologías que he aprendido y me desenvuelvo.
          </p>
        </b-col>
        <b-col cols="12">
          <b-row>  
            <b-col
              v-for="(tech, index) in infoTech"
              :key="index"
              md="6"
              sm="12"
            >
              <ul class="skills-list">
                <li class="item-head text-success text-uppercase">{{ index }}</li>
                <li
                  v-for="(techs, index) in tech"
                  :key="index"
                >
                  <span>{{ techs }}</span>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>

export default {
  name: 'About',
  data() {
    return {
      infoTech: {
        lenguajes: [
          'JavaScript (ES6+) (TypeScript)',
          'PHP',
          '.Net (Asp)',
          'Java',
        ],
        frameworks: [
          'Laravel',
          'Vue',
          'React',
          'Bootstrap',
          'Vuetify',
        ],
        dataBases: [
          'SQL Server',
          'MariaDB',
          'Mongo - Aprendiendo',
        ],
        tools: [
          'Adobe XD',
          'Visual Studio Code',
          'Git',
        ],
      }
    }
  },
}
</script>