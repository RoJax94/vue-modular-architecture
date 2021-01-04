<template>
  <router-view v-if="isModuleReady"></router-view>
</template>

<script>
export default {
  name: 'Bootstrap',
  created() {
    this.bootstrap();
  },
  computed: {
    isModuleReady() {
      return this.$store.getters.isLoaded;
    },
  },
  methods: {
    bootstrap() {
      this.$store.dispatch('init');
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';
</style>
