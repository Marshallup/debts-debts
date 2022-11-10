import FormItemUi from '@/components/ui/form/FormItemUi.vue'

export type FormItemUiProps = Omit<
  InstanceType<typeof FormItemUi>['$props'],
  'id' | 'errorMessage'
>
