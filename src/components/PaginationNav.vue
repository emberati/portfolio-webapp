<script>
export default {
  name: 'pagination-nav',
  emits: ['changeView'],
  props: {
    links: {
      type: Array[Object],
      required: true
    },
    activeView: {
      required: true
    }
  },
  methods: {
    navigate(anchor) {
      this.$emit('changeView', anchor)
    },
  },
  mounted() {
    this.navigate(this.links[0].id)
    this.links.forEach(element => {
      console.log(element.id)
    });
  },
}
</script>

<template>
<nav>
  <ul>
    <li
      v-for="link in links"
      :key="`${link.id}-id-link`">
        <a
          :href="`#${link.id}`"
          class="link"
          :class="{'active': activeView === link.id}"
          @click.prevent="navigate(link.id)">
          <h3 class="link-title">{{link.title}}</h3>
          <div class="link-mark"></div>
        </a>
    </li>
  </ul>
</nav>
</template>

<style scoped>
nav {
  position: fixed;
  height: fit-content;
  right: 0;
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);

  color: black;
  background-color: transparent;
}

a {
  display: flex;
  align-items: center;
  gap: 10px; /* NOT STABLE */
}

ul {
  display: flex;
  flex-direction: column;
  gap: 20px; /* NOT STABLE */
}

.link-title {
  font-family: sans-serif;
  padding: 0;
}

.link.active {
  color: white;
}

.link-mark::after {
  background-color: black;
  transition: .3s ease;
}

.link.active .link-mark::before {
  transition: 1s ease;
  transform: rotate(360deg);
}

.link.active .link-mark::after {
  margin: 10%;
  width: 79%;
  height: 79%;
}

.link-mark {
  width: 20px;
  height: 20px;
  position: relative;
}

.link-mark::before,
.link-mark::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.link-mark::before {
  background: rgb(247,37,133);
  background: linear-gradient(
    45deg,
    rgba(247,37,133,1) 0%,
    rgba(114,9,183,1) 33%,
    rgba(58,12,163,1) 66%,
    rgba(76,201,240,1) 100%
  );
}

</style>