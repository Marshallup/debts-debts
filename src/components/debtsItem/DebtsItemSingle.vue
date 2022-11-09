<script setup lang="ts">
  import { DebtsItemWrapperProps } from '@/components/debtsItem/DebtsItemWrapper.vue'

  interface DebtsItemSingleProps {
    active: DebtsItemWrapperProps['active']
  }

  defineProps<DebtsItemSingleProps>()
</script>

<template>
  <DebtsItemWrapper :active="active"> single </DebtsItemWrapper>
</template>

<style scoped></style>
