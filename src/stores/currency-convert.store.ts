import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { convertCurrencyRequest, fetchConvertRate } from '@/providers/currency-api.provider.ts'
import type { CurrencyOption } from '@/stores/types.ts'
import { useCurrencyOptionsStore } from '@/stores/currency-options.store.ts'

export const useCurrencyConvertStore = defineStore('currency-convert-store', () => {
  const amount = ref<number>(0)
  const convertedValue = ref<number>(0)
  const baseCurrency = ref<CurrencyOption | null>(null)
  const targetCurrency = ref<CurrencyOption | null>(null)
  const convertRate = ref<number>(0)

  const convertCurrency = async () => {
    if (!baseCurrency.value || !targetCurrency.value || amount.value <= 0) return

    const response = await convertCurrencyRequest(
      baseCurrency.value.short_code,
      targetCurrency.value.short_code,
      amount.value,
    )
    if (response?.data && response?.data.value) {
      convertedValue.value = response.data.value
    }
  }

  const getConvertRate = async () => {
    if (!baseCurrency.value || !targetCurrency.value) return
    const response = await fetchConvertRate(
      baseCurrency.value.short_code,
      targetCurrency.value.short_code,
    )
    if (response?.data && response?.data.rates) {
      convertRate.value = response?.data.rates[targetCurrency.value.short_code]
    }
  }

  const setBaseCurrency = (selectedCurrencyId: number) => {
    const { getOptionById } = useCurrencyOptionsStore()
    baseCurrency.value = getOptionById(selectedCurrencyId)
    resetConvertedValue()
  }
  const setTargetCurrency = (selectedCurrencyId: number) => {
    const { getOptionById } = useCurrencyOptionsStore()
    targetCurrency.value = getOptionById(selectedCurrencyId)
    resetConvertedValue()
  }

  const resetConvertedValue = () => {
    convertedValue.value = 0
  }

  watch([baseCurrency, targetCurrency], async () => {
    if (!baseCurrency.value || !targetCurrency.value) return
    await getConvertRate()
  })

  return {
    amount,
    convertedValue,
    baseCurrency,
    targetCurrency,
    convertRate,
    setBaseCurrency,
    setTargetCurrency,
    convertCurrency,
  }
})
