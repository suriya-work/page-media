// function for arrow
function goToPage() {
  window.location.href = "index.html"
}

// swiper2

const swiper = new Swiper(".card-slider", {
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});


var swiper2 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); 

// pegintion
function showPages(id) {


  var totalNumberOfPages = 5;
  for (var i = 1; i <= totalNumberOfPages; i++) {

      if (document.getElementById('page' + i)) {

          document.getElementById('page' + i).style.display = 'none';
      }

  }
  if (document.getElementById('page' + id)) {

      document.getElementById('page' + id).style.display = 'block';
  }
};
// End pagintion

// video player

const video = document.querySelector(".video");
const toggleButton = document.querySelector(".toggleButton");
const progress = document.querySelector(".progressvideo");
const progressBar = document.querySelector(".progress_filled");
function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}
function updateToggleButton() {
  toggleButton.innerHTML = video.paused ? "►" : "❚❚";
}
// progrees
function handleProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercentage}%`;
}
// scrub
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

toggleButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
// progrees
video.addEventListener("timeupdate", handleProgress);
// scrub


let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mouseup", () => (mousedown = false));



document.addEventListener("keydown", (e) => {
  if (e.code === "Space") togglePlay();
});