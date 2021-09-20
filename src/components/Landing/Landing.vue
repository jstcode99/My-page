<template>
  <b-row id="contacto">
    <div id="home">
      <div class="background-overlay">
        <div class="title-brand" data-aos="fade-down">
          <h1 class="title__text fadeIn text-uppercase">sebastian<br>Torres</h1>
          <h3 class="fadeIn text-uppercase text-center">desarrollador web</h3>
          <p class="title__subtext text-success fadeIn">Construyendo sitios y herramientas increíbles para personas increíbles!</p>
          <div class="container-buttoms text-center">
            <a
              class="btn btn-dark font-weight-bold text-uppercase text-light"
              @click="showForm = !showForm"
            >
              Contactar
            </a>
            <a
              class="btn btn-success font-weight-bold text-uppercase text-light"
              target="_blank"
              href="https://drive.google.com/drive/folders/1HVi2A3V_UQnYDIzTOL00vQ0jY9rPTW_q?usp=sharing"
            >
              Ver CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </b-row>
</template>
<script lang="ts">
import emailjs from 'emailjs-com';

export default {
  name: 'Landing',
  data() {
    return {
      showForm: false,
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
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      }
      emailjs.sendForm(
        this.serviceID,
        this.templateID,
        e.target,
        this.userID,
        data
      ).then(success => {
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
<style lang="scss">
.animation {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  img {
    top: 0;
  }
}
@media only screen and (max-width: 400px) {
  .animation {
    img {
      margin-top: 2rem;
      margin-right: 6rem;
      width: 280px !important;
    }
  }
}
@media only screen and (max-width: 600px) {
  .animation {
    img {
      margin-top: 2rem;
      margin-left: 1.5rem;
      margin-right: 0;
      width: 250px !important;
    }
  }
}
@media only screen and (min-width: 600px) {
  .animation {
    img {
      margin-top: 0rem;
      margin-left: 6rem;
      width: 500px !important;
    }
  }
}

@media only screen and (min-width: 768px) {
  .animation {
    img {
      margin-top: 0rem;
      margin-left: 6rem;
      width: 500px !important;
    }
  }
} 

@media only screen and (min-width: 992px) {
  .animation {
    img {
      margin-top: 12rem;
      margin-left: 0;
      width: 450px !important;
    }
  }
} 

@media only screen and (min-width: 1200px) {
  .animation {
    img {
      margin-top: 10rem;
      margin-left: 0;
      width: 600px !important;
    }
  }
}
</style>