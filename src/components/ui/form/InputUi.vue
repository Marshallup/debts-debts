<script setup lang="ts">
  import { useField } from 'vee-validate'
  import { getUniqID } from '@/utils/helpers'

  interface InputUiProps {
    name: string
  }

  const props = defineProps<InputUiProps>()

  const { name } = toRefs(props)

  const { id } = inject('formItem', {
    id: `input-id-${getUniqID()}`,
  })

  const { value, errorMessage } = useField(name)
</script>

<template>
  <div>
    {{ errorMessage }}
    <input
      :id="id"
      v-model="value"
      class="outline-none p-2 bg-base-300 text-white w-full rounded-[4px]"
    />
  </div>
</template>

<style scoped></style>
