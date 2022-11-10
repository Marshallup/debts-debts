<script setup lang="ts">
  import { DebtsPersonItemProps } from './DebtsPersonItem.vue'

  interface DebtsPersonListProps {
    persons: Pick<DebtsPersonItemProps, 'name' | 'id'>[]
  }

  defineProps<DebtsPersonListProps>()
</script>

<template>
  <div class="flex items-center">
    <template v-for="(person, personIdx) in persons" :key="person.name">
      <DebtsPersonItem :id="person.id" :name="person.name" />
      <span v-if="personIdx + 1 !== persons.length" class="mr-1">,</span>
    </template>
  </div>
</template>

<style scoped></style>
