<template>
  <div class="container-contact p-4" ref="containerContact">
    <b-container cla>
      <div class="stars-bg-stars"></div>
      <div class="stars-bg-stars-2"></div>
      <div class="stars-bg-stars-3"></div>
      <div class="container-card">
        <b-row class="signup-content-container">
          <b-col cols="12">
            <div class="mb-6 typewriter">
              <p class="text-small m-4 typing font-italic">
                !Bienvenido, dejame un mensaje..!
              </p>
            </div>
            <Contact></Contact>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import Contact from '../components/Forms/Contact/Contact'
export default {
  components: { Contact },
}
</script>
