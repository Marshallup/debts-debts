<script setup lang="ts">
  import { getUniqID } from '@/utils/helpers'

  interface FormItemProps {
    label?: string
  }

  defineProps<FormItemProps>()

  const id = ref(`id-form-item-${getUniqID()}`)

  provide('formItem', {
    id: unref(id),
  })
</script>

<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="block mb-2">
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<style scoped></style>
