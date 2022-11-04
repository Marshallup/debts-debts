export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0)

  function incCounter() {
    counter.value += 1
  }

  return {
    counter,
    incCounter,
  }
})
