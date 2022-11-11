<script setup lang="ts">
  import { useField } from 'vee-validate'
  import { FormItemUiProps } from '@/types/formItemUiTypes'

  export type OrigInputValue = string | number | null

  export interface InputUiProps {
    name: string
    formItemProps?: FormItemUiProps
    modelValue?: OrigInputValue
    inputValue?: string | null
    isBindValues?: boolean
    defaultClearValue?: null | string
    setInputRef?: (el: HTMLInputElement) => void
  }

  interface InputUiEmits {
    (e: 'onBlur', val: OrigInputValue): void
    (e: 'update:modelValue', val: OrigInputValue): void
    (e: 'update:inputValue', val: string | null): void
    (e: 'clearValue', val: InputUiProps['defaultClearValue']): void
  }

  const props = withDefaults(defineProps<InputUiProps>(), {
    type: 'string',
    formItemProps: () => ({}),
    setInputRef: () => ({}),
    modelValue: null,
    inputValue: null,
    defaultClearValue: null,
    isBindValues: false,
  })

  const emit = defineEmits<InputUiEmits>()

  const { name } = toRefs(props)

  const { value: origValue, errorMessage } = useField<OrigInputValue>(name)

  const bindValue = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
  })

  const id = ref(`input-id-${getUniqID()}`)

  const innerValue = ref(unref(origValue) as string | null)

  const inputInnerValue = computed({
    get: () => {
      if (props.isBindValues) {
        return props.inputValue
      }
      return unref(innerValue)
    },
    set: (val) => {
      if (props.isBindValues) {
        emit('update:inputValue', val)
      } else {
        innerValue.value = val
      }
    },
  })

  function setValue(val: OrigInputValue) {
    origValue.value = val
    bindValue.value = val
  }

  function onBlur() {
    emit('onBlur', unref(origValue))
  }

  function onInput(event: Event) {
    const { value: inputValue } = event.target as HTMLInputElement

    innerValue.value = inputValue
  }

  function setInnerValue(val: string | null) {
    innerValue.value = val
  }

  function clearInputValues() {
    setValue(props.defaultClearValue)
    setInnerValue(props.defaultClearValue)
    emit('clearValue', props.defaultClearValue)
  }

  watch([inputInnerValue, bindValue], ([inputVal, bindVal]) => {
    if (props.isBindValues) {
      setValue(bindVal)
    } else {
      setValue(inputVal)
    }
  })

  defineExpose({
    setInnerValue,
  })
</script>

<template>
  <FormItemUi :id="id" :error-message="errorMessage" v-bind="formItemProps">
    <div class="relative">
      <div>
        <div
          v-if="origValue"
          class="absolute max-w-[16px] top-1/2 right-[12px] -translate-y-1/2 cursor-pointer"
          @click="clearInputValues"
        >
          <CrossIcon />
        </div>
      </div>
      <input
        :id="id"
        :ref="(el) => setInputRef(el as HTMLInputElement)"
        :value="inputInnerValue"
        class="outline-none py-2 pl-2 pr-4 bg-base-300 text-white w-full rounded-[4px]"
        v-bind="$attrs"
        @blur="onBlur"
        @input="onInput"
      />
    </div>
  </FormItemUi>
</template>

<style scoped></style>
