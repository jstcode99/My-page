<template>
  <div
    id="contact"
    class="card-landing"
  >
      <b-img class="form-img" :src="require('@/assets/img/animations/cohete.png')" />
      <b-card class="">

        <b-card-text>
          <h6 class="typewriter">
            <p class="typing">!Bienvenido, Listo para explorar</p>
            <p class="typing">mi portafolio¡</p>
          </h6>
          <hr>
          <b-form class="form-contac">
            <b-row>
              <b-col cols="12">
                <label>Nombre</label>
                <b-form-input
                  class="border-dark bg-dark text-success"
                  placeholder="Nombre"
                />
              <br>
              </b-col>
              <b-col
                cols="12"
              >
                <label>Teléfono</label>
                <b-form-input
                  class="border-dark bg-dark text-success"
                  placeholder="Teléfono"
                />
                <br>
              </b-col>
              <b-col
                cols="12"
              >
                <label>Mensaje</label>
                <b-form-textarea
                  id="textarea"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-col>
              <b-col
                cols="12"
              >
                <b-button
                  class="btn-contact"
                  size="sm"
                  variant="outline-success"
                >
                  Enviar mensaje!
                </b-button>
              </b-col>
            </b-row>
            </b-form>
        </b-card-text>
      </b-card>
  </div>
</template>
<script>
export default {
  name: 'Brandname',
  data() {
    return {
      btnStaus: false,
      btnStaus2: false,
    }
  },
}
</script>