<template>
  <UserAuthForm v-bind:loginForm="true"></UserAuthForm>
</template>
<script>
import UserAuthForm from "~/components/UserAuthForm";

export default {
  components: {
    UserAuthForm
  }
};
</script>