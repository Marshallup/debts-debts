<script setup lang="ts">
  import { addDays } from 'date-fns'
  import * as Yup from 'yup'
  import { getDateFromString, initDisabledDates } from '@/utils/helpers'
  import { useForm } from 'vee-validate'

  interface AddFormProps {
    isDebts: boolean
  }

  interface AddFormEmits {
    (e: 'changeType'): void
  }

  interface IFormData {
    name: string
    dateFrom: string
    dateTo: string
    sum: number | null
  }

  const props = defineProps<AddFormProps>()
  const emit = defineEmits<AddFormEmits>()

  const schema = Yup.object().shape(
    {
      name: Yup.string().required('Заполните имя'),
      dateFrom: Yup.date()
        .required('Заполните дату начала')
        .nullable()
        .transform((_, originalValue) => getDateFromString(originalValue))
        .when('dateTo', (dateTo, schema) => {
          if (dateTo) {
            return schema.max(
              addDays(dateTo, -1),
              'Дата начала не может быть больше даты окончания'
            )
          }
        })
        .required('Заполните дату начала'),
      dateTo: Yup.date()
        .transform((_, originalValue) => getDateFromString(originalValue))
        .required('Заполните дату окончания')
        .nullable()
        .when('dateFrom', (dateFrom, schema) => {
          if (dateFrom) {
            return schema.min(
              addDays(dateFrom, 1),
              'Дата окончания не может быть меньше даты начала'
            )
          }
        }),
      sum: Yup.number()
        .required('Заполните сумму')
        .typeError('Сумма должна быть числом')
        .nullable(),
    },
    [['dateFrom', 'dateTo']]
  )

  const { handleSubmit, values } = useForm<IFormData>({
    initialValues: {
      name: '',
      dateFrom: '',
      dateTo: '',
      sum: null,
    },
    validationSchema: schema,
  })

  const toggleFormText = computed(() => {
    if (props.isDebts) {
      return 'Добавить в займы'
    }

    return 'Добавить в долги'
  })

  const onSubmit = handleSubmit((values) => {
    console.log(values, 'values')
  })

  function onClickChangeForm() {
    emit('changeType')
  }
</script>

<template>
  <form @submit="onSubmit">
    <InputUi name="name" :form-item-props="{ label: 'Имя' }" />

    <div class="flex items-center gap-2 w-full">
      <InputDatePicker
        name="dateFrom"
        :form-item-props="{ label: 'Дата начала', class: 'grow' }"
        :disabled-dates="(date) => initDisabledDates(date, values.dateTo)"
      />
      <InputDatePicker
        name="dateTo"
        :form-item-props="{ label: 'Дата конца', class: 'grow' }"
        :disabled-dates="
          (date) => initDisabledDates(date, values.dateFrom, false)
        "
      />
    </div>

    <InputUi
      name="sum"
      type="number"
      :form-item-props="{ label: 'Сумма долга:' }"
    />

    <div class="flex justify-between mt-10">
      <ButtonUi type="button" class="mr-3" @click="onClickChangeForm"
        >{{ toggleFormText }}
      </ButtonUi>
      <ButtonUi> Добавить </ButtonUi>
    </div>
  </form>
</template>

<style scoped></style>
