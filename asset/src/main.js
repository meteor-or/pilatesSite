
// gnb를 누르면 바디가 밀리는 함수
let checkBox = document.getElementById('icon_gnb').checked;
let main = document.querySelector('main')

function clickGnb() {
  let checkBox = document.getElementById('icon_gnb').checked;
  if (document.getElementById('icon_gnb').checked){
  main.style.transform = 'translate3d(240px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
  main.style.transformStyle = 'preserve-3d';
    document.querySelector('.logo').style.marginLeft = '240px';
  } else {
  main.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
  main.style.transformStyle = 'preserve-3d';
  document.querySelector('.logo').style.marginLeft = '0';
}
}

//Review x축 끝으로 이동

const arrowNext = document.querySelector('.arrow_next');
const arrowPrev = document.querySelector('.arrow_prev');
const listReview = document.querySelector('.list_review');

arrowNext.addEventListener('click', function() {
  listReview.scrollLeft += 400;
});
arrowPrev.addEventListener('click', function() {
  listReview.scrollLeft -= 400;
});


// program_area 이미지에 커서 올리면 마우스 바뀌는거...
const circle = document.querySelector(".cursorCircle");

document.addEventListener("mouseMove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
});

// scrollEvent
const bg = document.querySelector('.bg_thumBox')
const userScroll = window.pageYOffset;
const programItem = document.querySelector('.program_item')
const bannerBox = document.querySelector('.banner_box')
const titleBaneer = document.querySelector('.title_banner')
const descBaneer = document.querySelector('.desc_banner')

console.log(userScroll);
console.log(bannerBox.offsetTop);
console.log(bannerBox.clientHeight);
console.log(bannerBox.offsetTop - bannerBox.clientHeight);

window.addEventListener('scroll', function() {
  if ( userScroll >= programItem.offsetTop - programItem.clientHeight) {
    bg.classList.add('animate__slideOutRight')
  } 
  });
  
window.addEventListener('scroll', function() {
  if ( userScroll >= bannerBox.offsetTop-bannerBox.clientHeight-100) {
    descBaneer.classList.add('animate__fadeIn')
    titleBaneer.classList.add('animate__fadeInRight')
  } 
  });
  