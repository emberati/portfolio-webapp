<script>
import GlassCard from '@/components/GlassCard'
import FullpageScrollingLayout from './components/layouts/FullpageScrollingLayout.vue'

export default {
  name: 'App',
  components: {
    GlassCard,
    FullpageScrollingLayout,
  },
  data: () => ({
    anchors: ['author', 'test1', 'test2', 'test3', 'test4', 'test5'],
  })
  
}
</script>

<template>
  <fullpage-scrolling-layout :anchors="anchors" :selector="'section'">
    <div class="section author"><glass-card/></div>
    <div class="section t1"><h1>Test 1</h1></div>
    <div class="section t2"><h1>Test 2</h1></div>
    <div class="section t3"><h1>Test 3</h1></div>
    <div class="section t4"><h1>Test 4</h1></div>
    <div class="section t5"><h1>Test 5</h1></div>
  </fullpage-scrolling-layout>
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
</style>
