<script setup lang="ts">
  import JsxComp from './JsxComp'
  import AnotherJsx from './AnotherJsx'

  const ss = h('div', 'sss')

  const tag = ref<'h1' | 'h2'>('h1')
  function changeTag() {
    if (tag.value === 'h1') {
      tag.value = 'h2'
    } else {
      tag.value = 'h1'
    }
  }
</script>

<template>
  <div>
    <component :is="ss" />
    HelloWorld Vue
    <div>
      <div @click="changeTag">Change tag</div>
      <JsxComp :tag="tag">
        <AnotherJsx />
      </JsxComp>
    </div>
  </div>
</template>
