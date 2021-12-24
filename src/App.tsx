import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    const title = ref('hzy')
    title.value = 'codehzy'

    return () => <div>{title.value}</div>
  }
})
