var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var app = express()
var apiRouter = express.Router()

//  推荐页面，要轮播数据
apiRouter.get('/getRecommend', function (req, res) {
  var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  axios.get(url, {
    headers: {
      origin: 'https://m.y.qq.com',
      referer: 'https://m.y.qq.com/'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.log(error)
  })
})

//  歌单页面
apiRouter.get('/getToplist', function (req, res) {
  var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  axios.get(url, {
    headers: {
      origin: 'https://m.y.qq.com',
      referer: 'https://m.y.qq.com/'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.log(error)
  })
})

//  排行榜

apiRouter.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      host: 'c.y.qq.com',
      referer: 'https://y.qq.com/portal/playlist.html'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.log(error)
  })
})

//  排行榜详情

apiRouter.get('/getTopListDetail', function (req, res) {
  var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  axios.get(url, {
    headers: {
      origin: 'https://y.qq.com',
      referer: 'https://y.qq.com/w/toplist.html?ADTAG=myqq&from=myqq&channel=10007100&id=4&type=top'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.log(error)
  })
})

//  歌词
apiRouter.get('/getLyric', function (req, res) {
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
  axios.get(url, {
    headers: {
      host: 'c.y.qq.com',
      referer: 'https://y.qq.com/portal/player.html'
    },
    params: req.query
  }).then((response) => {
    var ret = response.data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((error) => {
    console.log(error)
  })
})

app.use('/api', apiRouter)
app.use(express.static('./dist'))

var port = process.env.PORT || config.build.port

module.exports = app.listen(port, function(error) {
  if (error) {
    console.log(error)
  }
  console.log('Listening at http://localhost:' + port + '\n')
})