new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});







const timerElement = document.getElementById('timer');
const endVoteBtn = document.getElementById('endVoteBtn');

let totalSeconds = 60 * 60; // 1 час = 3600 секунд
let timerInterval;

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function updateTimer() {
  if (totalSeconds <= 0) {
    timerElement.textContent = "Дауыс беру аяқталды!";
    clearInterval(timerInterval);
    return;
  }
  timerElement.textContent = formatTime(totalSeconds);
  totalSeconds--;
}

function endVoting() {
  clearInterval(timerInterval);
  timerElement.textContent = "Дауыс беру аяқталды!";
}

endVoteBtn.addEventListener('click', endVoting);

timerInterval = setInterval(updateTimer, 1000);
updateTimer();