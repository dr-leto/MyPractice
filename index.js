var http = require('http')
var path = require('path')
var fs = require('fs')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var cookieParser = require('cookie-parser')
var session = require('express-session')
var passport = require('./passport')

app.use(cookieParser())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())
app.use('/static', express.static(path.join(__dirname, '/public')))
app.use('/image', express.static(path.join(__dirname, '/public/UI/images')))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/UI/index.html'))
})

app.get('/getPost', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var id = request.query.id
  var post = posts.find((obj) => {
    return id === obj.id
  })
  response.json(post)
})

app.post('/addPost', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var post = request.body
  console.log(post)
  if (validatePhotoPost(post)) {
    post.active = true
    posts.push(post)
    fs.writeFileSync(path.join(__dirname, 'server/data/posts.json'), JSON.stringify(posts))
    response.status(200).end()
  } else {
    response.status(543).write('Wrong post add format!')
    response.end()
  }
})

app.put('/editPost', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var id = request.query.id
  var post = posts.find((obj) => {
    return id === obj.id
  })
  var postConfig = request.body
  if (postConfig != null) {
    if (checkDescription(postConfig)) {
      post.description = postConfig.description
    }
    if (checkPhotoLink(postConfig)) {
      post.photoLink = postConfig.photoLink
    }
    if (checkHashtags(postConfig)) {
      post.hashtags = postConfig.hashtags
    }
    if (checkLikes(postConfig)) {
      post.likes = postConfig.likes
    }
    fs.writeFileSync(path.join(__dirname, 'server/data/posts.json'), JSON.stringify(posts))
    response.status(200).end()
  } else {
    response.status(543).write('Wrong postConfig format!')
    response.end()
  }
})

app.delete('/removePost', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var id = request.query.id
  var post = posts.find((obj) => {
    return id === obj.id
  })
  if (post !== undefined && post !== null) {
    post.active = false
    fs.writeFileSync(path.join(__dirname, 'server/data/posts.json'), JSON.stringify(posts))
    response.status(200).end()
  } else {
    response.status(543).write('No post found!!')
    response.end()
  }
})

app.post('/getPosts', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var filter = request.body

  var skip = 0
  var top = 10
  if (filter === undefined) {
    posts.sort(comporator)
    response.json(posts.filter(function (post) {
      return post.active
    }).slice(skip, top))
  } else {
    var newPosts = posts
    if (checkAuthor(filter)) {
      newPosts = newPosts.filter(function (obj) {
        return obj.author === filter.author
      })
    }
    if (checkDate(filter)) {
      newPosts = newPosts.filter(function (obj) {
        var date = new Date(obj.date)
        var filterDate = new Date(filter.date)
        return (date.getDate() === filterDate.getDate())
      })
    }
    var tempPosts = []
    if (typeof filter.hashtag === 'string') {
      for (var i = 0; i < newPosts.length; i++) {
        for (var j = 0; j < newPosts[i].hashtags.length; j++) {
          if (newPosts[i].hashtags[j] === filter.hashtag && newPosts[i].active) { tempPosts.push(newPosts[i]) }
        }
      }
      newPosts = tempPosts
    }
    newPosts.sort(comporator)

    response.json(newPosts.filter(function (post) {
      return post.active
    }).slice(skip, top))
  }
})

app.get('/getAuthors', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var authors = new Set()
  for (var p of posts) {
    authors.add(p.author)
  }
  var resp = []
  for (var author of authors) {
    resp.push(author)
  }
  response.json(resp)
})

app.get('/getHashtags', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var hashtags = new Set()
  for (var p of posts) {
    for (var h of p.hashtags) {
      hashtags.add(h)
    }
  }
  var resp = []
  for (var hashtag of hashtags) {
    resp.push(hashtag)
  }
  response.json(resp)
})

app.post('/likePost', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var id = request.query.id
  var user = request.query.user
  var post = posts.find((obj) => {
    return id === obj.id
  })
  if (user !== 'null') {
    var remove = false
    for (var i = 0; i < post.likes.length; i++) {
      if (user === post.likes[i]) {
        post.likes.splice(i, 1)
        remove = true
        break
      }
    }
    if (!remove) {
      post.likes.push(user)
    }
    fs.writeFileSync(path.join(__dirname, 'server/data/posts.json'), JSON.stringify(posts))
    response.status(200).end()
  }
  response.status(228).end()
})

app.post('/addHashtag', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var id = request.query.id
  var hashtag = request.query.hashtag
  var post = posts.find((obj) => {
    return id === obj.id
  })
  post.hashtags.push(hashtag)
  fs.writeFileSync(path.join(__dirname, 'server/data/posts.json'), JSON.stringify(posts))
  response.status(200).end()
})

app.delete('/deleteHashtag', (request, response) => {
  var posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'server/data/posts.json')))
  var id = request.query.id
  var post = posts.find((obj) => {
    return id === obj.id
  })
  if (post.hashtags.length !== 0) {
    post.hashtags.splice(post.hashtags.length - 1, 1)
  }
  fs.writeFileSync(path.join(__dirname, 'server/data/posts.json'), JSON.stringify(posts))
  response.status(200).end()
})

function comporator (obj1, obj2) {
  if (obj1.date > obj2.date) { return -1 }
  if (obj1.date < obj2.date) { return 1 }
  return 0
}

function checkId (post) {
  return (post.id !== undefined)
}
function checkDescription (post) {
  return (typeof post.description === 'string')
}
function checkDate (post) {
  return (post.date !== undefined)
}
function checkAuthor (post) {
  return (typeof post.author === 'string')
}
function checkPhotoLink (post) {
  return ((post.photoLink !== '') && (typeof post.photoLink === 'string'))
}
function checkHashtags (post) {
  return (post.hashtags instanceof Array)
}
function checkLikes (post) {
  return post.likes instanceof Array
}
function validatePhotoPost (post) {
  return checkId(post) &&
        checkDescription(post) &&
        checkDate(post) &&
        checkAuthor(post) &&
        checkPhotoLink(post) &&
        checkHashtags(post) &&
        checkLikes(post)
}

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user.username)
})

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(404).end()
}

app.get('/login', ensureAuthenticated, (req, res) => {
  res.send(req.user.username)
})

app.get('/logout', (req, res) => {
  req.logout()
  res.end()
})

app.listen(3000, 'localhost', function () {
  console.log('Server is working in port 3000!')
})
