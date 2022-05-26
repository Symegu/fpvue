<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 pb-3">My Personal cost</div>
        
        <v-dialog v-model="dialog" width="500">
          <template #activator="{ on }">
            <v-btn v-on="on" color="teal" dark>ADD NEW COST <v-icon>mdi-plus</v-icon></v-btn>
          </template>

          <v-card>
            <AddPaymentForm />
          </v-card>
        </v-dialog>

        <PaymentsDisplayVue :items="paymentsList" />

      </v-col>
      <v-col>
        DIAGRAMM
      </v-col>

    </v-row>
  </v-container>
</template>
<script>
import PaymentsDisplayVue from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue';
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplayVue,
    AddPaymentForm
},
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    paymentsList() {
      return this.$store.getters.getPaymentsList;
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchData");
  }
}
</script>