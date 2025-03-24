<template>
  <NFormItem :label="label">
    <NSelect
      :options="options"
      :value="value"
      clearable
      filterable
      placeholder="Choose a currency"
      @update-value="$emit('update:value', $event)"
    />
  </NFormItem>
</template>
<script lang="ts" setup>
import { NFormItem, NSelect, type SelectOption } from 'naive-ui'

defineProps<{
  value?: number
  options: SelectOption[]
  label: string
}>()
</script>
