// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-150px";
  }
}
ScrollReveal().reveal('#contain');
ScrollReveal().reveal('#carousel-item')
ScrollReveal().reveal('#imge')
ScrollReveal().reveal('img')
ScrollReveal().reveal('form')