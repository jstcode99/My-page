<template>
  <section
    v-if="Object.keys(pricing).length"
    id="pricing-plan"
  >
    <!-- title text and switch button -->
    <div class="text-center">
      <h1 class="mt-5">
        Principales Servicios
      </h1>
      <p class="mb-2 pb-75">
        Estos y otros servicios tengo para ti o tu empresa
      </p>
      <div class="d-flex align-items-center justify-content-center mb-5 pb-50">
        <h6 class="mr-1 mb-0">
          Incluye contrato de privacidad
        </h6>
        <h6 class="ml-50 mb-0">
          Y controto por prestación de servicios
        </h6>
      </div>
    </div>
    <!--/ title text and switch button -->

    <!-- pricing plan cards -->
    <b-row class="pricing-card">
      <b-col
        offset-sm-2
        sm="10"
        md="12"
        offset-lg="2"
        lg="10"
        class="mx-auto"
      >
        <b-row>
          <b-col md="4">
            <b-card
              class="bg-dark border-success"
              align="center"
            >
              <!-- img -->
              <b-img
                v-if="pricing.basicPlan.img"
                :src="pricing.basicPlan.img"
                width="180px"
                class="mb-2 mt-5"
                alt="basic svg img"
              />
              <!--/ img -->
              <h3>{{ pricing.basicPlan.title }}</h3>
              <b-card-text>
                {{ pricing.basicPlan.subtitle }}
              </b-card-text>

              <!-- annual plan -->
              <div class="annual-plan">
                <div class="plan-price mt-2">
                  <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                  <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.basicPlan.monthlyPrice:pricing.basicPlan.yearlyPlan.perMonth }}</span>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/Primer pago</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >USD {{ pricing.basicPlan.yearlyPlan.totalAnual }} / year</small>
              </div>
              <!--/ annual plan -->

              <!-- plan benefit -->
              <b-list-group class="list-group-circle text-left">
                <b-list-group-item
                  v-for="(data,index) in pricing.basicPlan.planBenefits"
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
              >
                Saber más
              </b-button>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              class="bg-dark border-success"
              align="center"
            >
              <div
                v-show="pricing.standardPlan.popular"
                class="pricing-badge text-right"
              >
                <b-badge
                  variant="light-primary"
                  pill
                >
                  Popular
                </b-badge>
              </div>
              <!-- img -->
              <b-img
                v-if="pricing.standardPlan.img"
                :src="pricing.standardPlan.img"
                width="180px"
                class="mb-1"
                alt="svg img"
              />
              <!--/ img -->
              <h3>{{ pricing.standardPlan.title }}</h3>
              <b-card-text>{{ pricing.standardPlan.subtitle }}</b-card-text>

              <!-- annual plan -->
              <div class="annual-plan">
                <div class="plan-price mt-2">
                  <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                  <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.standardPlan.monthlyPrice:pricing.standardPlan.yearlyPlan.perMonth }}</span>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/Primer pago</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >USD {{ pricing.standardPlan.yearlyPlan.totalAnual }} / year</small>
              </div>
              <!--/ annual plan -->

              <!-- plan benefit -->
              <b-list-group class="list-group-circle text-left">
                <b-list-group-item
                  v-for="(data,index) in pricing.standardPlan.planBenefits"
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
              >
                Saber más
              </b-button>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              class="bg-dark border-success"
              align="center"
            >
              <!-- img -->
              <b-img
                v-if="pricing.enterprisePlan.img"
                :src="pricing.enterprisePlan.img"
                width="180px"
                class="mb-2"
                alt="enterprise svg img"
              />
              <!--/ img -->
              <h3>{{ pricing.enterprisePlan.title }}</h3>
              <b-card-text>{{ pricing.enterprisePlan.subtitle }}</b-card-text>

              <!-- annual plan -->
              <div class="annual-plan">
                <div class="plan-price mt-2">
                  <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                  <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.enterprisePlan.monthlyPrice:pricing.enterprisePlan.yearlyPlan.perMonth }}</span>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/Primer pago</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >USD {{ pricing.enterprisePlan.yearlyPlan.totalAnual }} / year</small>
              </div>
              <!--/ annual plan -->

              <!-- plan benefit -->
              <b-list-group
                v-for="(data,index) in pricing.enterprisePlan.planBenefits"
                :key="index"
                class="list-group-circle text-left"
              >
                <b-list-group-item>
                  {{ data }}
                </b-list-group-item>
              </b-list-group>
              <!--/ plan benefit -->

              <!-- buttons -->
              <b-button
                block
                class="mt-2"
                variant="outline-success"
              >
                Saber más
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!--/ pricing plan cards -->

    <!-- pricing free trial -->
    <div class="pricing-free-trial">
      <b-row>
        <b-col
          lg="10"
          offset-lg="3"
          class="mx-auto"
        >
          <div class="pricing-trial-content d-flex justify-content-between">
            <div class="text-center text-md-left mt-3">
              <h3 class="text-primary">
                Empieza ahora!, contrata cualquiera de estos servicios
              </h3>
              <h5>Necesitas otro tipo de servicio ?</h5>
              <b-button
                variant="primary"
                class="mt-2 mt-lg-3"
              >
                Contactame ahora
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <!--/ pricing free trial -->

    <!-- pricing faq -->
    <div class="pricing-faq">
      <h3 class="text-center">
        Diseño web a la medida
      </h3>
      <p class="text-center">
        Mi portafolio es solo el peldaño de lo que puedo lograr para tí !
      </p>
    </div>
    <!--/ pricing faq -->
  </section>
</template>

<script>
/* eslint-disable global-require */
export default {
  data() {
    return {
      status: 'monthly',
      monthlyPlanShow: true,
      pricing: {
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
            'Te permite vender en línea.',
            'Mejora el servicio al cliente.',
          ],
          popular: false,
        },
        standardPlan: {
          title: 'Diseño de Apps',
          img: require('@/assets/img/illustration/Pot2.webp'),
          subtitle: 'For small to medium businesses',
          monthlyPrice: 500,
          yearlyPlan: {
            perMonth: 40,
            totalAnual: 480,
          },
          planBenefits: [
            'Aumenta la visibilidad y el tráfico online',
            'Ayuda a la generación de ingresos',
            'Fideliza a los clientes',
            'Ahorro en costes de publicidad',
            'Vía de comunicación directa.',
          ],
          popular: true,
        },
        enterprisePlan: {
          title: 'Diseño UI/UX',
          img: require('@/assets/img/illustration/Pot3.webp'),
          subtitle: 'Solution for big organizations',
          monthlyPrice: 100,
          yearlyPlan: {
            perMonth: 80,
            totalAnual: 960,
          },
          planBenefits: [
            'Ajusta la imagen de empresa',
            'Mejor Experiencia hacia usuarios',
            'Mejor fidelización',
            'Mejora en estrategias publicitarias',
            'Mejora capacidad de respuesta',
          ],
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

// <style lang="scss">
// @import '@core/scss/vue/pages/page-pricing.scss';
// </style>
