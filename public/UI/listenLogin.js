; var listenerLogin = (function () {
  document.getElementById('buttonSubmitLogin').addEventListener('click', submitLogin)

  function submitLogin () {
    var check = false
    var name = document.getElementById('userLogin').value
    var authors = control.getAuthors()
    for (var author of authors) {
      if (author === name) {
        window.location = 'index.html'
        localStorage.setItem('user', JSON.stringify(name))
        check = true
      }
    }
    if (!check) {
      window.alert('Login is incorrect')
    }
  }
}())
