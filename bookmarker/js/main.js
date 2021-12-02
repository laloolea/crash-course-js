// Listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);

//Save Bookmark function
function saveBookmark(e){
    //Get form values 
    let siteName = document.getElementById('siteName').value;
    let siteUrl = document.getElementById('siteUrl').value;

    if(!validateForm(siteName,siteUrl)){
        return false;
    }
    
    let bookmark = {
        name:siteName,
        url:siteUrl
    }

    // //Local Storage Test add and delete item
    // localStorage.setItem('test','Hello World');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem('test'));
    //


    //test if bookmarks is null
    if(localStorage.getItem('bookmarks')===null){
        //init array
        var bookmarks = [];
        //Add to array
        bookmarks.push(bookmark);
        //Set to local storage //key     //json u saved
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }else{
        //Getbookmarks from localStorage
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);

        //Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    //clear form
    document.getElementById('myForm').reset();

    fetchBookmarks();
    //Prevent form from submitting
    e.preventDefault();
    
}


//delete bookmarks function

function deleteBookmark(url){
    //get bookmarks from localStorage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //look throught bookmarks
    for(var i = 0 ; i < bookmarks.length;++i){
        if(bookmarks[i].url==url){
            //Remove from array
            bookmarks.splice(i,1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    //re-fetch bookmarks after delete
    fetchBookmarks();
}
// Fetch Bookmarks

function fetchBookmarks(){
    //Get bookmarks from LocalStorage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Get output id
    var bookmarksResults = document.getElementById('bookmarksResulsts');

    //Build output
    bookmarksResults.innerHTML='';

    for(var i = 0; i < bookmarks.length ; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML +='<div class="well">'+
                                                '<h3>'+name+
                                                '<a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a>'+
                                                '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#"'+url+'">Delete</a>'+
                                                '</h3>'+
                                                '</div>';

    }

}

function validateForm(  teName,siteUrl){
    if(!siteName || !siteUrl){
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
        alert('Please use a valid URL');
        return false;
    }

    return true;
}