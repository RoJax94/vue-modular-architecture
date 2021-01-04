<template>
  <div>
    <app-header></app-header>
    <router-view v-if="isModuleReady"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';

export default {
  name: 'WebModule',
  components: {
    AppHeader,
    AppFooter,
  },
  created() {
    this.bootstrap();
  },
  computed: {
    isModuleReady() {
      return this.$store.getters['web/isLoaded'];
    },
  },
  methods: {
    bootstrap() {
      this.$store.dispatch('web/init');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
