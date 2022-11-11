<script setup lang="ts">
  const debtStore = useDebtStore()

  debtStore.addDebt({
    person: { id: '2', name: 'Виталий' },
    sum: 12933,
    type: 'debt',
  })

  debtStore.getAllDebtsDB().then((debt) => {
    console.log(debt, 'debts')
  })

  debtStore.getDebt('5').then((debt) => {
    console.log(debt, 'debt')
  })
</script>

<template>
  <ChangeDebtsLoan />
</template>

<style scoped></style>
