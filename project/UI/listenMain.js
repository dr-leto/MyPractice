; var listener = (function(){

    document.getElementById("displayFilter").addEventListener("click",displayFilter);
    document.getElementById("buttonSubmitFilter").addEventListener("click", filterBy);

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
        module.showPhotoPosts(0,10,{
            author: name,
            date: date,
            hashtag: hashtag
        });
    }
}());
