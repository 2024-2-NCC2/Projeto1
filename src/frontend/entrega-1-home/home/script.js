function countUp(elementId, endValue, duration) {
  let start = 0;
  const increment = endValue / (duration / 40);
  const element = document.getElementById(elementId);
  
  const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
          clearInterval(interval);
          element.textContent = endValue.toLocaleString();
      } else {
          element.textContent = Math.floor(start).toLocaleString();
      }
  }, 40);
}

window.onload = function () {
  countUp('peopleWithoutFood', 21100000, 3000);
  countUp('peopleFoodInsecurity', 70300000, 3000);
};

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
  slides.forEach((slide, index) => {
      slide.style.display = index === n ? 'block' : 'none';
  });
}

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
  slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
  showSlide(slideIndex);
});

document.querySelector('.carousel-control.next').addEventListener('click', () => {
  slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
  showSlide(slideIndex);
});

showSlide(slideIndex);