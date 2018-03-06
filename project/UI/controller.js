;var module =(function(){
    var posts = [
        {
            id: "1",
            description: "My usual morning wood",
            date: new Date("2018","2","7","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear1.jpg",
            hashtags : ["#travelling","#lovenature","niceweather"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "2",
            description: "I want you to for US army",
            date: new Date("2018","2","9","4","20"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear2.jpg",
            hashtags : ["#challenge","#brave","honor"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "3",
            description: "Me and ma nigga",
            date: new Date("2018","2","7","4","21"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "4",
            description: "Me and ma nigga",
            date: new Date("2018","2","10","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "5",
            description: "Me and ma nigga",
            date: new Date("2018","2","7","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "6",
            description: "Me and ma nigga",
            date: new Date("2018","2","20","4","19"),
            author: "Dmitry_Kurch",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "7",
            description: "Me and ma nigga",
            date: new Date("2018","2","25","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "8",
            description: "Me and ma nigga",
            date: new Date("2018","2","14","14","19"),
            author: "Dmitry_Kurch",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "9",
            description: "Me and ma nigga",
            date: new Date("2018","2","2","2","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "10",
            description: "Me and ma nigga",
            date: new Date("2018","1","7","4","19"),
            author: "Dmitry_Kurch",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "11",
            description: "Me and ma nigga",
            date: new Date("2018","1","29","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "12",
            description: "Me and ma nigga",
            date: new Date("2018","2","7","20","19"),
            author: "Dmitry_Kurch",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "13",
            description: "Me and ma nigga",
            date: new Date("2018","1","7","11","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "14",
            description: "Me and ma nigga",
            date: new Date("2018","2","7","11","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "15",
            description: "Me and ma nigga",
            date: new Date("2018","1","21","1","19"),
            author: "Dmitry_Kurch",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        }
        ,{
            id: "16",
            description: "Me and ma nigga",
            date: new Date("2018","1","30","1","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "17",
            description: "Me and ma nigga",
            date: new Date("2018","1","13","1","19"),
            author: "Dmitry_Kurch",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "18",
            description: "Me and ma nigga",
            date: new Date("2018","1","11","1","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "19",
            description: "Me and ma nigga",
            date: new Date("2018","1","10","1","19"),
            author: "Dmitry_Kurch",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "20",
            description: "Me and ma nigga",
            date: new Date("2018","1","7","1","19"),
            author: "Dmitry_Kurch",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        }

    ];

    function getPost (str){
        return posts.find(function (obj){
            return obj.id == str;
        });
    }

    function comporator (obj1, obj2) {
        if (obj1.date < obj2.date)
            return -1;
        if (obj1.date > obj2.date)
            return 1;
        return 0;
    }

    function checkId (post){
        return ((post.id!="") && (typeof post.id == "string"))
    }
    function checkDescription(post){
        return ((post.description!="") && (typeof post.description=="string"))
    }
    function checkDate(post){
        return post.date instanceof Date;
    }
    function checkAuthor(post){
        return ((post.author!="") && (typeof post.author=="string"))
    }
    function checkPhotoLink(post){
        return ((post.photoLink!="") && (typeof post.photoLink == "string"))
    }
    function checkHashtags(post){
        return post.hashtags instanceof Array;
    }
    function checkLikes(post){
        return post.likes instanceof Array;
    }

    function validatePost(post){
        return  checkId(post) &&
                checkDescription(post) &&
                checkDate(post)&&
                checkAuthor(post)&&
                checkPhotoLink(post)&&
                checkHashtags(post)&&
                checkLikes(post);
    }

    function addPost(post){
        if (validatePost(post)) {
            posts.push(post);
            return true;
        }
        return false;
    }

    function editPost(id, post)
    {
        if (validatePost(getPost(id))&&post!=null)
        {
            var myPost = getPost(id);
            if (checkDescription(post)) {
                myPost.description = post.description;
            }
            if (checkPhotoLink(post)) {
                myPost.photoLink = post.photoLink;
            }
            if (checkHashtags(post)) {
                myPost.hashtags = post.hashtags;
            }
            if (checkLikes(post)) {
                myPost.likes = post.likes;
            }
            return true;
        }
        return false;
    }

    function removePost (id){
        for (var i=0;i<posts.length;i++)
            if (posts[i].id===id) {
                posts.splice(i, 1);
                return true;
            }
        return false;
    }

    function getPosts(skip, top, filter){
        skip = skip || 0;
        top = top || 10;
        if (filter==undefined) {
            posts.sort(comporator);
            return posts.slice(skip, top);
        }
        else
        {
            var newPosts = posts;
            if (checkAuthor(filter)) {
                newPosts = newPosts.filter(function (obj) {
                    return obj.author === filter.author;
                });
            }
            if (checkDate(filter)){
                newPosts = newPosts.filter(function(obj){
                    return ((obj.date.getMonth()===filter.date.getMonth())&&(obj.date.getDate()===filter.date.getDate()));
                });
            }
            var tempPosts = [];
            if (checkHashtags(filter)){
                for (var k=0;k<filter.hashtags.length;k++)
                {
                    for (var i=0;i<newPosts.length;i++) {
                        for (var j = 0; j < newPosts[i].hashtags.length; j++) {
                            if (newPosts[i].hashtags[j]===filter.hashtags[k])
                                tempPosts.push(newPosts[i]);
                        }
                    }
                }
                newPosts = tempPosts;
            }
            newPosts.sort(comporator);
            return newPosts.slice(skip,top);
        }
    }
    return{
        getPost: getPost,
        validatePost: validatePost,
        addPost: addPost,
        editPost: editPost,
        removePost: removePost,
        getPosts:getPosts
    }
}());


console.log("get post with id=2");
console.log(module.getPost("2"));
console.log("added valid post");
console.log(module.addPost({
    id: "21",
    description: "Hello,it is me",
    date: new Date("2018","2","7","4","19"),
    author: "Dmitry_Kurch",
    photoLink: "../images/Dima1.jpg",
    hashtags: ["hello"],
    likes:[]
}));
console.log("added invalid post")
console.log(module.addPost({
    id: "21",
    description: "Hello,it is me",
    date: new Date("2018","1","7","4","19"),
    author: "Dmitry_Kurch",
    photoLink: "",
    hashtags: ["#hello"],
    likes:[]
}));
console.log("validate post №3");
console.log(module.getPost("3"));
console.log(module.editPost("3",{
    description: "Changed post",
    hashtags:["#newhashtag"]
}));
console.log("removing post id №21 ");
console.log(module.removePost("21"));

console.log("get first 10 posts sorted");
console.log(module.getPosts());
console.log("get Dmitry_Kurch posts");
console.log(module.getPosts(0,10,{author:"Dmitry_Kurch"}));
console.log("get Bear_Grylls posts by March 7");
console.log(module.getPosts(0,10,{
    author:"Bear_Grylls",
    date: new Date("2018","2","7")
}));
console.log("get Dmitry_Kurch posts include hashtag #BFF");
console.log(module.getPosts(0,10,{
    author:"Dmitry_Kurch",
    hashtags:["#BFF"]
}));