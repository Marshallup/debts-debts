<script setup lang="ts">
  import { rubFormat } from '@/utils/currencyFormatters'
  export interface HeaderDebtsDebtsItemProps {
    title: string
    numbers: number
    isLoan?: boolean
    isDebts?: boolean
  }

  defineProps<HeaderDebtsDebtsItemProps>()
</script>

<template>
  <div class="flex items-center gap-1">
    <TypographyUi tag="span" class="text-lg text-white"
      >{{ title }}
    </TypographyUi>
    <TypographyUi
      tag="span"
      :class="{ 'text-success': isLoan, 'text-error': isDebts }"
      >{{ rubFormat(numbers) }}</TypographyUi
    >
  </div>
</template>

<style scoped></style>
