<template>
<v-main class="text-center">
  <h1>Ошибка 404</h1>
  <h3>Страница не найдена!</h3>
  <br>
  <v-dialog
      v-model="dialog"
      width="500"
  >
    <template v-slot:activator="{ on }">
      <v-btn
          v-on="on"
          class="mb-4"
          color="teal"
          dark
      >
        <v-icon>mdi-account-lock-open</v-icon>
        &nbsp;Авторизоваться
      </v-btn>
    </template>
    <v-card>
      <AuthForm/>
    </v-card>
  </v-dialog>
</v-main>
</template>

<script>

import AuthForm from "@/components/AuthForm";
export default {
  name: "NotFound",
  components: {AuthForm},
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>

</style>