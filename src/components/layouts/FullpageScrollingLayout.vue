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
  methods: {
    next: () => {this.scrollpage.next()},
  },
  mounted() {
    this.scrollpage = init(this.$refs.scrollAreaElement, this.selector, this.anchors)
    console.log('mounted')
  },
  unmounted() {
    console.log('unmounted')
    window.removeEventListener('resize', this.verbose)
    this.scrollpage.destroy()
  }
}
</script>

<template>
  <div class="scrollpage-outer" ref="scrollAreaElement" tabindex="0">
    <div class="scrollpage-inner">
      <slot></slot>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: hidden; /* FIX THIS DEPENDENCY */
}

.scrollpage-outer, .view {
  height: 100vh;
  width: 100vw;

  /* height: 600px; */
  /* width: 800px; */

  overflow: hidden;
  outline: none;
}

.scrollpage-inner {
  transition-property: transform;
  transition-timing-function: var(--timefunc);
  transition-duration: var(--duration);
  transition-delay: var(--delay);
  
  transform: translate(var(--dx), var(--dy));
}

.scrollpage-outer.touch .scrollpage-inner {
  user-select: none;
  touch-action: none;
  transition: none!important;
}

.scrollpage-outer.swipe .scrollpage-inner {
  transition: .3s!important;
}

</style>