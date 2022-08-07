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
    <div class="section"><glass-card/></div>
    <div class="section">Test 1</div>
    <div class="section">Test 2</div>
    <div class="section">Test 3</div>
  </fullpage-scrolling-layout>
</template>

<style>
  body {
    background: linear-gradient(#000340, #D20097);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
