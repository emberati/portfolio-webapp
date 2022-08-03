<script>
import GlassCard from '@/components/GlassCard'
import PaginationContainer from '@/components/containers/PaginationContainer'

export default {
  name: 'App',
  components: {
    GlassCard,
    PaginationContainer,
  },
  
}
</script>

<template>
  <pagination-container>
      <template v-slot="paginationFunction">
        <glass-card :class="'view'"/>
        <h2 id="t1" class="t1 view" v-paginate="paginationFunction">Test 1</h2>
        <h2 id="t2" class="t2 view" v-paginate="paginationFunction">Test 2</h2>
        <h2 id="t3" class="t3 view" v-paginate="paginationFunction">Test 3</h2>
      </template>
  </pagination-container>
</template>

<style>
  body {
    background: linear-gradient(#000340, #D20097);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  
  [class^=t] {
    height: 100vh;
  }
  .t1 {
    background-color: white;
    height: auto;
  }

  .t2 {
    background-color: red;
    height: 50vh;
  }

  .t3 {
    background-color: purple;
  }
</style>
