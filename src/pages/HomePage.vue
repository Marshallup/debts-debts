<script setup lang="ts">
  import { useCounterStore } from '@/stores/counter'

  const counterStore = useCounterStore()
</script>

<template>
  <div class="flex min-h-screen w-full justify-center items-center">
    <div>
      <div class="flex items-center justify-center gap-5">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img
            src="@/assets/images/icons/vue.svg"
            class="logo vue"
            alt="Vue logo"
          />
        </a>
      </div>
      <div class="text-center mt-10">
        <div>
          {{ counterStore.counter }}

          <button @click="counterStore.incCounter">Увеличить счетчик</button>
        </div>
        <div class="mt-10">
          <HelloWorld class="text-center" />
        </div>
      </div>
    </div>
  </div>
</template>
