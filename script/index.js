//轮播图
let bantoLeft = document.querySelector('.bantoLeft');
let bantoRight = document.querySelector('.bantoRight');
let banDotts = document.querySelectorAll('.banDotts span');
let banImgs = document.querySelectorAll('.imgAll div');
let timer = null;
let timers = null;
let nowIndex = 0;
banDotts[nowIndex].className = 'checked';
move(banImgs[nowIndex],'100');
banMove();
function banMove(){
    timer = setInterval(function(){ 
        banDotts[nowIndex].className = '';
        // banImgs[nowIndex].style.opacity = '0';
        move(banImgs[nowIndex],'0');
        nowIndex++;
        nowIndex = nowIndex > 2 ? 0 : nowIndex++;
        banDotts[nowIndex].className = 'checked';
        // banImgs[nowIndex].style.opacity = '1';
        move(banImgs[nowIndex],'100');
    },3000)
}

bantoLeft.addEventListener('click',throttle);
bantoRight.addEventListener('click',throttle);
for(let i=0;i<banDotts.length;i++){
    banDotts[i].addEventListener('click',throttle);
}

function throttle(e){
    if(timers){
        timers = null;
        clickHandler(e);
    }else{
        clickHandler(e);
        timers = setTimeout(function(){
            timers = null;
        },500)
    }
}

function clickHandler(e){
    clearInterval(timer);
    // clearInterval(timers);
    console.log(nowIndex);
    banDotts[nowIndex].className = '';
    // banImgs[nowIndex].style.opacity = '0';
    move(banImgs[nowIndex],'0');
    if(e.target.className === 'bantoLeft'){
        nowIndex--;
        nowIndex = nowIndex < 0 ? banImgs.length-1 : nowIndex--;
        banDotts[nowIndex].className = 'checked';
        move(banImgs[nowIndex],'100');
    }
    if(e.target.className === 'bantoRight'){
        nowIndex++;
        nowIndex = nowIndex > banImgs.length-1 ? 0 : nowIndex++;
        banDotts[nowIndex].className = 'checked';
        move(banImgs[nowIndex],'100');
    }
    if(e.target.parentNode.className === 'banDotts'){
        for(let i=0;i<banDotts.length;i++){
            if(banDotts[i] === e.target){
                banDotts[nowIndex].className = '';
                // banImgs[nowIndex].style.opacity = '0';
                move(banImgs[nowIndex],'0');
                nowIndex = i;
                banDotts[nowIndex].className = 'checked';
                move(banImgs[nowIndex],'100');
            }
        }
    }
    banMove();
}


//首页顶部登录注册 存在cookie时改为用户名
let loginStatus = document.querySelectorAll('.topRight ul li')[0];
let registerStatus = document.querySelectorAll('.topRight ul li')[1];
loginInit();

function loginInit(){
    let userName = judgeCookie();
    if(userName !== null){
        loginStatus.innerText = '你好，' + userName;
        registerStatus.innerHTML = '注销';
    }
    if(registerStatus.innerHTML === '注销'){
        registerStatus.addEventListener('click',exitHandler);
    }
}

function exitHandler(e){
    if(confirm("你确定要注销吗？")){
        registerStatus.innerHTML = '注册'
        delAllCookie();
        location.reload();
    }
}


// let logo = document.querySelector('.logo img');
// logo.style.opacity = '0';
// changeOpacity(logo,'1');
// //动态改变opacity的值
// function changeOpacity(element,target){
//     let nowValue = element.style.opacity;
//     console.log(nowValue);
//     logo.style.opacity = target;
    

// }

// function move(dom,target) {
//     let opa = dom.style.opacity * 100;
//     timer && clearInterval(timer);
//     timer = setInterval(function () {
//         if (target > opa) {//运动方向
//             var speed = 2;//透明度增加
//         } else {
//             var speed = -2;//透明度减少
//         }
//         // 剩余的运动量 < 每次所走的运动量
//         if (Math.abs(opa - target) <= Math.abs(speed)) {
//             clearInterval(timer);//运动结束
//             dom.style.opacity = target / 100;//手动设置终点
//         } else {
//             opa += speed;
//             dom.style.opacity = opa / 100;//每次的运动
//         }
//     },30);
// }