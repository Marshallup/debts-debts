<script setup lang="ts">
  import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'

  const router = useRouter()

  function onBack() {
    router.replace('/')
  }
</script>

<template>
  <main class="p-2">
    <ButtonUi
      title="назад"
      class="fixed top-[10px] left-[10px]"
      @click="onBack"
    >
      <ArrowLeftIcon />
    </ButtonUi>
    <div class="container pt-5">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
