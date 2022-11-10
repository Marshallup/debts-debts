<script setup lang="ts">
  import { useField } from 'vee-validate'
  import Datepicker, { VueDatePicker } from '@vuepic/vue-datepicker'
  import { getUniqID } from '@/utils/helpers'
  import { FormItemUiProps } from '@/types/formItemUiTypes'

  interface InputDatePickerProps
    extends Omit<
      VueDatePicker,
      | 'uid'
      | 'model-type'
      | 'format'
      | 'auto-apply'
      | 'dark'
      | 'locale'
      | 'enable-time-picker'
    > {
    name: string
    formItemProps?: FormItemUiProps
  }

  const props = defineProps<InputDatePickerProps>()

  const { name } = toRefs(props)

  const uid = ref(String(getUniqID()))

  const id = computed(() => `dp-input-${unref(uid)}`)

  const { value, errorMessage } = useField<VueDatePicker['modelValue']>(name)
</script>

<template>
  <FormItemUi :id="id" :error-message="errorMessage" v-bind="formItemProps">
    <Datepicker
      v-model="value"
      :uid="uid"
      model-type="dd.MM.yyyy"
      format="dd.MM.yyyy"
      auto-apply
      dark
      locale="ru"
      :enable-time-picker="false"
      v-bind="$attrs"
    ></Datepicker>
  </FormItemUi>
</template>

<style lang="scss">
  $dp__input_padding: 8px 12px;

  @import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';

  .dp__theme_dark {
    --dp-background-color: hsl(var(--b3));
  }
</style>
