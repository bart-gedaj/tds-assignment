<template>
  <NForm>
    <CurrencySelect
      :options="currencyOptions"
      :value="baseCurrency?.value"
      label="Select base currency"
      @update:value="setBaseCurrency"
    />
    <NFormItem label="Input the amount">
      <NInputNumber v-model:value="amount" :min="0" placeholder="Enter amount" size="large" />
    </NFormItem>
    <CurrencySelect
      :options="currencyOptions"
      :value="targetCurrency?.value"
      label="Select target currency"
      @update:value="setTargetCurrency"
    />

    <NFormItem>
      <NButton :disabled="convertDisabled" type="primary" @click="convertCurrency">Convert</NButton>
    </NFormItem>
  </NForm>
</template>
<script lang="ts" setup>
import { NButton, NForm, NFormItem, NInputNumber } from 'naive-ui'
import CurrencySelect from '@/components/CurrencySelect.vue'
import { useCurrencyOptionsStore } from '@/stores/currency-options.store.ts'
import { storeToRefs } from 'pinia'
import { useCurrencyConvertStore } from '@/stores/currency-convert.store.ts'
import { computed } from 'vue'

const store = useCurrencyConvertStore()
const { baseCurrency, targetCurrency, amount } = storeToRefs(store)
const { setBaseCurrency, setTargetCurrency, convertCurrency } = store

const { currencyOptions } = storeToRefs(useCurrencyOptionsStore())

const convertDisabled = computed(
  () => !baseCurrency.value || !targetCurrency.value || amount.value <= 0,
)
</script>
<style lang="scss" scoped>
:deep(.n-input-number) {
  width: 100%;
}
</style>
