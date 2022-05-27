<template>
    <div>
      <ejs-accumulationchart
          id='container'
          ref='pie'
          style='display:block'
          :theme='theme'
          :legendSettings='legendSettings'
          :tooltip='tooltip'
          :enableAnimation='enableAnimation'
          :enableSmartLabels='enableSmartLabels'>
        <e-accumulation-series-collection>
          <e-accumulation-series
              :dataSource='data'
              xName='x'
              yName='y'
              :radius='radius'
              innerRadius='25%'
              :dataLabel='dataLabel'></e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>
</template>

<script>
import Vue from 'vue'
import {
  AccumulationChartPlugin,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  AccumulationTooltip
} from '@syncfusion/ej2-vue-charts'
import { mapGetters } from 'vuex'
Vue.use(AccumulationChartPlugin)
export default Vue.extend({
  data () {
    return {
      theme: 'Dark',
      data: [
        { x: 'Preloader', y: 100, r: '70%' }

      ],
      radius: 'r',
      legendSettings: { visible: true },
      dataLabel: { visible: true, position: 'Outside', name: 'x' },
      tooltip: {
        enable: true
      },
      enableAnimation: true,
      enableSmartLabels: true
    }
  },
  provide: {
    accumulationchart: [
      AccumulationLegend,
      PieSeries,
      AccumulationDataLabel,
      AccumulationTooltip
    ]
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
  },
  methods: {
    convertDBtoChart() {
      const categories = this.getPaymentsList.map(el => el.category)
      const uniqueCategories = categories.filter((val, idx, self) => self.indexOf(val) === idx)
      this.data = uniqueCategories.map((el) => {
        return {
          x: el,
          y: this.getPaymentsList.filter(item => item.category === el)
              .reduce((acc, cur) => acc + cur.value, 0),
          r: (100 - Math.ceil(
              this.getPaymentsList.filter(item => item.category === el)
                  .reduce((acc, cur) => acc + cur.value, 0) *
              100 /
              this.getPaymentsList.reduce((acc, cur) => acc + cur.value, 0)
          )) + '%'
        }
      })
    }
  },
  created () {
   setTimeout(() => {
      this.convertDBtoChart()
    }, 2000)
  }
})
</script>

<style scoped>

</style>