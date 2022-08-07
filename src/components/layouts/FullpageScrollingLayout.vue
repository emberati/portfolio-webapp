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

    this.verbose = () => { /* eslint-disable */
      let el = this.scrollpage.current
      let w = Number.parseInt(el.width)
      let h = Number.parseInt(el.height)

      // console.log(
        // el.anchor,
        // `${w}x${h}`
      // )
    }

    

    window.addEventListener('resize', this.verbose)
  },
  unmounted() {
    window.removeEventListener('resize', this.verbose)
  }
}
</script>

<template>
  <div class="scrollpage-outer" ref="scrollAreaElement">
    <div class="scrollpage-inner">
      <slot></slot>
    </div>
    <div class="btns">
      <button @click="scrollpage.scrollBack">prev</button>
      <button @click="scrollpage.scrollNext">next</button>
    </div>
  </div>
</template>

<style>
.scrollpage-outer {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.scrollpage-inner {
  transition-property: transform;
  transition-timing-function: var(--timefunc);
  transition-duration: var(--duration);
  transition-delay: var(--delay);
  
  transform: translate(var(--dx), var(--dy));
}

.view {
  height: 100vh;
  width: 100vw;
}

.btns {
  position: fixed;
  bottom: 10px;
  left: 10px;
}
</style>