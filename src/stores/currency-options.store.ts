import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CurrencyOption, CurrencyOptionsDataResponse } from '@/stores/types.ts'
import { fetchCurrencyOptions } from '@/providers/currency-api.provider.ts'

export const useCurrencyOptionsStore = defineStore('currency-options', () => {
  const currencyOptions = ref<CurrencyOption[]>([])
  const isLoading = ref<boolean>(false)

  const getCurrencies = async () => {
    if (currencyOptions.value.length) {
      return
    }
    isLoading.value = true
    const response = await fetchCurrencyOptions()
    if (response?.data && response.data?.response?.length) {
      currencyOptions.value = response.data?.response?.map(
        ({ code, id, name, short_code, symbol }: CurrencyOptionsDataResponse) => ({
          id,
          name,
          code,
          symbol,
          short_code,
          value: id,
          label: `${short_code} - ${name}`,
        }),
      )
    }
  }

  const getOptionById = (optionId: number): CurrencyOption | null =>
    currencyOptions.value?.find(({ id }) => id === optionId) ?? null

  getCurrencies()

  return {
    currencyOptions,
    getOptionById,
  }
})
