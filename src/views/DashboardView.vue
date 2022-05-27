<template>
  <v-container class="home container">
    <v-row>
      <v-col>
<!--        <router-link-->
<!--            :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Sport'}, query: {value: 500}}">-->
<!--          Sport 500-->
<!--        </router-link>-->
<!--        <br>-->
<!--        <router-link-->
<!--            :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Transport'}, query: {value: 50}}">-->
<!--          Transport 50-->
<!--        </router-link>-->
<!--        <br>-->
<!--        <router-link-->
<!--            :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Entertainment'}, query: {value: 2000}}">-->
<!--          Entertainment 2000-->
<!--        </router-link>-->
        <header>
          <div class="text-h5 text-sm-h3 mb-8">Мои личные расходы</div>
          <div class="total mb-1">Всего: {{ getFullPaymentValue }}</div>
        </header>
        <main>

          <v-dialog

              width="500"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                  v-on="on"
                  class="mb-4"
                  color="teal"
                  dark
              >
                Добавить расходы
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <AddPaymentForm titleText="Добавить"/>
            </v-card>
          </v-dialog>

          <PaymentsDisplay :items="currentElements"/>
          <v-pagination
              v-model="listCurrent"
              :length="Math.ceil(this.$store.getters.getPaymentsList.length / n)"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
          ></v-pagination>
        </main>
      </v-col>
      <v-col>
        <div class="text-h5 text-sm-h4 mt-8 text-center">Диаграмма</div>
        <MyDiagram/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import {mapMutations, mapGetters} from 'vuex'
import AddPaymentForm from "@/components/AddPaymentForm";
import MyDiagram from "@/components/MyDiagram";

export default {
  name: 'DashboardView',
  components: {
    AddPaymentForm,
    PaymentsDisplay,
    MyDiagram
  },
  data() {
    return {
      dialog: false,
      listCurrent: 1,
      n: 8
    }
  },
  methods: {
    ...mapMutations([
      "setPaymentsListData"
    ]),
  },
  async created() {
    await this.$store.dispatch("fetchData")
  },
  computed: {
    ...mapGetters([
      "getPaymentsList", "getFullPaymentValue"
    ]),

    currentElements() {
      return this.getPaymentsList.slice(this.n * (this.listCurrent - 1), this.n * (this.listCurrent - 1) + this.n)
    }
  },
}

</script>

<style scoped lang="scss">

</style>
