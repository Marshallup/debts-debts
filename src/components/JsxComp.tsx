import { PropType } from 'vue'

export default defineComponent({
  props: {
    tag: {
      type: String as PropType<'h1' | 'h2'>,
      default: () => 'h1',
    },
  },
  render() {
    const tag = h(this.tag)

    return (
      <tag class="www">
        asdas
        {this.$slots.default?.()}
      </tag>
    )
  },
})
