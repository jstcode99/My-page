<template>
  <div>
    <ul class="floting__vertial__link fadeUp" :class="orientation">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.route">
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
<style lang="scss">
@import '@/assets/scss/vendors/bootstrap-vue/customs-vars.scss';
@import '@/assets/scss/fade/fadein.scss';

.orientation__left {
  left: auto;
  left: 40px;
}
.orientation__right {
  right: auto;
  right: 40px;
}
.floting__vertial__link {
  width: 40px;
  position: fixed;
  bottom: 0px;
  z-index: 10;
  color: $white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.floting__vertial__link li, *, *::before, *::after{
  box-sizing:content-box !important;
}
.floting__vertial__link li {
  padding: 10px;
}
.floting__vertial__link li a {
  color: $white;
}
.floting__vertial__link li span {
  margin: 20px auto;
  padding: 10px;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.1em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}
.floting__vertial__link li a:hover, :focus {
  svg {
    color: $green !important;
    border-color: $green !important;
    transform: translateY(-3px);
  }
  span {
    color: $green !important;
    border-color: $green !important;
    transform: translateY(-3px);
  }
}
.floting__vertial__link li a:focus{
  outline: 2px dashed $green;
  outline-offset: 3px;
}
.floting__vertial__link::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: $white;
}
</style>