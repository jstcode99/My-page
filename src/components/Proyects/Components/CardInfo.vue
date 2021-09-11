<template>
  <div class="continer-section-proyect">
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
      <small v-show="loading">loading...</small>
      <div>
        <a :href="proyect.link" tarjet="_blank">
          <b-img
            v-if="!loading"
            :src="proyect.img"
            fluid-grow
            width="1920"
            height="1080"
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