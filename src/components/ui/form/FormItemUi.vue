<script setup lang="ts">
  export interface FormItemProps {
    id: string
    label?: string
    errorMessage?: string
  }

  const props = defineProps<FormItemProps>()

  const id = computed(() => props.id)
</script>

<template>
  <div class="mb-6 relative">
    <label v-if="label" :for="id" class="block mb-2">
      {{ label }}
    </label>

    <div>
      <slot />
    </div>

    <Transition
      class="absolute text-xs text-error top-[calc(100%+5px)]"
      enter-from-class="translate-y-[50%] opacity-0"
      leave-to-class="translate-y-[50%] opacity-0"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
    >
      <div v-if="errorMessage">
        {{ errorMessage }}
      </div>
    </Transition>
  </div>
</template>

<style scoped></style>
