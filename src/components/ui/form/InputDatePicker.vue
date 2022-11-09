<script setup lang="ts">
  import { useField } from 'vee-validate'
  import Datepicker, { VueDatePicker } from '@vuepic/vue-datepicker'

  interface InputDatePickerProps {
    name: string
  }

  const props = defineProps<InputDatePickerProps>()

  const { name } = toRefs(props)

  const { value, errorMessage } = useField<VueDatePicker['modelValue']>(name)
</script>

<template>
  <div>
    {{ errorMessage }}
    <Datepicker
      v-model="value"
      model-type="dd.MM.yyyy"
      format="dd.MM.yyyy"
      auto-apply
      dark
      locale="ru"
      :enable-time-picker="false"
      v-bind="$attrs"
    ></Datepicker>
  </div>
</template>

<style lang="scss">
  $dp__input_padding: 8px 12px;

  @import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';

  .dp__theme_dark {
    --dp-background-color: hsl(var(--b3));
  }
</style>
