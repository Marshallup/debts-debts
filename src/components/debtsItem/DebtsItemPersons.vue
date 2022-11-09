<script setup lang="ts">
  interface DebtsItemPersons {
    isDebt?: boolean
  }

  const props = withDefaults(defineProps<DebtsItemPersons>(), {
    isDebt: false,
  })

  const title = computed(() => (props.isDebt ? 'Должны:' : 'Занял:'))
</script>

<template>
  <div class="basis-[200px]">
    <div class="mb-4 text-lg">{{ title }}</div>
    <div>
      <div class="flex items-center gap-1 text-lg">
        <div>Петр:</div>
        <div>100</div>
      </div>
      <div class="flex items-center gap-1 text-lg">
        <div>Василий:</div>
        <div>100</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
