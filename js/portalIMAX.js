window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }
};






var supportBtnWrapper = document.querySelector('.supportBtnWrapper');
var supportBtnBg = document.querySelector('.supportBtnBg');


supportBtnWrapper.addEventListener('mouseover', function() {
supportBtnBg.style.animationName = 'supportBtn';
supportBtnBg.style.animationDuration = '1s';
});


supportBtnWrapper.addEventListener('mouseout', function() {
supportBtnBg.style.removeProperty('animation-name');
supportBtnBg.style.removeProperty('animation-duration');
});






