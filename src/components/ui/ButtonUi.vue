<script setup lang="ts">
  interface ButtonUiProps {
    styleType?: 'circle' | 'default'
  }

  const props = withDefaults(defineProps<ButtonUiProps>(), {
    styleType: 'default',
  })

  const styleTypeClass = computed(() => {
    switch (props.styleType) {
      case 'circle':
        return 'btn-circle'
      default:
        return ''
    }
  })
</script>

<template>
  <button class="btn" :class="{ [styleTypeClass]: true }">
    <slot />
  </button>
</template>

<style scoped></style>
