<template>
  <div class="container">
      <div class="row-tech">
        <div
          class="colum-tech"
          data-aos="fade-left"
        >
          <div class="content-tech">
            <h2 class="text-success">Recorrido</h2>
            <p>{{ about }}</p>
          </div>
        </div>
        <div
          class="colum-tech"
          data-aos="fade-right"
        >
          <div class="row-tech">
            <div
              v-for="(tech, index) in infoTech"
              :key="index"
              class="colum-tech"
            >
              <div class="content-tech p-4">
                <div class="info-box">
                  <ul class="skills-list">
                    <li class="mb-2">
                      <b-icon
                        :icon="getIcon(index)"
                        font-scale="2"
                      ></b-icon>
                    </li>
                    <li class="item-head text-uppercase">{{ index }}</li>
                    <br>
                    <li
                      v-for="(techs, index) in tech"
                      :key="index"
                    >
                      <span>{{ techs }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>

export default {
  name: 'About',
  data() {
    return {
      about: `Hola, te cuento un poco de mi, desde el 2016 estoy en el mundo de la programación y el desarrollo de software y desde entonces aprendo cada día de esta linda carrera. Actualmente vivo en Colombia mi país natal, he trabajado desde el 2019 como desarrollador web para diferentes empresas desde empresas de salud hasta empresas del sector educativo como desarrollador web y cargos afines. 
      Tambien me encanta diseñar y soy apasionado por la usabilidad y mejores prácticas en desarrollo de páginas web y aplicaciones, como desarrollador mantengo un enfoque de transparencia con los servicios y productos contratados por mis clientes.`,
      profil: `¿Con qué herramientas y lenguajes trabajo? Actualmente me encuentro desenvolviendome en entornos Web, haciendo uso de todo tipo de herramientas y tecnologías que  ayudan a generar herramientas increíbles, estas son algunas de las tecnologías que he aprendido y me desenvuelvo.`,
      infoTech: {
        lenguajes: [
          'JavaScript (ES6+)',
          'PHP',
          '.Asp',
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
        herramientas: [
          'Adobe XD',
          'Visual Studio Code',
          'Git',
        ],
      }
    }
  },
  methods: {
    getIcon(iconSearch){
      const icons = [
        {tech: 'lenguajes', icon: 'gem'},
        {tech: 'frameworks', icon: 'layers'},
        {tech: 'dataBases', icon: 'server'},
        {tech: 'herramientas', icon: 'tools'},
      ]
      let icon = icons.find(icon => icon.tech === iconSearch)
      return icon.icon
    }
  },
}
</script>