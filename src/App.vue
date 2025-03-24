<template>
  <NConfigProvider :theme="darkTheme">
    <div class="app-container">
      <AppHeader />
      <main class="content-container">
        <router-view />
      </main>
    </div>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { darkTheme, NConfigProvider } from 'naive-ui'
import AppHeader from '@/components/layout/AppHeader.vue'

import { useCurrencyOptionsStore } from '@/stores/currency-options.store.ts'

useCurrencyOptionsStore()
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-container {
  flex-grow: 1;
  margin-top: 7rem;
  overflow-y: auto;
  padding: 1rem;
}
</style>
