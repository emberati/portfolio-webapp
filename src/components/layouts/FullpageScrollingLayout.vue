<script>
import init from '@/components/layouts/scrollpage'
export default {
  name: 'fullpage-scrolling-layout',
  props: {
    anchors: {
      type: Array[String],
      required: true
    },
    selector: {
      type: String,
      required: false
    }
  },
  data: () => ({
    scrollpage: null
  }),
  methods: {},
  mounted() {
    this.scrollpage = init(this.$refs.scrollAreaElement, null, this.anchors)

    this.verbose = () => {
      let el = this.scrollpage.current
      let w = Number.parseInt(el.width)
      let h = Number.parseInt(el.height)

      console.log(
        el.anchor,
        `${w}x${h}`
      )
    }

    window.addEventListener('resize', this.verbose)
  },
  unmounted() {
    window.removeEventListener('resize', this.verbose)
  }
}
</script>

<template>
  <div class="fullpage-scrolling-layout" ref="scrollAreaElement">
    <slot></slot>
  </div>
</template>

<style>
.fullpage-scrolling-layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.view {
  height: 100vh;
  width: 100vw;
}
</style>