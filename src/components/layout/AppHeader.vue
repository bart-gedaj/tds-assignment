<template>
  <header class="app-header">
    <h2>Simple currency converter</h2>
    <div class="app-header__nav">
      <RouterLink v-slot="{ isActive, navigate }" :to="{ name: RouteNames.Home }" custom>
        <NButton :type="isActive ? 'primary' : 'default'" round @click="navigate">Home </NButton>
      </RouterLink>
      <RouterLink v-slot="{ isActive, navigate }" :to="{ name: RouteNames.Stats }" custom>
        <NButton :type="isActive ? 'primary' : 'default'" round @click="navigate">Stats </NButton>
      </RouterLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { RouteNames } from '@/router'
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-background-mute);
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  text-align: center;

  &__nav {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
