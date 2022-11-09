<script setup lang="ts">
  import { HeaderDebtsDebtsItemProps } from '@/components/header/HeaderDebtsDebtsItem.vue'
  import PlusIcon from 'vue-material-design-icons/Plus.vue'

  type IHeaderDebtsDebts = [
    HeaderDebtsDebtsItemProps,
    HeaderDebtsDebtsItemProps
  ]

  const activeDebts: IHeaderDebtsDebts = [
    {
      title: 'Долги:',
      numbers: 100,
      isDebts: true,
    },
    {
      title: 'Займы:',
      numbers: 1200,
      isLoan: true,
    },
  ]

  const generalDebts: IHeaderDebtsDebts = [
    {
      title: 'Долги:',
      numbers: 1500,
      isDebts: true,
    },
    {
      title: 'Займы:',
      numbers: 3200,
      isLoan: true,
    },
  ]
</script>

<template>
  <header class="navbar fixed">
    <div class="navbar-start">
      <HeaderDebtsDebts :items="activeDebts" />
    </div>
    <div class="navbar-center">
      <div class="flex items-center gap-x-4">
        <RouterLink :to="{ name: 'addDebts' }">
          <ButtonUi style-type="circle" title="Добавить долг" class="btn-error">
            <PlusIcon />
          </ButtonUi>
        </RouterLink>
        <ButtonUi style-type="circle" title="Добавить займ" class="btn-success">
          <PlusIcon />
        </ButtonUi>
      </div>
    </div>
    <div class="navbar-end">
      <HeaderDebtsDebts :items="generalDebts" />
    </div>
  </header>
</template>

<style scoped></style>
