//Not sure I need this first one
// const blogs = document.querySelectorAll('.blogpost')
const firstBlog = document.querySelector('blogone')
const secondBlog = document.querySelector('blogtwo')
const thirdBlog = document.querySelector('blogthree')
const fourthBlog = document.querySelector('blogfour')
let allBlogs = [firstBlog, secondBlog, thirdBlog, fourthBlog]

let showData = function() {
    localStorage.getItem('postedBlog', JSON.parse(postedBlog));
}