<script setup lang="ts">
  export interface DebtsPersonItemProps {
    id: string
    name: string
  }

  const route = useRoute()

  const routeName = computed(() => {
    switch (route.name) {
      case 'addDebts':
      case 'updateDebts':
        return 'updateDebts'
      case 'addLoan':
      case 'updateLoan':
        return 'updateLoan'
      default:
        return '#'
    }
  })

  defineProps<DebtsPersonItemProps>()
</script>

<template>
  <div>
    <RouterLink
      :to="{ name: routeName, params: { id } }"
      class="text-lg link link-hover"
      >{{ name }}</RouterLink
    >
  </div>
</template>

<style scoped></style>
