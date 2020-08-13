//轮播图
let bantoLeft = document.querySelector('.bantoLeft');
let bantoRight = document.querySelector('.bantoRight');
let banDotts = document.querySelectorAll('.banDotts span');
let banImgs = document.querySelectorAll('.imgAll div');
console.log(banImgs);
let timer = null;
let nowIndex = 0;
banDotts[nowIndex].className = 'checked';
banImgs[nowIndex].style.opacity = '1';
banMove();
function banMove(){
    timer = setInterval(function(){ 
        banDotts[nowIndex].className = '';
        banImgs[nowIndex].style.opacity = '0';
        nowIndex++;
        nowIndex = nowIndex > 2 ? 0 : nowIndex++;
        banDotts[nowIndex].className = 'checked';
        banImgs[nowIndex].style.opacity = '1';
    },3000)
}

