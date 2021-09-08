<template>
  <div class="title-brand">
    <h1 class="title__text fadeIn">Juan<br>Sebas<span style="text-decoration:underline">tian</span></h1>
    <p class="title__subtext text-white fadeIn">Desarollador Web / Estudiante Ing Sistemas.</p>
    <Animations img="astronaut" ></Animations>
  </div>
</template>
<script>
import Animations from '@/components/animations/animations'

export default {
  name: 'Brandname',
    components: {
    Animations,
  }
}
</script>
