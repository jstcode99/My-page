<template>
    <b-form
      class="form-contac p-4 form"
      @submit.stop.prevent="onSubmit"
    >
      <label for="name">Nombre</label>
      <div class="full-row-field">
        <span class="arrow-right"></span>
        <b-form-input
          id="name"
          name="name"
          ref="name"
          v-model="form.name"
          @focus="focusNow = 'name'"
          @formchange="focusNow = 'name'"
          :state="validateState('name', 'required')"
          class="text-success"
          aria-describedby="input-name"
        />
      </div>
      <label for="phone">Teléfono</label>
      <div class="full-row-field">
        <span class="arrow-right"></span>
        <b-form-input
          id="phone"
          name="phone"
          ref="phone"
          v-model="form.phone"
          @focus="focusNow = 'phone'"
          @formchange="focusNow = 'phone'"
          :state="validateState('phone', 'required')"
          class="text-success"
          aria-describedby="input-phone"
        />
      </div>
      <label for="email">Correo</label>
      <div class="full-row-field">
        <span class="arrow-right"></span>
        <b-form-input
          id="email"
          name="email"
          ref="email"
          v-model="form.email"
          @focus="focusNow = 'email'"
          @formchange="focusNow = 'email'"
          :state="validateState('email', 'email')"
          class="text-success"
          aria-describedby="input-email"
        />
      </div>
      <label for="message">Mensaje</label>
      <div class="full-row-field">
        <span class="arrow-right"></span>
        <textarea
          id="message"
          name="message"
          ref="message"
          v-model="form.message"
          @focus="focusNow = 'message'"
          @formchange="focusNow = 'message'"
          @keyup="validateState('message', 'required')"
          placeholder="..."
          :class="errorTextArea ? 'form-control' : 'form-control is-invalid'"
          aria-describedby="input-message"
          rows="3"
        />
      </div>
      <hr>
      <div class="full-row-field">
        <span class="arrow-right"></span>
        <b-button variant="outline-success" type="submit" size="sm">
          {{ statusSending ? 'Enviando mensaje...' : 'Enviar mensaje' }}
          <b-spinner 
            v-show="statusSending"
            small
          />
        </b-button>
      </div>
      <div>
        <p class="two-lines mt-2 text-success" v-show="this.statusOk">
          Gracias, por contactarse conmigo, estare respondiendo el mensaje lo antes posible!
        </p>
      </div>
    </b-form>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  components: {
    // Parallax
  },
  data() {
    return {
      btnStaus: false,
      btnStaus2: false,
      serviceID: "service_glo8zsg",
      templateID: "template_bmy2q46",
      userID: "user_nvjwWBR5fBDrHmP1Apxt5",
      errors: 0,
      errorTextArea: true,
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
      focusNow: "",
      statusSending: false,
      statusOk: false,
    };
  },
  mounted() {
    this.$refs.name.focus();
  },
  methods: {
    sendEmail(e) {
      this.statusSending = true
      emailjs
        .sendForm(
          this.serviceID,
          this.templateID,
          e.target,
          this.userID,
          this.form
        )
        .then((success) => {
          if (success) {
            this.statusOk = true;
            this.resetForm();
          }
        })
        .catch((error) => {
          this.statusOk = false;
          this.statusSending = false;
          console.log(error);
        });
    },
    validateState(field, validation) {
      const fieldText = this.form[field];
      if (this.$refs[field]) {
        if (this.focusNow === field || this.focusNow === "form") {
          if (validation === "email") {
            // console.log('campo:', field, 'se valido: ', /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fieldText));
            return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fieldText);
          }
          if (validation === "required") {
            if(field === 'message') this.errorTextArea = this.form.message.length > 4
            return fieldText.length > 4;
          }
        }
      }
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
      this.focusNow = "";
      this.statusSending = false;
      setTimeout(() => {
        this.statusOk = false;
      }, 6000);
    },
    onSubmit(e) {
      this.errors = 0;
      const fields = ["name", "phone", "email", "message"];
      this.focusNow = "form";
      fields.forEach((element) => {
        this.errors += this.validateState(element, element !== "email" ? "required" : "email") ? 0 : 1;
      })
      if (this.errors > 0) {
        this.statusOk = true;
        return false;
      }
      this.sendEmail(e);
    },
  },
};
</script>