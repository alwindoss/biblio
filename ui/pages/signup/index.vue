<template>
  <UserAuthForm v-bind:signUpForm="true"></UserAuthForm>
</template>
<script>
import UserAuthForm from "~/components/UserAuthForm";

export default {
  components: {
    UserAuthForm
  }
};
</script>