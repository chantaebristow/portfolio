let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0; // New variable for the third set of images
const images1 = document.querySelectorAll('.imgs1 img');
const images2 = document.querySelectorAll('.imgs2 img');
const images3 = document.querySelectorAll('.imgs3 img'); // New variable for the third set of images

function prevImage1() {
  if (currentIndex1 > 0) {
    currentIndex1--;
    updateDisplay(images1, currentIndex1);
  }
}

function nextImage1() {
  if (currentIndex1 < images1.length - 1) {
    currentIndex1++;
    updateDisplay(images1, currentIndex1);
  }
}

function prevImage2() {
  if (currentIndex2 > 0) {
    currentIndex2--;
    updateDisplay(images2, currentIndex2);
  }
}

function nextImage2() {
  if (currentIndex2 < images2.length - 1) {
    currentIndex2++;
    updateDisplay(images2, currentIndex2);
  }
}

// Functions for the third set of images
function prevImage3() {
  if (currentIndex3 > 0) {
    currentIndex3--;
    updateDisplay(images3, currentIndex3);
  }
}

function nextImage3() {
  if (currentIndex3 < images3.length - 1) {
    currentIndex3++;
    updateDisplay(images3, currentIndex3);
  }
}

function updateDisplay(images, index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

// Initially show the first image for each set
updateDisplay(images1, currentIndex1);
updateDisplay(images2, currentIndex2);
updateDisplay(images3, currentIndex3); 