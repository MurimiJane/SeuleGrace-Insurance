
// Scroll to top when up arrow is clicked
document.getElementById("upArrow").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

document.getElementById("upArrow").onclick = function(){
    //scroll to top
    window.scrollTo(0, 0);
}