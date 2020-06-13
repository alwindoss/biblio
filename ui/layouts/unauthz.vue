<template>
  <div>
    <UnAuthzNav></UnAuthzNav>
    <nuxt />
  </div>
</template>
<script>
import UnAuthzNav from "~/components/Nav/UnAuthzNav.vue";

export default {
  components: {
    UnAuthzNav
  }
};
</script>

<style>
</style>
