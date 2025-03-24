<template>
  <section class="stats-view__select">
    <CurrencySelect
      :options="currencyOptions"
      :value="selectedCurrency?.value"
      label="Select currency"
      @update:value="setSelectedCurrency"
    />
  </section>
  <section class="stats-view__data">
    <NSpace>
      <p v-if="date">
        Conversion rates from <span>{{ date }}</span>
      </p>
    </NSpace>
    <NDataTable :columns="columns" :data="exchangeRates" size="small" />
  </section>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { NDataTable, NSpace } from 'naive-ui'
import CurrencySelect from '@/components/CurrencySelect.vue'
import { useCurrencyOptionsStore } from '@/stores/currency-options.store.ts'
import { useCurrencyStatsStore } from '@/stores/currency-stats.store.ts'

const columns = [
  { title: 'Currency Code', key: 'code' },
  { title: 'Conversion rate', key: 'rate' },
]

const { currencyOptions } = storeToRefs(useCurrencyOptionsStore())
const store = useCurrencyStatsStore()
const { selectedCurrency, exchangeRates, date } = storeToRefs(store)
const { setSelectedCurrency } = store
</script>
