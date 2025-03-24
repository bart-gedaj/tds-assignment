import axios from 'axios'

const BASE_URL = 'https://api.currencybeacon.com/v1/'
const api_key = import.meta.env.VITE_CURRENCYBEACON_API_KEY

export const fetchExchangeRates = async (base: string) => {
  try {
    return await axios.get(`${BASE_URL}latest`, {
      params: {
        base,
        api_key,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export const fetchCurrencyOptions = async (type: string = 'fiat') => {
  try {
    return await axios.get(`${BASE_URL}currencies`, {
      params: {
        type,
        api_key,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export const convertCurrencyRequest = async (from: string, to: string, amount: number) => {
  try {
    return await axios.get(`${BASE_URL}convert`, {
      params: {
        from,
        to,
        amount,
        api_key,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export const fetchConvertRate = async (base: string, symbols: string) => {
  try {
    return await axios.get(`${BASE_URL}latest`, {
      params: {
        api_key,
        base,
        symbols,
      },
    })
  } catch (error) {
    console.error(error)
  }
}
