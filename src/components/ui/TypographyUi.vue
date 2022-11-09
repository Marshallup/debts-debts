<script lang="tsx">
  import { PropType } from 'vue'

  export default defineComponent({
    props: {
      tag: {
        type: String as PropType<'h1' | 'div' | 'span'>,
        default: () => 'h1',
      },
    },
    render() {
      const tag = h(this.tag)

      return <tag>{this.$slots.default?.()}</tag>
    },
  })
</script>
