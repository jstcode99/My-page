<template>
  <div
    id="contacto"
    class="card-landing"
    :class="statusSendEmail ? 'vibration' : ''"
  >
      <b-img class="form-img" :src="require('@/assets/img/animations/cohete.webp')" />
      <b-card class="">
        <b-card-text>
          <div class="typewriter">
            <p class="typing">!Bienvenido, Listo para explorar</p>
            <p class="typing">mi portafolio¡</p>
          </div>
          <hr>
          <b-form
            class="form-contac"
            @submit.stop.prevent="onSubmit"
          >
            <b-row>
              <b-col cols="12">
                <label>Nombre</label>
                <b-form-input
                  id="name"
                  name="name"
                  ref="name"
                  v-model="form.name"
                  @focus="focusNow = 'name'"
                  :state="validateState('name', 'required')"
                  class="border-dark bg-dark text-success"
                  placeholder="Nombre"
                  aria-describedby="input-name"
                  data-vv-as="Name"
                />
                <b-form-invalid-feedback id="input-name">El Nombre es obligatorio</b-form-invalid-feedback>
              </b-col>
              <b-col
                cols="12"
              >
                <label>Teléfono</label>
                <b-form-input
                  id="phone"
                  name="phone"
                  ref="phone"
                  v-model="form.phone"
                  @focus="focusNow = 'phone'"
                  :state="validateState('phone', 'required')"
                  class="border-dark bg-dark text-success"
                  placeholder="Teléfono"
                  aria-describedby="input-phone"
                  data-vv-as="Phone"
                />
                <b-form-invalid-feedback id="input-phone">El Teléfono es obligatorio</b-form-invalid-feedback>
              </b-col>
              <b-col
                cols="12"
              >
                <label>Correo</label>
                <b-form-input
                  id="email"
                  name="email"
                  ref="email"
                  v-model="form.email"
                  @focus="focusNow = 'email'"
                  :state="validateState('email', 'required')"
                  class="border-dark bg-dark text-success"
                  placeholder="Correo"
                  aria-describedby="input-email"
                  data-vv-as="Email"
                />
                <b-form-invalid-feedback id="input-email">El Correo es obligatorio</b-form-invalid-feedback>
              </b-col>
              <b-col
                cols="12"
              >
                <label>Mensaje</label>
                <b-form-textarea
                  id="message"
                  name="message"
                  ref="message"
                  v-model="form.message"
                  @focus="focusNow = 'message'"
                  :state="validateState('message', 'required')"
                  placeholder="Mensaje..."
                  rows="3"
                  max-rows="6"
                  aria-describedby="input-message"
                  data-vv-as="Name"
                />
                <b-form-invalid-feedback id="input-message">El Mensaje es obligatorio</b-form-invalid-feedback>
              </b-col>
              <b-col
                cols="12"
              >
                <b-button
                  class="btn-contact"
                  size="sm"
                  variant="outline-success"
                  type="submit"
                  :disabled="statusOk"
                >
                  {{ statusOk ? 'Mensaje enviado!' : 'Enviar mensaje!'}}
                </b-button>
              </b-col>
              <b-col cols="12" v-show="statusOk">
                <hr>
                <p class="text-whute">{{ statusOk ? 'Gracias, por comunicarte conmigo, estare en contacto contigo en el menor tiempo posible!' : 'El Mensaje fue enviado, intentalo mas tarde!'}}</p>
              </b-col>
            </b-row>
            </b-form>
        </b-card-text>
      </b-card>
  </div>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Brandname',
  data() {
    return {
      btnStaus: false,
      btnStaus2: false,
      serviceID: 'service_glo8zsg',
      templateID: 'template_bmy2q46',
      userID: 'user_nvjwWBR5fBDrHmP1Apxt5',
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
      focusNow: '',
      statusSendEmail: false,
      statusOk: false,
    }
  },
  methods: {
    sendEmail(e) {
      emailjs.sendForm(
        this.serviceID,
        this.templateID,
        e.target,
        this.userID, {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        }).then(success => {
          if(success) {
            this.statusOk = true
            this.resetForm()
          }
        }).catch(error => {
          this.statusOk = false
          console.log(error)
        })
        this.statusSendEmail = false
    },
    validateState(field, validation) {
      const fieldText = this.form[field]
      if(this.$refs[field]){
        if(this.focusNow === field || this.focusNow === 'form') {
          if(validation === 'email') {
            // console.log('campo:', field, 'se valido: ', /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fieldText));
            return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fieldText)
          }
          if(validation === 'required') { 
            // console.log('campo:', field, 'se valido: ', fieldText.length > 0, fieldText.length);
            return fieldText.length > 0
          }
        }
      }
    },
    resetForm() {
      this.form = {
        name : '',
        email : '',
        phone : '',
        message : '',
      }
      this.focusNow = ''
      setTimeout(() => {
          this.statusOk = false
      },4000);
    },
    onSubmit(e) {
      let errors = 0
      const fields = ['name', 'phone', 'email', 'message']
      this.focusNow = 'form'
      fields.forEach(element => {
        errors += this.validateState(element, element !== 'email' ? 'required' : 'email') ? 0 : 1
      })
      if(errors > 0){
          this.statusSendEmail = true
          console.log(this.statusSendEmail, 'error');
          return
      }
      this.sendEmail(e)
    }
  }
}
</script>