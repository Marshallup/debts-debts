<script lang="ts">
  export default defineComponent({
    inheritAttrs: false,
  })
</script>

<script setup lang="ts">
  import InputUi, { InputUiProps, OrigInputValue } from './InputUi.vue'

  interface NumberInputUiProps extends Omit<InputUiProps, 'type'> {
    modelValue?: number | null
    name: string
  }

  const value = ref<number | null>(null)
  const inputValue = ref('')
  const inputRef = ref<InstanceType<typeof InputUi> | null>(null)

  function setModelValue(val: OrigInputValue) {
    value.value = getNumberOrNull(val)
  }

  function setVisualValueInput() {
    const clearValue = unref(value)

    if (clearValue && clearValue >= 0) {
      inputValue.value = getVisualNumVal(String(clearValue)) as string
    } else {
      inputValue.value = ''
    }
  }

  function onBlur() {
    setVisualValueInput()
    unref(inputRef)?.setInnerValue(unref(inputValue))
  }

  defineProps<NumberInputUiProps>()
</script>

<template>
  <InputUi
    ref="inputRef"
    v-model:input-value="inputValue"
    :model-value="value"
    :name="name"
    v-bind="$attrs"
    @on-blur="onBlur"
    @update:model-value="setModelValue"
  />
</template>

<style scoped></style>
