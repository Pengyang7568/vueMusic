import {playMode} from 'common/utils/config'
const state = {
  singer: {},
  disc: {},
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
  currentIndex: -1
}

export default state