<script setup lang="ts">
  const router = useRouter()
  const route = useRoute()

  const isDebts = computed(() => route.meta.isDebts)

  const toggleFormText = computed(() => {
    if (unref(isDebts)) {
      return 'Добавить в займы'
    }

    return 'Добавить в долги'
  })

  const persons = [
    {
      id: '1',
      name: 'Василий',
    },
    {
      id: '2',
      name: 'Петр',
    },
  ]

  function onChangeType() {
    if (unref(isDebts)) {
      router.push({ name: 'addLoan' })
      return
    }

    router.push({ name: 'addDebts' })
  }
</script>

<template>
  <div class="max-w-[500px] mx-auto">
    <div class="mb-5">
      <DebtsPersonList :persons="persons" />
    </div>
    <div>
      <AddForm :is-debts="!!isDebts">
        <template #buttonLeft>
          <ButtonUi type="button" class="mr-3" @click="onChangeType"
            >{{ toggleFormText }}
          </ButtonUi>
        </template>
      </AddForm>
    </div>
  </div>
</template>

<style scoped></style>
