<template>
  <div
    data-aos="fade-right"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="5000"
    data-aos-easing="ease-in-right"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <b-container>
      <div class="console p-3">
        <b-row>
          <b-col>
            <h3 class="text-heading text-monospace text-success">.Perfil</h3>
            <p class="text-white">
                Hola Soy
                <span class="text-primary">Sebastian Torres</span>
                Mi intereses por el desarrollado web empezó a eso del 
                <span class="text-primary">2016 </span> y desde entonces aprendo cada día de esta linda carrera.
                Actualmente vivo en Colombia mi pais natal, he trabajado desde el <span class="text-success">2019</span> como desarrollador web para diferentes empresas 
                desde empresas de salud hasta empresas del sector educativo como desarrollador web y cargos afines.
            </p>
          </b-col>
          <b-col cols="12">
            <h3 class="text-monospace text-success">.Perfil técnico</h3>
            <p class="text-white">
              Con que herramientas y lenguajes trabajo?, comúnmente hago uso de Frameworks de desarrollo por escalabilidad y por el tiempo, aun que también desarrollo de forma vanila, estas son algunas de las tecnologías en las que trabajo
            </p>
          </b-col>
          <b-col cols="12">
            <b-container class="py-4">
              <b-row>  
                <b-col
                  v-for="(tech, index) in infoTech"
                  :key="index"
                  cols="3"
                  md="2"
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
            </b-container>
          </b-col>
        </b-row>
      </div>
      <Experiences />
    </b-container>
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