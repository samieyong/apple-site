const headerBg = document.querySelectorAll('.header-bg span');
const phone = document.querySelector('.phone');
const upArrow = document.getElementById('arrow-up');
const downArrow = document.getElementById('arrow-down');
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');
const topRightArrow = document.getElementById('arrow-top-right');
const topLeftArrow = document.getElementById('arrow-top-left');
const bottomLeftArrow = document.getElementById('arrow-bottom-left');
const bottomRightArrow = document.getElementById('arrow-bottom-right');
const controls = document.querySelector('.controls');
const laptopSection = document.querySelector('.laptop-display');
const watchCase = document.querySelector('.watch-case');
const watchBand = document.querySelector('.watch-band');
const moveCaseUp = document.querySelector('.btn-arrow-up');
const moveCaseDown = document.querySelector('.btn-arrow-down');
const moveBandRight = document.querySelector('.btn-arrow-right');
const moveBandLeft = document.querySelector('.btn-arrow-left');

let upDisplacement = 13.5;
let leftDisplacement = -13.5;
let count = 0;
let x = 0;
let y = 0;
let z = 0;
let intervalID;

setInterval(() => {
   if (count === headerBg.length - 1) {
      headerBg[count].classList.remove('show-img');
      headerBg[0].classList.add('show-img');
      count = 0;
   } else {
      headerBg[count].classList.remove('show-img');
      headerBg[count + 1].classList.add('show-img');
      count++;
   }
}, 20000);

function turnPhone() {
   intervalID = setInterval(() => {
      if (y >= 360) y = 0;
      phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
      y++;
   }, 100);
}
// turnPhone();
upArrow.addEventListener('click', () => {
   x += 20;
   phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
downArrow.addEventListener('click', () => {
   x -= 20;
   phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
leftArrow.addEventListener('click', () => {
   y -= 20;
   phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
rightArrow.addEventListener('click', () => {
   y += 20;
   phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
topRightArrow.addEventListener('click', () => {
   z += 20;
   phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
topLeftArrow.addEventListener('click', () => {
   z -= 20;
   phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
bottomLeftArrow.addEventListener('click', () => {
   z -= 20;
   phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
bottomRightArrow.addEventListener('click', () => {
   z += 20;
   phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

controls.addEventListener('mouseover', () => {
   clearInterval(intervalID);
});
controls.addEventListener('mouseleave', turnPhone);

// Laptop display section
window.onscroll = function () {
   if (window.scrollY >= laptopSection.offsetTop - 150) {
      laptopSection.classList.add('change');
   }
};

// Watch Section control buttons
moveCaseUp.addEventListener('click', () => {
   upDisplacement -= 27;
   watchCase.style.marginTop = `${upDisplacement}rem`;
   hideWatchControls();
});
moveCaseDown.addEventListener('click', () => {
   upDisplacement += 27;
   watchCase.style.marginTop = `${upDisplacement}rem`;
   hideWatchControls();
});
moveBandRight.addEventListener('click', () => {
   leftDisplacement += 27;
   watchBand.style.marginLeft = `${leftDisplacement}rem`;
   hideWatchControls();
});
moveBandLeft.addEventListener('click', () => {
   leftDisplacement -= 27;
   watchBand.style.marginLeft = `${leftDisplacement}rem`;
   hideWatchControls();
});

function hideWatchControls() {
   if (leftDisplacement <= -121.5) {
      moveBandLeft.classList.add('hide-control');
   } else {
      moveBandLeft.classList.remove('hide-control');
   }
   if (leftDisplacement >= 121.5) {
      moveBandRight.classList.add('hide-control');
   } else {
      moveBandRight.classList.remove('hide-control');
   }
   if (upDisplacement <= -121.5) {
      moveCaseUp.classList.add('hide-control');
   } else {
      moveCaseUp.classList.remove('hide-control');
   }
   if (upDisplacement >= 121.5) {
      moveCaseDown.classList.add('hide-control');
   } else {
      moveCaseDown.classList.remove('hide-control');
   }
}
