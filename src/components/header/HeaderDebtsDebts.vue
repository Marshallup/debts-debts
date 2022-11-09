<script setup lang="ts">
  import { HeaderDebtsDebtsItemProps } from '@/components/header/HeaderDebtsDebtsItem.vue'

  interface HeaderDebtsDebtsProps {
    items: [HeaderDebtsDebtsItemProps, HeaderDebtsDebtsItemProps]
  }

  defineProps<HeaderDebtsDebtsProps>()
</script>

<template>
  <div class="flex flex-col gap-1">
    <HeaderDebtsDebtsItem
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :numbers="item.numbers"
      :is-debts="item.isDebts"
      :is-loan="item.isLoan"
    />
  </div>
</template>

<style scoped></style>
