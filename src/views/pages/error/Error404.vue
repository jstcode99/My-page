<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Pagina no encontrada 🕵🏻‍♀️
        </h2>
        <p class="mb-2">
          Oops! 😖 la solicitud no fue encontrada en este servidor.
          <br>
          <b-button
            variant="outline-success"
            class="mb-2 btn-sm-block block mt-1"
            :to="{ path: '/'}"
          >
            Volver al inicio!
          </b-button>
        </p>


        <!-- image -->
        <b-img
          fluid
          :src="downImg"
          alt="Error page"
        />
      </div>
    </div>
  </div>
<!-- / Error page-->
</template>

<script>

export default {
  data() {
    return {
      downImg: require('@/assets/img/pages/error-dark.svg'),
      appLogoImage: require('@/assets/img/logo/sebastian-dev.webp'),
      nameApp: 'Juan Sebastian Torres',
    }
  },
}
</script>
<style lang="scss">
$misc-inner-max-width: 750px;

.misc-wrapper {
  display: flex;
  flex-basis: 100%;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  .misc-inner {
    position: relative;
    max-width: $misc-inner-max-width;
  }
}
</style>