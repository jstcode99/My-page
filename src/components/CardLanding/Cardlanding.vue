<template>
  <div class="card-landing">
    <h1 class="title__cardlanding fadeIn">Quieres <span class="text-warning">contactarme</span> ?</h1>
    <h1 class="title__cardlanding fadeIn">Ver mi  <span class="text-danger">perfil</span> ?</h1>
    <b-button variant="primary fadeIn">Ver perfil</b-button>
    <b-button variant="warning fadeIn">Contactar 👋</b-button>
  </div>
</template>
<script>
export default {
  name: 'Brandname'
}
</script>
<style lang="scss">
@import '@/assets/scss/fade/fadein.scss';
.card-landing {
  color: #fff;
  overflow: hidden;
  margin-top: 40%;
  margin-left: 16%;
}
.title__cardlanding {
  font-size: 2rem;
  line-height: 0.9;
  margin-bottom: 1.6rem;
  font-weight: normal;
  text-align: left;
  text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
}
@media (max-width: 768px) {
  .card-landing {
    margin-top: 10% !important;
    margin-left: 25% !important;
    margin-right: 25% !important;
  }
  .card-landing .btn-primary{
    margin-left: 20%;
  }
  .title__cardlanding {
    font-size: 2rem;
    line-height: 0.9;
    margin-bottom: 1.6rem;
    font-weight: normal;
    text-align: center;
    text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .card-landing {
    margin-top: 10% !important;
    margin-left: 25% !important;
    margin-right: 25% !important;
  }
  .card-landing .btn-primary{
    margin-left: 20%;
  }
  .title__cardlanding {
    font-size: 2rem;
    line-height: 0.9;
    margin-bottom: 1.6rem;
    font-weight: normal;
    text-align: center;
    text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
  }
}
@media (min-width: 992px) {
  .card-landing {
    margin-top: 50%;
    margin-left: 1%;
  }
  .title__cardlanding {
    font-size: 2rem;
    line-height: 0.9;
    margin-bottom: 1.6rem;
    font-weight: normal;
    text-align: left;
    text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
  }
}
@media (min-width: 1280px) {
  .card-landing {
    margin-top: 60%;
    margin-left: 10%;
  }
}
</style>