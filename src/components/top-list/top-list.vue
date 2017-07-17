<template>
  <transition name="slide">
    <music-list :title="title" :bgImage="bgImage" :songs="songs" :rank="rank"></music-list>
  </transition>
</template>
<script>
import MusicList from 'components/music-list/music-list'
import { getTopListDetail } from 'api/rank'
import { createSong } from 'common/utils/song'
import { mapGetters } from 'vuex'
export default {
  components: {
    MusicList
  },
  data() {
    return {
      songs: [],
      rank: true
    }
  },
  computed: {
    ...mapGetters([
      'topList'
    ]),
    title() {
      return this.topList.topTitle
    },
    bgImage() {
      if (this.songs.length) {
        return this.songs[0].image
      }
      return ''
    }
  },
  created() {
    this._getTopListDetail()
  },
  methods: {
    _getTopListDetail() {
      if (!this.topList.id) {
        this.$router.back()
        return
      }
      getTopListDetail(this.topList.id).then((res) => {
        this.songs = this._normalizeSongs(res.songlist)
      }).catch((err) => {
        console.log(err)
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        const musicData = item.data
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
</script>
<style lang="stylus">
.slide-enter-active, .slide-leave-active
  transition: all 0.3s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>