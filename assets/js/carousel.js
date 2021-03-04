let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let reviewItems = document.querySelector('.review-items');
let reviewItem = document.querySelectorAll('.review-item');


arrowRight.onclick = function () {
  if (reviewItem[0].classList.contains('active-slide')) {
    reviewItems.style.transform = "translate(-100%)";
    reviewItem[0].classList.remove('active-slide');
    reviewItem[1].classList.add('active-slide');
    arrowLeft.classList.add('active');
  } else if (reviewItem[1].classList.contains('active-slide')) {
    reviewItems.style.transform = "translate(-200%)";
    reviewItem[1].classList.remove('active-slide');
    reviewItem[2].classList.add('active-slide');
    arrowRight.classList.remove('active');
  }
}
arrowLeft.onclick = function () {
  if (reviewItem[1].classList.contains('active-slide')) {
    reviewItems.style.transform = "translate(0px)";
    reviewItem[1].classList.remove('active-slide');
    reviewItem[0].classList.add('active-slide');
    arrowLeft.classList.remove('active');
  } else if (reviewItem[2].classList.contains('active-slide')) {
    reviewItems.style.transform = "translate(-100%)";
    reviewItem[2].classList.remove('active-slide');
    reviewItem[1].classList.add('active-slide');
    arrowRight.classList.add('active');
  }
}
