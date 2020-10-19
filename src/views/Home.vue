<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a class="flex items-center text-gray-800 hover:text-indigo-600" href="/">
          <img src="../assets/logo.png" alt="" width="250" />
        </a>
        <div class="flex items-center -mx-2 uppercase">
          <router-link to="/" class="flex items-center px-12 text-gray-800 hover:text-indigo-600">Home</router-link>
          <router-link to="/about" class="flex items-center text-gray-800 hover:text-indigo-600">About us</router-link>
          <!-- <a class="flex items-center mx-2 text-gray-800 hover:text-indigo-600" href="#">
            <svg class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a> -->
          <!-- <a class="flex items-center mx-2 text-gray-800 hover:text-indigo-600" href="#">
            About us
            <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/>
            </svg>
          </a> -->
          <!-- <a class="flex items-center mx-2 text-gray-800 hover:text-indigo-600" href="#">
            <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'/>
            </svg>
          </a> -->
        </div>
      </div>
    </div>
  </header>
  <div class="hero container relative mx-auto">
    <div class="flex items-center justify-between mx-auto px-6 py-4">
      <div>
        <p class="mb-4 text-lg text-white">
          Vue.js Portugal
        </p>
        <h2 class="text-4xl leading-10 font-bold text-white sm:text-4xl sm:leading-none md:text-6xl lg:text-4xl xl:text-6xl">
          Developer Community
        </h2>
      </div>
      <img src="../assets/logo-white.png" alt="logo white" class="object-cover" />
    </div>
  </div>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:col-gap-8">
      <div>
        <img src="../assets/code-icon.png" alt="Code Icon">
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2 p-12 px-20">
        <p class="mt-2 text-3xl leading-9 font-extrabold text-gray-900">What is VueJs Portugal?</p>
        <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
  <div class="container relative mx-auto">
    <div class="flex items-center justify-between mx-auto px-6 py-4">
      <div class="w-1/2">
        <img src="../assets/banner.png" alt="Banner Join Us">
      </div>
      <div class="w-1/2">
        <div class="banner-text">
          <p class="mb-4 text-lg text-white">
            Vue.js Portugal
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Home',
  // setup() {
  //   const myinfo = computed(() => state.myinfo)
  //   return {
  //     myinfo
  //   }
  // }
})
</script>

<style>
.hero {
  background: url("../assets/hero.png") no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgb(137, 194, 127, 0.8)
}
.banner-text {
  background-color: #35495e;
  background-size: cover;
}
</style>
