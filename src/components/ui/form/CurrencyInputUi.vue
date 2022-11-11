<script lang="ts">
  export default defineComponent({
    inheritAttrs: false,
  })
</script>

<script setup lang="ts">
  import { useCurrencyInput, CurrencyInputOptions } from 'vue-currency-input'
  import { InputUiProps } from './InputUi.vue'

  interface CurrencyInputUiProps extends Omit<InputUiProps, 'type'> {
    currencyOptions?: CurrencyInputOptions
    name: string
  }

  const props = withDefaults(defineProps<CurrencyInputUiProps>(), {
    currencyOptions: () => ({
      currency: 'RUB',
      locale: 'ru',
      hideGroupingSeparatorOnFocus: false,
      hideCurrencySymbolOnFocus: false,
      hideNegligibleDecimalDigitsOnFocus: false,
    }),
  })

  const { inputRef, formattedValue, numberValue, setValue } = useCurrencyInput(
    props.currencyOptions,
    true
  )

  const numberComputed = computed(() => unref(numberValue))

  function setInputRef(el: HTMLInputElement) {
    inputRef.value = el
  }
</script>

<template>
  <InputUi
    v-bind="$attrs"
    :name="name"
    :model-value="numberComputed"
    :input-value="formattedValue"
    is-bind-values
    :set-input-ref="setInputRef"
    @clear-value="setValue(null)"
  />
</template>

<style scoped></style>
