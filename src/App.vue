<template>
  <div id="app">
    <span class="text">ABCDEFG</span>
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<style scoped>
  .text {
    font-family: 'Days One';
    font-size: 20px;
    color:orange;
  }
</style>
