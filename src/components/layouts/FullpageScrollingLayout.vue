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
  mounted() {
    this.scrollpage = init(this.$refs.scrollAreaElement, this.selector, this.anchors)
    // console.log('ob3m3');c
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
    <div class="btns">
      <button @click="scrollpage.backward">&lt;&lt;</button>
      <button @click="scrollpage.back">prev</button>
      <button @click="scrollpage.next">next</button>
      <button @click="scrollpage.forward">&gt;&gt;</button>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: auto;
}

.scrollpage-outer {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  outline: none;
}

.scrollpage-inner {
  display: -webkit-inline-box;
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
.view {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.btns {
  /* z-index: 1; */
  position: fixed;
  bottom: 10px;
  left: 10px;
}

.btns button {
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;

  cursor: pointer;
  outline: none;
  border: 1px solid white;
  border-right: none;

  color: white;
  background-color: transparent;
}

.btns button:hover {
  background-color: white;
  color: #f28482;
  /* background-color: #fff; */
}

.btns button:first-child {
  border-right: none;
  border-radius: 5px 0 0 5px;
}

.btns button:last-child {
  border-right: 1px solid white;
  border-radius: 0 5px 5px 0;
}

</style>