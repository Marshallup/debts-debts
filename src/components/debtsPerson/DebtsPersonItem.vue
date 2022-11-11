<script setup lang="ts">
  import ROUTES_NAMES from '@/router/routesNames'

  export interface DebtsPersonItemProps {
    id: string
    name: string
  }

  const route = useRoute()

  const routeName = computed(() => {
    switch (route.name) {
      case ROUTES_NAMES.ADD_DEBTS:
      case ROUTES_NAMES.UPDATE_DEBTS:
        return ROUTES_NAMES.UPDATE_DEBTS
      case ROUTES_NAMES.ADD_LOAN:
      case ROUTES_NAMES.UPDATE_LOAN:
        return ROUTES_NAMES.UPDATE_LOAN
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
