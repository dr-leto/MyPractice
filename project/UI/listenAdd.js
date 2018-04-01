;var listenerAdd =(function(){
    var newPost;
    document.getElementById("buttonAddPhotoPost").addEventListener("click", addPhotoPost);
    document.getElementById("buttonLoadPhoto").addEventListener("click",loadPhoto);
    document.getElementById("addNewHashtag").addEventListener("click", addNewHashtag);
    document.getElementById("buttonSubmitPhotoPost").addEventListener("click", submitPhotoPost);

    function addPhotoPost(){
        newPost = {
            id: (control.posts.length + 1).toString(),
            description: "",
            date: new Date(),
            author: window.userName,
            photoLink: undefined,
            hashtags : [],
            likes: []
        };
        document.getElementById("modalWindow").style.display = "block";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("newPostAuthor").innerText = window.userName;
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

    function submitPhotoPost(){
        if (!control.validatePhotoPost(newPost)){
            document.getElementById("modalWindow").style.display = "none";
            document.getElementById("body").style.overflow = "auto";
            window.location = "error.html";
        }
        else{
            newPost.description = document.getElementById("newDescription").value;
            module.deletePhotoPost(newPost.id);
            var post = Object.assign({},newPost);
            post.id = (control.posts.length + 1).toString();
            module.addPhotoPost(post);
            document.getElementById("modalWindow").style.display = "none";
            document.getElementById("body").style.overflow = "auto";
        }
    }

    function editPost(postConfig){
        newPost = postConfig;
    }

    return{
        editPost: editPost
    }
}());