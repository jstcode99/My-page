<template lang="">
  <div
      class="py-3 continer-section-proyect"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="3000"
      data-aos-easing="ease-in-right"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
    <div class="section-info">
      <b class="text-success">Proyecto destacado</b>
      <h3>{{ proyect.title }}</h3>
      <b-card class="">
        <b-card-text>
          <p>
            {{ proyect.description }}
          </p>
        </b-card-text>
      </b-card>
      <ul class="tech-info">
        <li
          v-for="(tecnology, indexs) in proyect.tecnologys"
          :key="indexs"
        >
          {{ tecnology }}
        </li>
      </ul>
    </div>
    <div class="section-img">
      <smal v-show="loading">loading...</smal>
      <div>
        <a :href="proyect.link" tarjet="_blank">
          <b-img
            v-if="!loading"
            :src="proyect.img"
            fluid-grow
            class="img-presentation-proyect"
            :alt="proyect.title"
          />
          <b-skeleton-img
            v-else
            :loading="loading"
            height="337px"
            no-aspect
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardInfo',
  data() {
    return {
      loading: false,
        loadingTime: 0,
        maxLoadingTime: 3,
    }
  },
  props: {
    proyect: Object,
  },
  watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval()

        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++
          }, 1000)
        }
      }
    },
    loadingTime(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false
        }
      }
    }
  },
  created() {
    this.$_loadingTimeInterval = null
  },
  mounted() {
    this.startLoading()
  },
  methods: {
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval)
      this.$_loadingTimeInterval = null
    },
    startLoading() {
      this.loading = true
      this.loadingTime = 0
    }
  }
}
</script>