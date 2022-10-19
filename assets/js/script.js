//get cursor
const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');

// console.log(cursor);
// when user moves mouse, set position of horizontal and vertical coordinates
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  setTimeout(() => {
    cursorTrail.style.left = e.clientX + "px";
    cursorTrail.style.top = e.clientY + "px";
  }, 270);
});

//scroll to top 
//get button
const scrollButton = document.getElementById('btn-scroll');

//wwen user scrolls down 20% from top of document, show button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

//when user clicks on button, scroll to top of document
scrollButton.addEventListener('click', backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}