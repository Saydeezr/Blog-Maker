const blogs = document.querySelectorAll('.blogpost')
const firstBlog = document.getElementById('sectionOne');
const secondBlog = document.getElementById('sectionTwo');
const thirdBlog = document.getElementById('sectionThree');
const fourthBlog = document.getElementById('sectionFour');

const contentBox = document.getElementById('content')
const showData = JSON.parse(localStorage.getItem('postedBlog'));
console.log(showData);


for (let i = 0; i < showData.length; i++) {
    console.log(showData[i]);
    let h2El = document.createElement('h2')
    h2El.textContent = showData[i].title
    let lineEl = document.createElement('hr')
    let pEl = document.createElement('p')
    pEl.textContent = showData[i].content
    let captionEl = document.createElement('caption')
    captionEl.textContent = showData[i].authorName
    let sectionEl = document.createElement('section')
    sectionEl.classList.add("blogpost")
    sectionEl.appendChild(h2El)
    sectionEl.appendChild(lineEl)
    sectionEl.appendChild(pEl)
    sectionEl.appendChild(captionEl)
    contentBox.appendChild(sectionEl)
}
