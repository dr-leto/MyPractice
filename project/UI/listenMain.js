; var listenerMain = (function(){
    var postConfig;
    var postNumber = 10;
    document.getElementById("displayFilter").addEventListener("click",displayFilter);
    document.getElementById("buttonSubmitFilter").addEventListener("click", filterBy);
    document.getElementById("buttonLogin").addEventListener("click", login);
    document.getElementById("buttonLogout").addEventListener("click", logout);
    document.getElementById("divMain").addEventListener("click", changePost);
    document.getElementById("buttonLoadMore").addEventListener("click", loadMorePosts);

    function displayFilter() {
        document.getElementById("filter").style.display = "block";
    }
    function filterBy(){
        postConfig = {
            hashtag:undefined,
            author:undefined,
            date:undefined
        };
        if (document.getElementById("checkHashtagFilter").checked) {
            postConfig.hashtag = document.getElementById("hashtagFilter").value;
        }
        if (document.getElementById("checkDateFilter").checked){
            postConfig.date = new Date( document.getElementById("dateFilter").value);
        }
        if (document.getElementById("checkNameFilter").checked){
            postConfig.author = document.getElementById("nameFilter").value;
        }
        if (postConfig.author === undefined && postConfig.date === undefined && postConfig.hashtag === undefined){
            module.showPhotoPosts();
        }
        else {
            module.showPhotoPosts(0, postNumber, postConfig);
            listenerAdd.setPostConfig(postConfig);
        }
        document.getElementById("filter").style.display = "none";
    }
    function login(){
        window.location = "login.html";
    }
    function logout(){
        if (window.confirm("Are you sure to log out? ")) {
            var user = "null";
            localStorage.setItem("user",JSON.stringify(user));
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
                module.likePhotoPost(id, postConfig);
                break;
            }
            case "iconLike":{
                id = target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                module.likePhotoPost(id, postConfig);
                break;
            }
            case "iconNoLike":{
                id = target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                module.likePhotoPost(id, postConfig);
                break;
            }
            case "buttonEdit":{
                id = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                var post = control.getPhotoPost(id);
                editPost(post);
                break;
            }
            case "buttonDelete":{
                id = target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                if (window.confirm("Are you sure to delete post? ")) {
                    module.deletePhotoPost(id, postConfig);
                }
                break;
            }
        }
        if (target.parentNode.id==="iconLike"){
            id = target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
            module.likePhotoPost(id, postConfig);
        }
    }

    function editPost(post){
        var newPost;
        document.getElementById("modalWindow").style.display = "block";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("newPostAuthor").innerText = post.author;
        document.getElementById("newDescription").value = post.description;
        document.getElementById("newHashtags").innerText = "";
        for (var i = 0;i<post.hashtags.length;i++) {
            document.getElementById("newHashtags").innerText += post.hashtags[i] + " ";
        }
        document.getElementById("newPhotoURL").value =post.photoLink;
        document.getElementById("newImage").src = post.photoLink;
        listenerAdd.editPost(post);
        listenerAdd.setPostConfig(postConfig);
    }

    function loadMorePosts(){
        postNumber +=10;
        module.showPhotoPosts(0,postNumber,postConfig);
    }

}());
