const authorName = document.getElementById('username');
const title = document.getElementById('blogTitle');
const content = document.getElementById('blogContent');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (event){
    event.preventDefault();

    const blog = {
        authorName: authorName.value, 
        title: title.value,
        content: content.value,
    };
    localStorage.setItem('blog', JSON.stringify(blog));
    console.log ("blog", blog)
});



