
const submitButton = document.getElementById('submit');
const themeSwitcher = document.getElementById('themeswitcher');
const container = document.querySelector('.container')


// callback function
submitButton.addEventListener('click', function (event){
    const blogPostHistory = JSON.parse(localStorage.getItem('postedBlog')) || []
    event.preventDefault();
    const authorName = document.getElementById('username').value;
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    let postedBlog = {
        authorName: authorName, 
        title: title,
        content: content,
    };
    if (authorName === '' || 
        title === '' || 
        content === '') {
        alert('Please fill out all fields before submitting.');
        } else {
            console.log('postedBlog', postedBlog)
            blogPostHistory.push(postedBlog)
    localStorage.setItem('postedBlog', JSON.stringify(blogPostHistory));
    console.log(localStorage)
    window.location.pathname = "/C:/Users/sayde/bootcamp/homework/Blog-Maker/blog.html"
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

//themeSwitcher.addEventListener('click', function () {
  //  console.log('Hi')
//});

//themeSwitcher.addEventListener('click', function(){
  //  if (mode === 'light') {
    //    mode = 'dark';
      //  container.setAttribute('class', 'dark');
    //} else {
      //  mode = 'light';
        //container.setAttribute('class', 'light');
    //}
//});
