<template>
  <v-container grid-list-xs>
    <v-row align="center">
      <!-- <v-row justify="space-around">
      <v-switch v-model="valid" class="ma-4" label="Valid" readonly></v-switch>
      <v-switch v-model="lazy" class="ma-4" label="Lazy"></v-switch>
      </v-row>-->
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
          v-if="signUpForm"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          prepend-inner-icon="mdi-email"
          required
          v-if="signUpForm || loginForm"
        ></v-text-field>
        <v-text-field
          name="name"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          prepend-inner-icon="mdi-form-textbox-password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :append-icon-cb="() => (showPassword = !showPassword)"
          :rules="[validatePassword]"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          v-if="signUpForm || loginForm"
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
          v-if="signUpForm"
        ></v-select>

        <!-- <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
        v-if="loginForm"
        ></v-checkbox>-->
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">Login</v-btn>

        <!-- <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

        <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>-->
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    loginForm: Boolean,
    signUpForm: Boolean
  },
  data: () => ({
    invalidPassword: false,
    showPassword: false,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    password: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    lazy: false,
    error: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    login: function() {
      console.log("Clicked on Login");
      this.$store.dispatch("user/login", { data: "Hi there" });
    },
    validatePassword: function(val) {
      console.log(val);
      if (val === undefined || val === "") {
        return "Enter Password";
      }
      if (val.length < 10) {
        this.invalidPassword = true;
        return "Min 10 characters";
      }
      this.valid = true;
      this.error = false;
      return true;
    }
  }
};
</script>
