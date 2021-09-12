<template>
  <div>
    <ul class="floting__vertial__link fadeUp" :class="orientation">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.route" :target="link.target">
          <span v-if="link.text">{{ link.text }}</span>
          <b-icon 
            v-if="link.icon"
            :icon="link.icon"
            class="border border-light rounded p-2" variant="light"
          >
          </b-icon>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FlotingVerticalLinks',
  props: {
    links: {
      type: Array,
      required: true,
    },
    orientation: {
      type: String,
      required: true,
    },
  }
}
</script>
