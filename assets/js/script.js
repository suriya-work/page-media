// function for arrow
function goToPage() {
  window.location.href = "index.html"
}
// pagainttion

const link = document.getElementsByClassName('link');
const currentValue = 1;

function activeLink() {
  for (l of link) {
    l.classList.remove('active-numb');
  }

  e.target.classList.add('active-numb');
  currentValue = e.target.value;
}

function backBtn() {
  if (currentValue > 1) {
    for (l of link) {
      l.classList.remove('active-numb');
    }
    currentValue--;
    link[currentValue - 1].classList.add('active-numb');
  }
}

function nextBtn() {
  if (currentValue < 6) {
    for (l of link) {
      l.classList.remove('active-numb');
    }
    currentValue++;
    link[currentValue - 1].classList.add('active-numb');
  }
}
// swiper1
// const swiper1 = new Swiper(".swiper-cart", {
//   slidesPerView: 1,
//   // grid: {
//   //   rows:1,
//   // },
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


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