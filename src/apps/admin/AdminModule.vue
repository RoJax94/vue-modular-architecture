<template>
  <div>
    <p>Admin App</p>
    <router-view v-if="isModuleReady"></router-view>
  </div>
</template>

<script>
export default {
  name: 'AdminModule',
  created() {
    this.bootstrap();
  },
  computed: {
    isModuleReady() {
      return this.$store.getters['admin/isLoaded'];
    },
  },
  methods: {
    bootstrap() {
      this.$store.dispatch('admin/init');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
