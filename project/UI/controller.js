;var control =(function(){
    var posts = [
        {
            id: "1",
            description: "My usual morning wood",
            date: new Date("2018","2","7","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear1.jpg",
            hashtags : ["#travelling","#lovenature","#niceweather"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "2",
            description: "I want you to for US army",
            date: new Date("2018","2","9","4","20"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear2.jpg",
            hashtags : ["#challenge","#brave","#honor"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "3",
            description: "Me and ma nigga",
            date: new Date("2018","2","8","4","21"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","#hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "4",
            description: "You're not you when you are hungry",
            date: new Date("2018","2","10","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear4.jpg",
            hashtags : ["#youmyheart","#mmmmsotasty","#delicious"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "5",
            description: "Follow me",
            date: new Date("2018","2","11","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear5.jpg",
            hashtags : ["#flying","#socool","#airmax"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "6",
            description: "My usual morning wood",
            date: new Date("2018","2","5","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear1.jpg",
            hashtags : ["#travelling","#lovenature","#niceweather"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "7",
            description: "I want you to for US army",
            date: new Date("2018","2","8","4","20"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear2.jpg",
            hashtags : ["#challenge","#brave","#honor"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "8",
            description: "Me and ma nigga",
            date: new Date("2018","2","9","4","21"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","#hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "9",
            description: "You're not you when you are hungry",
            date: new Date("2018","2","10","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear4.jpg",
            hashtags : ["#youmyheart","#mmmmsotasty","#delicious"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "10",
            description: "Follow me",
            date: new Date("2018","2","11","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear5.jpg",
            hashtags : ["#flying","#socool","#airmax"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "11",
            description: "My usual morning wood",
            date: new Date("2018","2","11","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear1.jpg",
            hashtags : ["#travelling","#lovenature","#niceweather"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "12",
            description: "I want you to for US army",
            date: new Date("2018","2","10","4","20"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear2.jpg",
            hashtags : ["#challenge","#brave","#honor"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "13",
            description: "Me and ma nigga",
            date: new Date("2018","2","9","4","21"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear3.jpg",
            hashtags : ["#BFF","#goodtimetogether","#hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "14",
            description: "You're not you when you are hungry",
            date: new Date("2018","2","8","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear4.jpg",
            hashtags : ["#youmyheart","#mmmmsotasty","#delicious"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "15",
            description: "Follow me",
            date: new Date("2018","2","7","4","19"),
            author: "Bear_Grylls",
            photoLink: "../images/Bear5.jpg",
            hashtags : ["#flying","#socool","#airmax"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "16",
            description: "My car",
            date: new Date("2018","1","30","1","19"),
            author: "Jeremy_Clarkson",
            photoLink: "../images/Jeremy1.jpg",
            hashtags : ["#BFF","#goodtimetogether","#hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "17",
            description: "My friend",
            date: new Date("2018","1","13","1","19"),
            author: "Jeremy_Clarkson",
            photoLink: "../images/Jeremy2.jpg",
            hashtags : ["#BFF","#goodtimetogether","#hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "18",
            description: "Going somewhere",
            date: new Date("2018","1","11","1","19"),
            author: "Jeremy_Clarkson",
            photoLink: "../images/Jeremy3.jpg",
            hashtags : ["#BFF","#goodtimetogether","#hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "19",
            description: "A flight to Russia",
            date: new Date("2018","1","10","1","19"),
            author: "Jeremy_Clarkson",
            photoLink: "../images/Jeremy4.jpg",
            hashtags : ["#BFF","#goodtimetogether","#hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        },
        {
            id: "20",
            description: "Australia coast",
            date: new Date("2018","1","7","1","19"),
            author: "Jeremy_Clarkson",
            photoLink: "../images/Jeremy5.jpg",
            hashtags : ["#BFF","#goodtimetogether","#hapiness"],
            likes: ["Dmitry_Kurch", "Bear_Grylls", "Jeremy_Clarkson"]
        }
    ];

    function getPhotoPost (id){
        return posts.find(function (obj){
            return obj.id === id;
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

    function validatePhotoPost(post){
        return  checkId(post) &&
                checkDescription(post) &&
                checkDate(post)&&
                checkAuthor(post)&&
                checkPhotoLink(post)&&
                checkHashtags(post)&&
                checkLikes(post);
    }

    function addPhotoPost(post){
        if (validatePhotoPost(post)) {
            posts.push(post);
            return true;
        }
        return false;
    }

    function editPhotoPost(id, post)
    {
        if (validatePhotoPost(getPhotoPost(id))&&post!=null)
        {
            var myPost = getPhotoPost(id);
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

    function removePhotoPost (id){
        for (var i=0;i<posts.length;i++)
            if (posts[i].id===id) {
                posts.splice(i, 1);
                return true;
            }
        return false;
    }

    function getPhotoPosts(skip, top, filter){
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

    function getAuthors(){
        var authors = new Set();
        for (var p of posts){
            authors.add(p.author);
        }
        return authors;
    }


    return{
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost,
        getPhotoPosts:getPhotoPosts,
        getAuthors: getAuthors
    }
}());
