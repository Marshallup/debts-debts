<script setup lang="ts">
  import { DebtsItemWrapperProps } from '@/components/debtsItem/DebtsItemWrapper.vue'

  interface DebtsItemMultipleProps {
    active: DebtsItemWrapperProps['active']
  }

  defineProps<DebtsItemMultipleProps>()
</script>

<template>
  <DebtsItemWrapper :active="active">
    <div class="flex justify-between mb-4">
      <DebtsItemPersons is-debt />
      <DebtsItemPersons />
    </div>
    <div class="flex justify-center text-lg">Итог: 50</div>
  </DebtsItemWrapper>
</template>

<style scoped></style>
