export interface CurrencyOption {
  id: number
  name: string
  short_code: string
  symbol: string
  code: string
  label: string
  value: number
}

export interface CurrencyOptionsDataResponse {
  code: string
  id: number
  short_code: string
  symbol: string
  name: string
}
