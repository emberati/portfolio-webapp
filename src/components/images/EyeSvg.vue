<script>
export default {
  name: 'eye-svg',
}
</script>
<template>
<svg width="103" height="54" viewBox="0 0 103 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="eye">
<path id="pupil" d="M64 35.9999C64 43.1796 58.1797 48.9999 51 48.9999C43.8203 48.9999 38 43.1796 38 35.9999C38 28.8202 43.8203 22.9999 51 22.9999C58.1797 22.9999 64 28.8202 64 35.9999Z" fill="white"/>
<path id="eye-bow" fill-rule="evenodd" clip-rule="evenodd" d="M51.4999 22.9999C63.3745 22.9999 74.7661 27.6735 83.2053 35.9999C74.7661 44.3263 63.3745 48.9999 51.4999 48.9999C39.6254 48.9999 28.2337 44.3263 19.7946 35.9999C28.2337 27.6735 39.6254 22.9999 51.4999 22.9999ZM12.9999 35.9999C13.9679 34.8403 14.9918 33.7204 16.07 32.6445C25.4666 23.2677 38.2111 17.9999 51.4999 17.9999C64.7887 17.9999 77.5333 23.2677 86.9299 32.6445C88.008 33.7204 89.032 34.8403 89.9999 35.9999C89.032 37.1595 88.008 38.2793 86.9299 39.3552C77.5333 48.732 64.7887 53.9999 51.4999 53.9999C38.2111 53.9999 25.4666 48.732 16.07 39.3552C14.9918 38.2793 13.9679 37.1595 12.9999 35.9999Z" fill="white"/>
<g>
  <rect id="eyelash5" x="98.8009" y="18.3767" width="5" height="10" transform="rotate(41.24 98.8009 18.3767)" fill="white"/>
<rect id="eyelash4" x="76.3979" y="4.41187" width="5" height="10" transform="rotate(25 76.3979 4.41187)" fill="white"/>
<rect id="eyelash3" x="48.5" width="5" height="10" fill="white"/>
<rect id="eyelash2" x="21.0703" y="6.5249" width="5" height="10" transform="rotate(-25 21.0703 6.5249)" fill="white"/>
<rect id="eyelash1" x="0.517273" y="21.761" width="5" height="10" transform="rotate(-41.24 0.517273 21.761)" fill="white"/>
</g>
</g>
</svg>
</template>
<style scoped>
svg {
  shape-rendering:geometricPrecision;
  width: calc(103px * 1);
  height: auto;
  overflow: initial;
}

svg [id^=eyelash] {
  transition: 1s ease;
}

svg:hover [id^=eyelash] {
  width: 2000%;
  x: calc(-1000% + 60px);
  height: 5px;
}

#pupil {
  /* transform: translateX(0%); */
  animation: seeing 5s ease 1s infinite;
}

svg g {
  transform-box: fill-box;
}

@keyframes seeing {
  0%, 100%, 30%, 70% {
    transform: translateX(0%);
  }

  40% {
    transform: translateX(-10%);
  }

  60% {
    transform: translateX(10%);
  }
}
</style>