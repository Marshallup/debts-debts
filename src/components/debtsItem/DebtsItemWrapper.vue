<script setup lang="ts">
  export interface DebtsItemWrapperProps {
    active: boolean
  }

  defineProps<DebtsItemWrapperProps>()
</script>

<template>
  <div
    class="p-4 mb-5 last:mb-0"
    :class="{ 'bg-grey-100': !active, 'bg-black': active }"
  >
    <slot />
  </div>
</template>

<style scoped></style>
