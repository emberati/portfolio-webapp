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
    anchors: ['author', 'test1', 'test2', 'test3'],
  })
  
}
</script>

<template>
  <fullpage-scrolling-layout :anchors="anchors">
    <div class="section author"><glass-card/></div>
    <div class="section t1">Test 1</div>
    <div class="section t2">Test 2</div>
    <div class="section t3">Test 3</div>
  </fullpage-scrolling-layout>
</template>

<style>
  body {
    background: linear-gradient(#000340, #D20097);
    background-repeat: no-repeat;
    background-attachment: fixed;
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
</style>
