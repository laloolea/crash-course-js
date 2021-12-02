const posts = [
    {title:'Post One',body: 'This is post one'},
    {title:'Post Two',body: 'This is post two'},
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) =>{
            output += '<li>'+ post.title +'</li>';
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback(); //callback is a function passed as an argument
        //to another function, which in this case is getPosts
    },2000);
}


createPost({title: 'Post three',body:'This is post three'},getPosts);

