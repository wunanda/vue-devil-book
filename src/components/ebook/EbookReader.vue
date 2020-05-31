<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import Epub from 'epubjs'
  global.ePub = Epub
  export default {
    mixins: [ebookMixin],
    methods: {
      initEpub () {
        const url = 'http://192.168.0.111:8081/epub/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.setCurrentBook(this.book)
        this.redintion = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
          // method: 'default' // 微信兼容性 但是加上的话web解析不出带图片的
        })
        this.redintion.display()
        // 手指触摸事件
        this.redintion.on('touchstart', event => {
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        // 离开手指
        this.redintion.on('touchend', event => {
          const offsetX = event.changedTouches[0].clientX - this.touchStartX
          const time = event.timeStamp - this.touchStartTime
          if (time < 500 && offsetX > 40) {
            this.prevPage()
          } else if (time < 500 && offsetX < -40) {
            this.nextPage()
          } else {
            this.toggleTitleAndMenu()
          }
          // event.preventDefault()
          event.stopPropagation()
        })
      },
      prevPage () {
        if (this.redintion) {
          this.redintion.prev()
          this.hideTitleAndMenu()
        }
      },
      nextPage () {
        if (this.redintion) {
          this.redintion.next()
          this.hideTitleAndMenu()
        }
      },
      // 点击反选标题栏和底部导航栏
      toggleTitleAndMenu () {
        if (this.menuVisible) {
          this.setSettingVisible(-1)
        }
          this.setMenuVisible(!this.menuVisible)

      },
      // 隐藏反选标题栏和底部导航栏
      hideTitleAndMenu () {
        this.setMenuVisible(false)
        this.setSettingVisible(-1)
      }
    },
    mounted () {
      const fileName = this.$route.params.fileName.split('|').join('/')
      this.setFileName(fileName).then(() => {
        this.initEpub()
      })
    }
  }
</script>

<style lang="scss" ref="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
</style>
