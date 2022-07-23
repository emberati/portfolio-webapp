<script>
import tilt from 'vanilla-tilt'

export default {
  name: 'glass-card',
  mounted() {

    tilt.init(this.$refs.card, {
      reverse: true,
      max: 5,
      glare: true,
      'max-glare': 0.5,
      gyroscope: true
    })
  }
}
</script>

<template>
<div class="glass-card" ref="card">
  <div class="glass-card-content">
    <h2>01</h2>
    <h3>Card One</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="socials">
      <a href="#"><span class="icon telegram-framed"></span></a>
      <a href="#"><span class="icon vkontakte-framed"></span></a>
      <a href="#"><span class="icon instagram-framed"></span></a>
      <a href="#"><span class="icon github-framed"></span></a>
    </div>
  </div>
</div>
</template>

<style scoped>
.glass-card {
  position: relative;
  overflow: hidden;
  width: 280px;
  height: 400px;
  margin: 30px;

  justify-content: center;
  align-items: center;

  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  
  background-color: rgba(255, 255, 266, 0.1);

  backdrop-filter: blur(5px);
}

.glass-card-content {
  display: grid;
  height: 100%;
  padding: 20px;
}

.socials {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
}

.socials a {
  display: inherit;
}

.icon {
  color: white;
  font-size: 40px;
  user-select: none;
  transition: .1s ease;
}

.icon:hover {
  margin-top: -5px;
  box-shadow: 0 45px 20px 50px #22222220;
}

.icon.telegram-framed:hover {
  color: #50A1DC;
  text-shadow: 0 45px 5px #50A1DCA2;
}

.icon.vkontakte-framed:hover {
  color: #3375F6;
  text-shadow: 0 45px 5px #3375F6A2;
}

.icon.instagram-framed:hover {
  background: linear-gradient(#7941CB, #F54F52, #FFD454);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 45px 5px #F54F52A2;
}

.icon.github-framed:hover {
  color: #222222;
  text-shadow: 0 45px 5px #222222A2;
}
</style>