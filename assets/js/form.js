const submitButton = document.getElementById('submit');
const themeSwitcher = document.getElementById('themeswitcher');
const container = document.querySelector('.container')


// callback function
submitButton.addEventListener('click', function (event){
    
    event.preventDefault();

    //get the input of the fields user has typed
    const authorName = document.getElementById('username').value;
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    
    //alerting if fields found empty
    if (authorName === '' || title === '' || content === '') {
        alert('Please fill out all fields before submitting.');
        } else { 
            let blogPostHistory = JSON.parse(localStorage.getItem('postedBlog')) || [];
            
            if (!Array.isArray(blogPostHistory)) {
                blogPostHistory = []; // Initialize as an empty array
            }

            let postedBlog = {
                authorName: authorName, 
                title: title,
                content: content,
            };

            blogPostHistory.push(postedBlog)
            localStorage.setItem('postedBlog', JSON.stringify(blogPostHistory));
            
            console.log(localStorage)
            console.log('postedBlog', postedBlog)
             
            window.location.pathname = "./blog.html"
        }
});


let mode = 'light';

const theme = () => {
    mode = mode === 'light' ? 'dark' : 'light'
    container.setAttribute('class', `container ${mode}`)
}

themeSwitcher.addEventListener('click', function () {
    theme(); 
});

