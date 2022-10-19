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