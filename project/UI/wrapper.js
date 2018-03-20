;var module =(function(){

    var userName = "Dmitry_Kurch";
    var posts = control.getPhotoPosts();
    var postList = document.querySelector(".divMain");

    function createPhotoPost(postConfig){
        var hit = false;
        for (var like of postConfig.likes){
            if (like===userName) {
                document.getElementById("iconLike").style.display = "block";
                document.getElementById("iconNoLike").style.display = "none";
                hit = true;
                break;
            }
        }
        if (!hit){
            document.getElementById("iconLike").style.display = "none";
            document.getElementById("iconNoLike").style.display = "block";
        }

        var post = document.getElementById("templatePost").cloneNode(true);
        post.className = "none";
        post.id = null;

        post.querySelector(".divNamePost").innerText = postConfig.author;
        post.querySelector(".divDescriptionPost").innerText = postConfig.description;
        post.querySelector(".divDatePost").innerText = postConfig.date.toDateString();
        post.querySelector(".image").src = postConfig.photoLink;
        post.querySelector(".numberLike").innerText = postConfig.likes.length;
        var hashtags = "";
        for (var i=0;i<postConfig.hashtags.length;i++){
            hashtags += postConfig.hashtags[i] + " ";
        }
        post.querySelector(".divHashtags").innerText = hashtags;

        if (postConfig.author === userName){
            post.querySelector(".buttonEdit").style.display = "block";
            post.querySelector(".buttonDelete").style.display = "block";
        }

        postList.appendChild(post);
        return post;
    }

    function update(){
        if (userName!==null){
            document.getElementById("name").innerText = userName;
            document.getElementById("buttonLogout").style.display = "block";
            document.getElementById("buttonLogin").style.display = "none";
            document.getElementById("buttonAddPhoto").style.display = "block";
            document.getElementById("iconAddPhoto").style.display = "block";
        }

        var authors = control.getAuthors();
        var datalist = document.getElementById("optionNames");
        while(datalist.firstChild){
            datalist.removeChild(datalist.firstChild);
        }
        for (var author of authors){
            var option = document.createElement("option");
            option.value = author;
            datalist.appendChild(option);
        }

        while (postList.firstChild) {
            postList.removeChild(postList.firstChild);
        }
        for (var p of posts) {
            createPhotoPost(p);
        }

    }

    function showPhotoPosts(skip, top, filter){
        posts = control.getPhotoPosts(skip,top,filter);
        update();
    }

    function addPhotoPost(post){
        control.addPhotoPost(post);
        posts = control.getPhotoPosts();
        update();
    }

    function deletePhotoPost(id){
        control.removePhotoPost(id);
        posts = control.getPhotoPosts();
        update();
    }

    function editPhotoPost(id, post){
        control.editPhotoPost(id,post);
        posts = control.getPhotoPosts();
        update();
    }

    function likePhotoPost(id){
        control.likePhotoPost(id,userName);
        posts = control.getPhotoPosts();
        update();
    }

    return{
        showPhotoPosts : showPhotoPosts,
        addPhotoPost: addPhotoPost,
        deletePhotoPost: deletePhotoPost,
        editPhotoPost: editPhotoPost,
        likePhotoPost: likePhotoPost
    }

}());

module.showPhotoPosts();

console.log("added valid post");
console.log(module.addPhotoPost({
    id: "21",
    description: "Hello, it is me",
    date: new Date("2018","3","3","4","18"),
    author: "Dmitry_Kurch",
    photoLink: "../images/Dima1.jpg",
    hashtags: ["#hello"],
    likes:["Jeremy_Clarkson"]
}));
console.log("edit post №3");
console.log(module.editPhotoPost("19",{
    description: "Changed post",
    hashtags:["#newhashtag"]
}));
console.log("removing post id №6 ");
console.log(module.deletePhotoPost("6"));
module.likePhotoPost("21");
/*
console.log(module.showPhotoPosts(0,10,{
    author:"Bear_Grylls",
    date: new Date("2018","2","11")
}));
*/


