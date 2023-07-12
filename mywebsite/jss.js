// script.js

    // Get all the slides
    var slides = document.getElementsByClassName("slide");
    var currentIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
      slides[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].style.display = "block";
    }

    // Set interval to automatically show the next slide every 3 seconds
    setInterval(showNextSlide, 3000);