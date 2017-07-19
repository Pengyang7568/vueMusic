import {playMode} from 'common/utils/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/utils/cache'

const state = {
  //  歌手
  singer: {},
  //  歌单
  disc: {},
  //  排行榜
  topList: [],
  //  播放状态
  playing: false,
  //  播放器是否全屏
  fullScreen: false,
  //  播放列表
  playList: [],
  //  顺序列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  //  当前播放歌曲的索引
  currentIndex: -1,
  //  搜索历史
  searchHistory: loadSearch(),
  //  播放历史
  playHistory: loadPlay(),
  //  收藏列表
  favoriteList: loadFavorite()
}

export default state