<template>
  <div class="w-100">
    <Parallax :img="img" title="Perfil" id="profil" />
    <b-container class="mt-4">
      <b-row>
        <b-col cols="12" class="mt-2 mb-5">
          <b-row>
            <b-col
              cols="6"
              md="6"
              sm="12"
            >
              <b-img src="@/assets/img/animations/pasion-code.webp" fluid />
            </b-col>
            <b-col
              cols="6"
              md="6"
              sm="12"
            >
              <h6 class="text-monospace text-success">Mi Pasión</h6>
              <h2 class="subtitle-profile text-rigth mt-2 mb-3">Pasión, compromiso y mucho trabajo duro!</h2>
              <article>
                Ciertamente una pantalla negra con muchos textos y código no suena divertido,
                no lo es, sin embargo me pasión poder crear cosas, ver a la computadora imprimiendo lo que quieres,
                generando sistemas complejos o simplemente visuales que sastisfagan o resuelvan un problema.
              </article>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
          <div class="w-100 d-flex flex-row justify-content-center">
            <hr class="text-center bg-success cut-line">
          </div>
        </b-col>
        <b-col cols="12" class="mt-4 mb-5">
          <h3 class="title-swiper-brand text-center">Empresas con las que he trabajado</h3>
        </b-col>
        <b-col cols="12" class="mt-5 mb-5">
          <SwiperBrands />
        </b-col>
      </b-row>
    </b-container>
    <About />
  </div>
</template>
<script>
import SwiperBrands from "../components/SwiperBrands/SwiperBrands";
import About from "../components/About";
import Parallax from "../components/Subpage/Parallax/Parallax";
export default {
  name: "Profil",
  components: {
    SwiperBrands,
    About,
    Parallax,
  },
  data() {
    return {
      img: require("@/assets/img/animations/parallax-profil.webp"),
    };
  },
};
</script>