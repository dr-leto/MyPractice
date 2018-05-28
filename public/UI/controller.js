;var control = (function () {
  var user = 'null'
  var photoPosts = [
    {
      active: true,
      id: '1',
      description: 'My usual morning wood',
      date: '2018-02-07',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear1.jpg',
      hashtags: ['#travelling', '#lovenature', '#niceweather'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '2',
      description: 'I want you to for US army',
      date: '2018-02-09',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear2.jpg',
      hashtags: ['#challenge', '#brave', '#honor'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '3',
      description: 'Me and ma nigga',
      date: '2018-02-04',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear3.jpg',
      hashtags: ['#BFF', '#goodtimetogether', '#hapiness'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '4',
      description: "You're not you when you are hungry",
      date: '2018-02-10',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear4.jpg',
      hashtags: ['#youmyheart', '#mmmmsotasty', '#delicious'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '5',
      description: 'Follow me',
      date: '2018-02-21',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear5.jpg',
      hashtags: ['#flying', '#socool', '#airmax'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '6',
      description: 'My usual morning wood',
      date: '2018-02-05',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear1.jpg',
      hashtags: ['#travelling', '#lovenature', '#niceweather'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '7',
      description: 'I want you to for US army',
      date: '2018-02-08',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear2.jpg',
      hashtags: ['#challenge', '#brave', '#honor'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '8',
      description: 'Me and ma nigga',
      date: '2018-02-04',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear3.jpg',
      hashtags: ['#BFF', '#goodtimetogether', '#hapiness'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '9',
      description: "You're not you when you are hungry",
      date: '2018-02-15',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear4.jpg',
      hashtags: ['#youmyheart', '#mmmmsotasty', '#delicious'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '10',
      description: 'Follow me',
      date: '2018-02-11',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear5.jpg',
      hashtags: ['#flying', '#socool', '#airmax'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '11',
      description: 'My usual morning wood',
      date: '2018-02-12',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear1.jpg',
      hashtags: ['#travelling', '#lovenature', '#niceweather'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '12',
      description: 'I want you to for US army',
      date: '2018-02-10',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear2.jpg',
      hashtags: ['#challenge', '#brave', '#honor'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '13',
      description: 'Me and ma nigga',
      date: '2018-02-09',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear3.jpg',
      hashtags: ['#BFF', '#goodtimetogether', '#hapiness'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '14',
      description: "You're not you when you are hungry",
      date: '2018-02-08',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear4.jpg',
      hashtags: ['#youmyheart', '#mmmmsotasty', '#delicious'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '15',
      description: 'Follow me',
      date: '2018-02-07',
      author: 'Bear_Grylls',
      photoLink: 'images/Bear5.jpg',
      hashtags: ['#flying', '#socool', '#airmax'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '16',
      description: 'My car',
      date: '2018-01-30',
      author: 'Jeremy_Clarkson',
      photoLink: 'images/Jeremy1.jpg',
      hashtags: ['#BFF', '#goodtimetogether', '#hapiness'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '17',
      description: 'My friend',
      date: '2018-01-13',
      author: 'Jeremy_Clarkson',
      photoLink: 'images/Jeremy2.jpg',
      hashtags: ['#BFF', '#goodtimetogether', '#hapiness'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '18',
      description: 'Going somewhere',
      date: '2018-01-11',
      author: 'Jeremy_Clarkson',
      photoLink: 'images/Jeremy3.jpg',
      hashtags: ['#BFF', '#goodtimetogether', '#hapiness'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '19',
      description: 'A flight to Russia',
      date: '2018-01-10',
      author: 'Jeremy_Clarkson',
      photoLink: 'images/Jeremy4.jpg',
      hashtags: ['#BFF', '#goodtimetogether', '#hapiness'],
      likes: ['Dmitry_Kurch', 'Bear_Grylls', 'Jeremy_Clarkson']
    },
    {
      active: true,
      id: '20',
      description: 'Australia coast',
      date: '2018-01-07',
      author: 'Jeremy_Clarkson',
      photoLink: 'images/Jeremy5.jpg',
      hashtags: ['#BFF', '#goodtimetogether', '#hapiness'],
      likes: ['Bear_Grylls', 'Jeremy_Clarkson']
    }
  ]

  if (!localStorage.getItem('photoPosts')) {
    localStorage.clear()
    localStorage.setItem('photoPosts', JSON.stringify(photoPosts))
    localStorage.setItem('user', JSON.stringify(user))
  }
  var posts = JSON.parse(localStorage.getItem('photoPosts'))
  var userName = JSON.parse(localStorage.getItem('user'))

  function saveChanges () {
    localStorage.setItem('photoPosts', JSON.stringify(posts))
  }

  function getPhotoPost (id) {
    return posts.find(function (obj) {
      return obj.id === id
    })
  }

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
    return ((post.photoLink != '') && (typeof post.photoLink === 'string'))
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

  function addPhotoPost (post) {
    if (validatePhotoPost(post)) {
      post.active = true
      posts.push(post)
      saveChanges()
      return true
    }
    return false
  }

  function editPhotoPost (id, post) {
    if (validatePhotoPost(getPhotoPost(id)) && post != null) {
      var myPost = getPhotoPost(id)
      if (checkDescription(post)) {
        myPost.description = post.description
      }
      if (checkPhotoLink(post)) {
        myPost.photoLink = post.photoLink
      }
      if (checkHashtags(post)) {
        myPost.hashtags = post.hashtags
      }
      if (checkLikes(post)) {
        myPost.likes = post.likes
      }
      saveChanges()
      return true
    }
    return false
  }

  function removePhotoPost (id) {
    var post = getPhotoPost(id)
    if (post !== undefined && post !== null) {
      post.active = false
      saveChanges()
      return true
    }
    return false
  }

  function getPhotoPosts (skip, top, filter) {
    var finalPosts = []
    skip = skip || 0
    top = top || 10
    if (filter === undefined) {
      posts.sort(comporator)

      return posts.filter(function (post) {
        return post.active
      }).slice(skip, top)
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
          return ((date.getMonth() === filter.date.getMonth()) && (date.getDate() === filter.date.getDate()))
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

      return newPosts.filter(function (post) {
        return post.active
      }).slice(skip, top)
    }
  }

  function getAuthors () {
    var authors = new Set()
    for (var p of posts) {
      authors.add(p.author)
    }
    return authors
  }
  function getHashtags () {
    var hashtags = new Set()
    for (var p of posts) {
      for (var h of p.hashtags) {
        hashtags.add(h)
      }
    }
    return hashtags
  }

  function likePhotoPost (id, user) {
    if (user !== 'null') {
      var post = getPhotoPost(id)
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
      saveChanges()
    }
  }

  function addHashtag (id, hashtag) {
    var post = getPhotoPost(id)
    post.hashtags.push(hashtag)
    saveChanges()
  }
  function deleteHashtag (id) {
    var post = getPhotoPost(id)
    if (post.hashtags.length !== 0) {
      post.hashtags.splice(post.hashtags.length - 1, 1)
    }
    saveChanges()
  }

  return {
    getPhotoPost: getPhotoPost,
    validatePhotoPost: validatePhotoPost,
    addPhotoPost: addPhotoPost,
    editPhotoPost: editPhotoPost,
    removePhotoPost: removePhotoPost,
    getPhotoPosts: getPhotoPosts,
    getAuthors: getAuthors,
    likePhotoPost: likePhotoPost,
    getHashtags: getHashtags,
    addHashtag: addHashtag,
    deleteHashtag: deleteHashtag,
    saveChanges: saveChanges,
    username: userName,
    posts: posts
  }
}())

// control.posts.json = JSON.parse(localStorage.getItem("photoPosts"));
control.userName = JSON.parse(localStorage.getItem('user'))
