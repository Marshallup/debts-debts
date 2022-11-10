<script setup lang="ts">
  import { useField } from 'vee-validate'
  import { getUniqID } from '@/utils/helpers'
  import { getVisualNumVal, getNumberOrNull } from '@/utils/valueFormatters'
  import { FormItemUiProps } from '@/types/formItemUiTypes'

  interface InputUiProps {
    name: string
    formItemProps?: FormItemUiProps
    type?: 'string' | 'number'
  }

  type OrigInputValue = string | number | null

  const props = withDefaults(defineProps<InputUiProps>(), {
    type: 'string',
    formItemProps: () => ({}),
  })

  const { name } = toRefs(props)

  const id = ref(`input-id-${getUniqID()}`)

  const { value: origValue, errorMessage } = useField<OrigInputValue>(name)

  const value = ref(unref(origValue))

  function getValueInputType(val: OrigInputValue) {
    switch (props.type) {
      case 'number':
        return getNumberOrNull(val, unref(origValue) as number)
      default:
        return val
    }
  }

  function setInputValue(val: OrigInputValue) {
    origValue.value = getValueInputType(val)
  }

  function setVisualValueInput(val: OrigInputValue) {
    switch (props.type) {
      case 'number': {
        value.value = getVisualNumVal(val)
        break
      }
      default:
        value.value = val
        break
    }
  }

  function onBlur() {
    setVisualValueInput(unref(origValue))
  }

  watch(value, (inputVal) => {
    setInputValue(inputVal)
  })
</script>

<template>
  <FormItemUi :id="id" :error-message="errorMessage" v-bind="formItemProps">
    <input
      :id="id"
      v-model="value"
      class="outline-none p-2 bg-base-300 text-white w-full rounded-[4px]"
      v-bind="$attrs"
      @blur="onBlur"
    />
  </FormItemUi>
</template>

<style scoped></style>
