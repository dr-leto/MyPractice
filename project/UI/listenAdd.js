;var listenerAdd =(function(){
    var newPost;
    var postConfig;
    document.getElementById("buttonAddPhotoPost").addEventListener("click", addPhotoPost);
    document.getElementById("buttonLoadPhoto").addEventListener("click",loadPhoto);
    document.getElementById("addNewHashtag").addEventListener("click", addNewHashtag);
    document.getElementById("deleteNewHashtag").addEventListener("click", deleteNewHashtag);
    document.getElementById("buttonSubmitPhotoPost").addEventListener("click", submitPhotoPost);

    function addPhotoPost(){
        newPost = {
            active: true,
            id: (control.posts.length + 1).toString(),
            description: "",
            date: new Date(),
            author: control.userName,
            photoLink: undefined,
            hashtags : [],
            likes: []
        };
        document.getElementById("modalWindow").style.display = "block";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("newPostAuthor").innerText = control.userName;
        document.getElementById("newDescription").value = "Add description here...";
        document.getElementById("newHashtags").innerText = "";
        document.getElementById("newPhotoURL").value = "URL";
        document.getElementById("newImage").src = "../images/Drag&drop.jpg";
    }
    function loadPhoto(){
        var URL = document.getElementById("newPhotoURL").value;
        document.getElementById("newImage").src = URL;
        newPost.photoLink = URL;
    }
    function addNewHashtag(){
        var hashtag = document.getElementById("newHashtag").value;
        document.getElementById("newHashtag").value = "#";
        newPost.hashtags.push(hashtag);
        document.getElementById("newHashtags").innerText += " " + hashtag;
    }
    function deleteNewHashtag(){///////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        document.getElementById("newHashtags").innerText ="";
        newPost.hashtags.splice(newPost.hashtags.length-1,1);
        for (var i=0;i<newPost.hashtags.length;i++){
            document.getElementById("newHashtags").innerText += " " + newPost.hashtags[i];
        }
    }

    function submitPhotoPost(){
        if (!control.validatePhotoPost(newPost)){
            document.getElementById("modalWindow").style.display = "none";
            document.getElementById("body").style.overflow = "auto";
            window.location = "error.html";
        }
        else{
            newPost.description = document.getElementById("newDescription").value;
            module.deletePhotoPost(newPost.id, postConfig);
            var post = Object.assign({},newPost);
            post.id = (control.posts.length + 1).toString();
            module.addPhotoPost(post, postConfig);
            document.getElementById("modalWindow").style.display = "none";
            document.getElementById("body").style.overflow = "auto";
        }
    }

    function editPost(post){
        newPost = post;
    }

    function setPostConfig(postC){
        postConfig = postC;
    }

    return{
        editPost: editPost,
        setPostConfig: setPostConfig
    }
}());