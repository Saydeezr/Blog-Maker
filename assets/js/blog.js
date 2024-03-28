//Not sure I need this first one
// const blogs = document.querySelectorAll('.blogpost')
const firstBlog = document.getElementById('blogone');
const secondBlog = document.getElementById('blogtwo');
const thirdBlog = document.getElementById('blogthree');
const fourthBlog = document.getElementById('blogfour');


let showData = JSON.parse(window.localStorage.getItem('postedBlog'));
console.log(showData);


// let allBlogs = [firstBlog, secondBlog, thirdBlog, fourthBlog];
// allBlogs.forEach((element) => {
//     copyItems.push(showData)
// });