
const submitButton = document.getElementById('submit');

// callback function
submitButton.addEventListener('click', function (event){
    event.preventDefault();
    const authorName = document.getElementById('username').value;
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    let postedBlog = {
        authorName: authorName, 
        title: title,
        content: content,
        
    // if (authorName() === '' || title() === '' || content() === '') {
    //     alert('Please fill out all fields before submitting.');
    //     }
    };
    console.log('postedBlog', postedBlog)
    localStorage.setItem('postedBlog', JSON.stringify(postedBlog));
    console.log(localStorage)
    window.location.pathname = "/C:/Users/sayde/bootcamp/homework/Blog-Maker/blog.html"
});



