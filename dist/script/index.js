//轮播图
let bantoLeft = document.querySelector('.bantoLeft');
let bantoRight = document.querySelector('.bantoRight');
let banDotts = document.querySelectorAll('.banDotts span');
let banImgs = document.querySelectorAll('.imgAll div');
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
    },2000)
}

bantoLeft.addEventListener('click',clickHandler);
bantoRight.addEventListener('click',clickHandler);
for(let i=0;i<banDotts.length;i++){
    banDotts[i].addEventListener('click',clickHandler);
}
function clickHandler(e){
    clearInterval(timer);
    console.log(nowIndex);
    banDotts[nowIndex].className = '';
    banImgs[nowIndex].style.opacity = '0';
    if(e.target.className === 'bantoLeft'){
        nowIndex--;
        nowIndex = nowIndex < 0 ? banImgs.length-1 : nowIndex--;
        banDotts[nowIndex].className = 'checked';
        banImgs[nowIndex].style.opacity = '1';
    }
    if(e.target.className === 'bantoRight'){
        nowIndex++;
        nowIndex = nowIndex > banImgs.length-1 ? 0 : nowIndex++;
        banDotts[nowIndex].className = 'checked';
        banImgs[nowIndex].style.opacity = '1';
    }
    if(e.target.parentNode.className === 'banDotts'){
        for(let i=0;i<banDotts.length;i++){
            if(banDotts[i] === e.target){
                banDotts[nowIndex].className = '';
                banImgs[nowIndex].style.opacity = '0';
                nowIndex = i;
                banDotts[nowIndex].className = 'checked';
                banImgs[nowIndex].style.opacity = '1';
            }
        }
    }
    banMove();
}

