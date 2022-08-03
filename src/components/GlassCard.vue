<script>
import ProfileIcon from '@/components/ProfileIcon'

import tilt from 'vanilla-tilt'

export default {
  name: 'glass-card',
  components: {
    ProfileIcon
  },
  props: {

  },
  data: () => ({
    imageUrl: require('@/assets/img/profile.png')
  }),
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
    <div class="description headline">
      <profile-icon id="visit-card-icon" :url="imageUrl" :size="128"/>
      <h2 id="visit-card-name">Alexander Shakailo</h2>
      <p id="visit-card-postion">fullstack developer</p>
    </div>
    <div class="description contacts">
      <a id="visit-card-email" href="mailto:emberati@gmail.com">emberati@gmail.com</a>
      <a id="visit-card-phone" href="tel:79805323361">+7 (980) 532-33 61</a>
      <p id="visit-card-netname">@emberati</p>
    </div>
    <div class="socials">
      <a href="#"><span class="icon telegram filled"></span></a>
      <a href="#"><span class="icon vkontakte filled"></span></a>
      <a href="#"><span class="icon instagram filled"></span></a>
      <a href="#"><span class="icon github filled"></span></a>
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

  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  
  background-color: rgba(255, 255, 266, 0.1);

  backdrop-filter: blur(5px);
}

.glass-card-content {
  display: grid;
  height: 100%;
  padding: 30px;
}

.description * {
  text-align: center;
  color: white;
  font-size: 16px;
  margin: 0;
}

.description.contacts {
  margin-top: auto;
  display: inherit;
}

#visit-card-icon {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;

  user-select: none;
  -webkit-user-drag: none;
}

#visit-card-name {
  font-size: 20px;
  margin: 0;
  padding: 0;
}

#visit-card-netname {
  font-weight: 700;
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
  -webkit-user-drag: none;
  transition: .1s ease;
}

.icon:hover {
  margin-top: -5px;
  box-shadow: 0 45px 20px 50px #22222220;
}

.icon.telegram:hover {
  color: #50A1DC;
  text-shadow: 0 45px 5px #50A1DCA2;
}

.icon.vkontakte:hover {
  color: #3375F6;
  text-shadow: 0 45px 5px #3375F6A2;
}

.icon.instagram:hover {
  background: linear-gradient(#7941CB, #F54F52, #FFD454);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 45px 5px #F54F52A2;
}

.icon.github:hover {
  color: #222222;
  text-shadow: 0 45px 5px #222222A2;
}
</style>