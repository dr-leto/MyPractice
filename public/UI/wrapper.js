;var module = (function () {
  var posts = control.getPhotoPosts()
  var postList = document.querySelector('.divMain')

  function createPhotoPost (postConfig) {
    var hit = false
    for (var like of postConfig.likes) {
      if (like === control.userName) {
        document.getElementById('iconLike').style.display = 'block'
        document.getElementById('iconNoLike').style.display = 'none'
        hit = true
        break
      }
    }
    if (!hit) {
      document.getElementById('iconLike').style.display = 'none'
      document.getElementById('iconNoLike').style.display = 'block'
    }

    var post = document.getElementById('templatePost').cloneNode(true)
    post.className = 'none'
    post.id = postConfig.id

    post.querySelector('.divNamePost').innerText = postConfig.author
    post.querySelector('.divDescriptionPost').innerText = postConfig.description
    var date = new Date(postConfig.date)
    post.querySelector('.divDatePost').innerText = date.toDateString()
    post.querySelector('.image').src = postConfig.photoLink
    post.querySelector('.numberLike').innerText = postConfig.likes.length
    var hashtags = ''
    for (var i = 0; i < postConfig.hashtags.length; i++) {
      hashtags += postConfig.hashtags[i] + ' '
    }
    post.querySelector('.divHashtags').innerText = hashtags

    if (postConfig.author === control.userName) {
      post.querySelector('.buttonEdit').style.display = 'block'
      post.querySelector('.buttonDelete').style.display = 'block'
    }

    postList.appendChild(post)
    return post
  }

  function update () {
    control.userName = JSON.parse(localStorage.getItem('user'))
    if (control.userName !== 'null') {
      document.getElementById('name').innerText = control.userName
      document.getElementById('buttonLogout').style.display = 'block'
      document.getElementById('buttonLogin').style.display = 'none'
      document.getElementById('buttonAddPhotoPost').style.display = 'block'
      document.getElementById('iconAddPhoto').style.display = 'block'
    } else {
      document.getElementById('name').innerText = ''
      document.getElementById('buttonLogout').style.display = 'none'
      document.getElementById('buttonLogin').style.display = 'block'
      document.getElementById('buttonAddPhotoPost').style.display = 'none'
      document.getElementById('iconAddPhoto').style.display = 'none'
    }

    var authors = control.getAuthors()
    var datalistNames = document.getElementById('optionNames')
    while (datalistNames.firstChild) {
      datalistNames.removeChild(datalistNames.firstChild)
    }
    for (var author of authors) {
      var optionNames = document.createElement('option')
      optionNames.value = author
      datalistNames.appendChild(optionNames)
    }

    var hashtags = control.getHashtags()
    var datalistHashtags = document.getElementById('optionHashtags')
    while (datalistHashtags.firstChild) {
      datalistHashtags.removeChild(datalistHashtags.firstChild)
    }
    for (var hashtag of hashtags) {
      var optionHashtags = document.createElement('option')
      optionHashtags.value = hashtag
      datalistHashtags.appendChild(optionHashtags)
    }

    while (postList.firstChild) {
      postList.removeChild(postList.firstChild)
    }
    for (var p of posts) {
      createPhotoPost(p)
    }
  }

  function showPhotoPosts (skip, top, filter) {
    var checkPosts = control.getPhotoPosts(skip, 100, filter)
    posts = control.getPhotoPosts(skip, top, filter)
    if (top >= checkPosts.length) {
      document.getElementById('buttonLoadMore').style = 'display:none'
    } else {
      document.getElementById('buttonLoadMore').style = 'display:block'
    }

    update()
  }

  function addPhotoPost (post, postConfig) {
    control.addPhotoPost(post)
    posts = control.getPhotoPosts(0, 10, postConfig)
    update()
  }

  function deletePhotoPost (id, postConfig, postNumber) {
    control.removePhotoPost(id)
    posts = control.getPhotoPosts(0, postNumber, postConfig)
    update()
  }

  function editPhotoPost (id, post) {
    control.editPhotoPost(id, post)
    posts = control.getPhotoPosts()
    update()
  }

  function likePhotoPost (id, postConfig, postNumber) {
    control.likePhotoPost(id, control.userName)
    posts = control.getPhotoPosts(0, postNumber, postConfig)
    update()
  }

  function addHashtag (id, hashtag) {
    control.addHashtag(id, hashtag)
    posts = control.getPhotoPosts()
    update()
  }

  function deleteHashtag (id) {
    control.deleteHashtag(id)
    posts = control.getPhotoPosts()
    update()
  }

  return {
    showPhotoPosts: showPhotoPosts,
    addPhotoPost: addPhotoPost,
    deletePhotoPost: deletePhotoPost,
    editPhotoPost: editPhotoPost,
    likePhotoPost: likePhotoPost,
    update: update
  }
}())

module.showPhotoPosts()
