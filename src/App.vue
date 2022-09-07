<script>
import GlassCard from '@/components/GlassCard'
import FullpageScrollingLayout from '@/components/layouts/FullpageScrollingLayout.vue'
import EyeSvg from '@/components/images/EyeSvg'

export default {
  name: 'App',
  components: {
    GlassCard,
    EyeSvg,
    FullpageScrollingLayout,
  },
  data: () => ({
    anchors: ['author', 'svgs', 'test1', 'test2', 'test3', 'test4', 'test5'],
    scrollpage: null,
  }),
  methods: {
    flip() {
      // console.log(this.layout, this.layout.classList)
      this.layout.classList.toggle('landscape')
      this.scrollpage.redraw()
    }
  },
  mounted() {
    this.layout = this.$refs.layout.$el
    this.scrollpage = this.$refs.layout.scrollpage
    console.log(this.scrollpage)
  }
}
</script>

<template>
  <fullpage-scrolling-layout ref="layout" :anchors="anchors" :selector="'section'">
    <div class="section author"><glass-card/></div>
    <div class="section svgs">
      <div class="vision">
        <eye-svg/><h1>Внимание <br/>к деталям</h1>
      </div>
    </div>
    <div class="section t1"><h1>Test 1</h1></div>
    <div class="section t2"><h1>Test 2</h1></div>
    <div class="section t3"><h1>Test 3</h1></div>
    <div class="section t4"><h1>Test 4</h1></div>
    <div class="section t5"><h1>Test 5</h1></div>
  </fullpage-scrolling-layout>
  <div class="btns">
    <button @click="scrollpage.backward">&lt;&lt;</button>
    <button @click="scrollpage.back">prev</button>
    <button @click="flip">flip</button>
    <button @click="scrollpage.next">next</button>
    <button @click="scrollpage.forward">&gt;&gt;</button>
  </div>
  <div class="" style="height: 100vh; width:100vw;"></div>
</template>

<style>
  body {
    background: linear-gradient(#000340, #D20097);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .section {
    display: flex;
  }

  .section h1 {
    color: white;
    font-size: 64px;
    text-align: center;
    margin: auto;
  }

  .author {
    overflow: auto;
    background-color: #f28482;
  }

  .svgs {
    display: flex;
    background-color: black;
  }
  
  .vision {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .vision>*{
    margin: auto;
  }

  .vision svg {
    margin-bottom: 0;
  }

  .vision h1 {
    margin-top: 50px;
    font-size: 24px;
    font-family: sans-serif;
  }

  .t1 {
    background-color: #f7ede2;
  }

  .t2 {
    background-color: #f5cac3;
  }

  .t3 {
    background-color: #84a59d;
  }

  .t4 {
    background-color: #f28482;
  }

  .t5 {
    background-color: #f6bd60;
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

.scrollpage-outer.landscape .scrollpage-inner {
  display: inline-flex;
}
</style>
