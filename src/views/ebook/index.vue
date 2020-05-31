<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EbookReader'
  import EbookTitle from '../../components/ebook/EbookTitle'
  import EbookMenu from '../../components/ebook/EbooMenu'

  export default {
    components: {
      EbookReader,
      EbookTitle,
      EbookMenu
    }
  }
</script>

<style lang="scss" ref="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
</style>
