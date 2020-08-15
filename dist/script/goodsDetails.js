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