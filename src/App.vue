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

<script>
  import { mapGetters } from 'vuex'
  const getters = {
    a: () => 1,
    b: () => 2,
    c: () => 3
  }
  function fn (keys) {
    const data = {}
    keys.forEach(key => {
      if (getters.hasOwnProperty(key)) {
        data[key] = getters[key]
      }
    })
    return data
  }
  export default {
    computed: {
      ...mapGetters(['test']),
      ...fn(['a', 'b'])
    },
    mounted () {
      this.$store.dispatch('setTest', 10).then(() => {
        console.log(this.test)
        console.log(this.a,this.b,this.c)
      })
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize // 设置上限50px
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style lang="scss" scoped>
  @import "./assets/styles/global";
  .text {
    font-family: 'Days One';
    font-size: px2rem(20);
    color:orange;
  }
</style>
