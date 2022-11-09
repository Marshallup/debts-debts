<script setup lang="ts">
  import { addDays } from 'date-fns'
  import { getDateFromString } from '@/utils/helpers'
  import * as Yup from 'yup'
  import { useForm } from 'vee-validate'

  interface IFormData {
    name: string
    dateFrom: string
    dateTo: string
    sum: number | null
  }

  const schema = Yup.object().shape(
    {
      name: Yup.string().required('Заполните имя'),
      dateFrom: Yup.date()
        .nullable()
        .transform((_, originalValue) => getDateFromString(originalValue))
        .when('dateTo', (dateTo, schema) => {
          if (dateTo) {
            return schema.max(addDays(dateTo, -1), 'max error')
          }
        })
        .required('Заполните дату начала'),
      dateTo: Yup.date()
        .transform((_, originalValue) => getDateFromString(originalValue))
        .required('Заполните дату окончания')
        .nullable()
        .when('dateFrom', (dateFrom, schema) => {
          if (dateFrom) {
            return schema.min(addDays(dateFrom, 1), 'min erorror')
          }
        }),
      sum: Yup.number()
        .required('Заполните сумму')
        .typeError('Сумма должна быть числом')
        .nullable(),
    },
    [['dateFrom', 'dateTo']]
  )

  const { handleSubmit } = useForm<IFormData>({
    initialValues: {
      name: '',
      dateFrom: '',
      dateTo: '',
      sum: null,
    },
    validationSchema: schema,
  })

  const onSubmit = handleSubmit((values) => {
    console.log(values, 'values')
  })

  // console.log(form, date, 'form')
</script>

<template>
  <form @submit="onSubmit">
    <FormItemUi label="Имя">
      <InputUi name="name" />
    </FormItemUi>

    <div class="flex items-center gap-2 w-full">
      <FormItemUi class="grow" label="Дата начала">
        <InputDatePicker name="dateFrom" />
      </FormItemUi>
      <FormItemUi class="grow" label="Дата конца">
        <InputDatePicker name="dateTo" />
      </FormItemUi>
    </div>

    <FormItemUi label="Сумма долга:">
      <InputUi name="sum" />
    </FormItemUi>

    <div class="flex justify-between mt-10">
      <ButtonUi type="button" class="mr-3"> Добавить в займы </ButtonUi>
      <ButtonUi> Добавить </ButtonUi>
    </div>
  </form>
</template>

<style scoped></style>
