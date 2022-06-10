<template>
  <div class="services pt-1 pb-1">
    <section
      v-if="Object.keys(pricings).length"
      class="container"
    >
      <!-- title text and switch button -->
      <div class="text-center">
        <h1 class="mt-5 text-success">
          Principales Servicios
        </h1>
        <p class="mb-2 pb-75">
          Estos y otros servicios pensados para ti
        </p>
        <div class="d-flex align-items-center justify-content-center mb-5 pb-50">
          <h6 class="mr-1 mb-0">
            Incluye contrato de privacidad
          </h6>
          <h6 class="ml-50 mb-0">
            y contrato por prestación de servicios
          </h6>
        </div>
      </div>
      <!--/ title text and switch button -->
      <b-row>
        <b-col
          offset-sm-2
          sm="10"
          md="12"
          offset-lg="2"
          lg="10"
          class="mx-auto"
        >
          <b-row>
            <b-col
              v-for="(pricing, index) in pricings"
              :key="index"
              md="4"
              class="mt-1"
            >
              <b-card
                class="card-services"
                align="center"
              >
                <!-- img -->
                <!-- <b-img
                  v-if="pricing.img"
                  :src="pricing.img"
                  width="180px"
                  class="mb-2 mt-5"
                  alt="basic svg img"
                /> -->
                <!--/ img -->
                <h3 class="text-success">{{ pricing.title }}</h3>
                <b-card-text class="font-italic">
                  {{ pricing.subtitle }}
                </b-card-text>

                <!-- annual plan -->
                <!-- <div class="annual-plan">
                  <div class="plan-price mt-2">
                    <sup class="font-medium-2 font-weight-bold text-primary">$</sup>
                    <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.monthlyPrice:pricing.yearlyPlan.perMonth }}</span>
                    <sub class="pricing-duration text-body font-medium-1 font-weight-bold"> / Primer pago</sub>
                  </div>
                  <small
                    v-show="!monthlyPlanShow"
                    class="annual-pricing text-muted"
                  >USD {{ pricing.yearlyPlan.totalAnual }} / year</small>
                </div> -->
                <!--/ annual plan -->

                <!-- plan benefit -->
                <b-list-group class="list-group-circle text-left">
                  <b-list-group-item
                    v-for="(data,index) in pricing.planBenefits"
                    :key="index"
                  >
                    {{ data }}
                  </b-list-group-item>
                </b-list-group>
                <!--/ plan benefit -->

                <!-- buttons -->
                <b-button
                  block
                  class="mt-2"
                  variant="outline-success"
                  :href="`https://wa.me/${phoneWhatsApp}/?text=${pricing.whatsAppMessage}`"
                >
                  Saber más
                </b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <div>
        <b-row>
          <b-col
            lg="10"
            offset-lg="3"
            class="mx-auto"
          >
            <div class="d-flex justify-content-between">
              <div class="text-center text-md-left mt-4">
                <h3 class="text-primary">
                  ¡Empieza ahora!, contrata cualquiera de estos servicios.
                </h3>
                <h5>Necesitas otro tipo de servicio ?</h5>
                <b-button
                  variant="primary"
                  class="mt-2 mt-lg-3"
                  :href="`https://wa.me/${phoneWhatsApp}/?text=Hola!, Estoy interesado es solicitar otro tipo de servicio.`"

                >
                  ¡Contactar ahora!
                </b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="mt-4">
        <h3 class="text-center">
          Diseño Web a la medida
        </h3>
        <p class="text-center">
          ¡Mi portafolio es solo el peldaño de lo que puedo lograr para tí!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'Services',
  data() {
    return {
      phoneWhatsApp: '573168314191',
      status: 'monthly',
      monthlyPlanShow: true,
      pricings: {
        standardPlan: {
          title: 'Diseño de Apps',
          img: require('@/assets/img/illustration/Pot2.webp'),
          subtitle: 'Para pequeñas y medianas empresas‎',
          monthlyPrice: 500,
          yearlyPlan: {
            perMonth: 40,
            totalAnual: 480,
          },
          planBenefits: [
            'Aumenta la visibilidad y el tráfico online.',
            'Ayuda a la generación de ingresos.',
            'Fideliza a tus posibles clientes.',
            'Ahorro en costes de publicidad.',
          ],
          whatsAppMessage: 'Hola!, Estoy interesado en el servicio de Diseño de Apps',
          popular: true,
        },
        basicPlan: {
          title: 'Diseño Web',
          img: require('@/assets/img/illustration/Pot1.webp'),
          subtitle: 'Diseño de páginas web con las últimas tendencias en diseño',
          monthlyPrice: 200,
          yearlyPlan: {
            perMonth: 0,
            totalAnual: 0,
          },
          planBenefits: [
            'Aumenta el alcance de tu negocio.',
            'Mejora la imagen de tu marca.',
            'Aumenta tus ventas.',
            'Vender en línea desde tu propia marca.',
            'Mejora y escala el servicio al cliente.',
          ],
          whatsAppMessage: 'Hola!, Estoy interesado en el servicio de Diseño Web',
          popular: false,
        },
        enterprisePlan: {
          title: 'Diseño UI/UX',
          img: require('@/assets/img/illustration/Pot3.webp'),
          subtitle: 'Soluciones para pequeñas y medianas empresas‎',
          monthlyPrice: 100,
          yearlyPlan: {
            perMonth: 80,
            totalAnual: 960,
          },
          planBenefits: [
            'Diseño ajustado a la imagen de tu empresa.',
            'Mejor experiencia hacia tus usuarios.',
            'Mejora la fidelización.',
            'Mejora las estrategias publicitarias.',
            'Mejora capacidad de respuesta.',
          ],
          whatsAppMessage: 'Hola!, Estoy interesado en el servicio de Diseño UI/UX',
          popular: false,
        },
      },
    }
  },
  methods: {
    tooglePlan() {
      if (this.status === 'monthly') {
        this.monthlyPlanShow = true
      } else {
        this.monthlyPlanShow = false
      }
    },
  },
}
/* eslint-disable global-require */
</script>
