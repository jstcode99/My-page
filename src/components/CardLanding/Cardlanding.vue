<template>
  <div class="card-landing">
    <h1 class="title__cardlanding fadeIn">Quieres <span class="text-warning">contactarme</span> ?</h1>
    <h1 class="title__cardlanding fadeIn">Ver mi  <span class="text-danger">perfil</span> ?</h1>
    <b-button variant="primary fadeIn">Ver perfil</b-button>
    <b-button variant="warning fadeIn">Contactar 👋</b-button>
    <Animations img="earth"></Animations>
  </div>
</template>
<script>
import Animations from '../animations/animations'
export default {
  components: { Animations },
  name: 'Brandname'
}
</script>