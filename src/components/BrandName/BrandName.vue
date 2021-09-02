<template>
  <div class="title-brand">
    <h1 class="title__text fadeIn">Juan<br>Sebas<span style="text-decoration:underline">tian</span></h1>
    <p class="title__subtext text-white fadeIn">Desarollador Web / Estudiante Ing Sistemas.</p>
  </div>
</template>
<script>
export default {
  name: 'Brandname'
}
</script>
<style lang="scss">
@import '@/assets/scss/fade/fadein.scss';
.title-brand {
  color: #fff;
  right: 10%;
  margin-top: 20%;
}

.title__text {
  font-size: 8rem;
  line-height: 0.9;
  margin-bottom: 1.6rem;
  font-weight: normal;
  text-align: left;
  text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
}
.title__subtext {
  color: #fff;
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: 0.1em;
}

@media (max-width: 768px) {
  .title-brand {
    margin-left: 11% !important;
    margin-right: 11% !important;
    margin-top: 10% !important;
  }
  .title__text {
    font-size: 6rem;
    line-height: 0.9;
    margin-bottom: 1.6rem;
    text-align: left !important;
    font-weight: normal;
  }
  .title__subtext {
    font-size: 1.4rem;
    line-height: 1;
    text-align: left;
    letter-spacing: 0.1em;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .title-brand {
    margin-left: 11% !important;
    margin-right: 11% !important;
    margin-top: 10% !important;
  }
  .title__text {
    font-size: 6rem;
    line-height: 0.9;
    margin-bottom: 1.6rem;
    text-align: left !important;
    font-weight: normal;
  }
  .title__subtext {
    font-size: 1.4rem;
    line-height: 1;
    text-align: left;
    letter-spacing: 0.1em;
  }
}
@media (min-width: 992px) {
  .title-brand {
    margin-top: 30%;
  }
  .title__text {
    font-size: 6rem;
    line-height: 0.9;
    margin-bottom: 1.6rem;
    text-align: right;
    font-weight: normal;
  }
  .title__subtext {
    font-size: 1.4rem;
    line-height: 1;
    text-align: right;
    letter-spacing: 0.1em;
  }
}
@media (min-width: 1280px) {
  .title-brand {
    right: 8%;
  }
  .title__text {
    font-size: 9rem;
  }
  .title__subtext {
    text-align: left;
  }
}
</style>