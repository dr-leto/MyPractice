; var listenerMain = (function(){

    document.getElementById("displayFilter").addEventListener("click",displayFilter);
    document.getElementById("buttonSubmitFilter").addEventListener("click", filterBy);
    document.getElementById("buttonLogin").addEventListener("click", login);
    document.getElementById("buttonLogout").addEventListener("click", logout);
    document.getElementById("divMain").addEventListener("click", changePost);

    function displayFilter() {
        document.getElementById("filter").style.display = "block";
    }
    function filterBy(){
        var date, hashtag, name;
        if (document.getElementById("checkHashtagFilter").checked) {
            hashtag = document.getElementById("hashtagFilter").value;
        }
        if (document.getElementById("checkDateFilter").checked){
            date = new Date( document.getElementById("dateFilter").value);
        }
        if (document.getElementById("checkNameFilter").checked){
            name = document.getElementById("nameFilter").value;
        }
        if (name === undefined && date === undefined && hashtag === undefined){
            module.showPhotoPosts();
        }
        else {
            module.showPhotoPosts(0, 10, {
                author: name,
                date: date,
                hashtag: hashtag
            });
        }
        document.getElementById("filter").style.display = "none";
    }
    function login(){
        window.location = "login.html";
    }
    function logout(){
        if (window.confirm("Are you sure to log out? ")) {
            window.userName = undefined;
            module.update();
        }
    }

    function changePost(){
        var id;
        var e = window.event;
        var target = e.target;
        switch(target.id){
            case "buttonLike":{
                id = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                module.likePhotoPost(id);
                break;
            }
            case "iconLike":{
                id = target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                module.likePhotoPost(id);
                break;
            }
            case "iconNoLike":{
                id = target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                module.likePhotoPost(id);
                break;
            }
            case "buttonEdit":{
                id = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                var post = control.getPhotoPost(id);
                document.getElementById("modalWindow").style.display = "block";
                document.getElementById("body").style.overflow = "hidden";
                document.getElementById("newPostAuthor").innerText = post.author;
                document.getElementById("newDescription").value = post.description;
                document.getElementById("newPhotoURL").value = post.photoLink;
                document.getElementById("newImage").src = post.photoLink;
                for (var i=0;i<post.hashtags.length;i++){
                    document.getElementById("newHashtags").innerText += post.hashtags[i] + " ";
                }
                break;
            }
            case "buttonDelete":{
                id = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                if (window.confirm("Are you sure to delete post? ")) {
                    module.deletePhotoPost(id);
                }
                break;
            }
        }
        if (target.parentNode.id==="iconLike"){
            id = target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
            module.likePhotoPost(id);
        }
    }
}());
