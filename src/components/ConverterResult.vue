<template>
  <div v-if="convertedValue !== 0" class="result">
    <section>
      Converted
      <span>{{ amount }} {{ baseCurrency?.short_code }}</span> to
      <span>{{ targetCurrency?.label }}</span> with a rate of
      <span>{{ convertRate }}</span>
    </section>
    <p>
      Returned value: <span>{{ convertedValue.toFixed(2) }} {{ targetCurrency?.short_code }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCurrencyConvertStore } from '@/stores/currency-convert.store.ts'

const { convertRate, convertedValue, baseCurrency, targetCurrency, amount } =
  storeToRefs(useCurrencyConvertStore())
</script>

<style lang="scss" scoped>
.result {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #303030;
  border-radius: 8px;

  border: 1px solid transparent;
  text-align: center;

  span {
    font-weight: bold;
  }
}
</style>
