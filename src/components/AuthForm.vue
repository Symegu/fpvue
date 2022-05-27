<template>
  <v-card class="pa-8">
    <v-card-title class="justify-center">Авторизация</v-card-title>
    <v-text-field v-model="login" label="Логин"/>
    <v-text-field
        class="mb-2"
        v-model="password"
        :append-icon="showPswd ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="showPswd ? 'text' : 'password'"
        name="input-10-2"
        label="Пароль"
        hint="At least 8 characters"
        @click:append="showPswd = !showPswd"
        value=""
        counter
    ></v-text-field>
    <v-btn color="teal" dark @click="onClickAuth">Войти</v-btn>
  </v-card>
</template>

<script>

export default {
  name: "AuthForm",
  data() {
    return {
      login: '',
      password: '',
      showPswd: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
    }
  },
  methods: {
    onClickAuth() {
      console.log(this.login, this.password)
    }
  }
}
</script>

<style scoped>

</style>