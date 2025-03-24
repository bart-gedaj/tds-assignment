import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CurrencyOption } from '@/stores/types.ts'
import { useCurrencyOptionsStore } from '@/stores/currency-options.store.ts'
import { fetchExchangeRates } from '@/providers/currency-api.provider.ts'

export const useCurrencyStatsStore = defineStore('currency-stats.store', () => {
  const selectedCurrency = ref<CurrencyOption | null>(null)
  const exchangeRates = ref<Record<string, number | string>[]>([])
  const date = ref<Date | null>(null)

  const getExchangeRates = async () => {
    if (!selectedCurrency.value) return
    const response = await fetchExchangeRates(selectedCurrency.value.short_code)
    if (response?.data) {
      exchangeRates.value = Object.entries(response.data.rates)
        .map(([code, rate]: [string, unknown]) => ({
          code,
          rate: rate as number,
        }))
        .sort((a, b) => a.code.localeCompare(b.code))
      date.value = response.data.date
    }
  }

  const setSelectedCurrency = (currencyId: number) => {
    const { getOptionById } = useCurrencyOptionsStore()
    selectedCurrency.value = getOptionById(currencyId)
    getExchangeRates()
  }

  return {
    selectedCurrency,
    exchangeRates,
    date,
    setSelectedCurrency,
  }
})
