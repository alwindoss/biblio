<template>
  <div>
    <Nav isLoggedIn="true"></Nav>
    <nuxt />
  </div>
</template>
<script>
import Nav from "~/components/Nav/Nav.vue";

export default {
  components: {
    Nav
  }
};
</script>

<style>
</style>
