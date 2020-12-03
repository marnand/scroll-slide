// Scroll dinâmico no menu
$('nav a[href^="#"]').on('click', function(event) {
    event.preventDefault()
    let id = $(this).attr('href'),
        targetOffSet = $(id).offset().top

    $('html, body').animate({
        scrollTop: targetOffSet - 100
    }, 500)
})

// Slider-bullets JS Vanilla
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sobre-autor");
  let bullet = document.getElementsByClassName("slider-bullet");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < bullet.length; i++) {
    bullet[i].className = bullet[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  bullet[slideIndex - 1].className += " active";
}
