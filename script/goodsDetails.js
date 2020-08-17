let loginStatus = document.querySelectorAll('.topRight ul li')[0];
let registerStatus = document.querySelectorAll('.topRight ul li')[1];
let imgBox = document.querySelector('.imgBox');
let imgOption = document.querySelector('.imgOption');

loginInit();


function loginInit() {
    let userName = judgeCookie();
    if (userName !== null) {
        loginStatus.innerText = '你好，' + userName;
        registerStatus.innerHTML = '注销';
    }
    if (registerStatus.innerHTML === '注销') {
        registerStatus.addEventListener('click', exitHandler);
    }
}

function exitHandler(e) {
    if (confirm("你确定要注销吗？")) {
        registerStatus.innerHTML = '注册'
        delAllCookie();
        location.reload();
    }
}

//根据url动态渲染界面
//获取url并去json拿数据
let id = location.href.split('?')[1].split('=')[1]; //10001
let goodsObj = {};
ajax({
    url: "../json/goods.json",
    type: "get",
    data: null,
    dataType: "json",
    success: function (data) {
        goodsObj = JSON.parse(data)[id];
        console.log(goodsObj);
        let geth2 = document.querySelector('.geth2');
        let geth3 = document.querySelector('.geth3');
        let geth4 = document.querySelector('.geth4');
        let getsales = document.querySelector('.getsales');
        let getprice = document.querySelector('.getprice');
        let buyprice = document.querySelector('.buy .price');

        let getlanguage = document.querySelector('.getlanguage');
        let getstuff = document.querySelector('.getstuff');
        let getpricewx = document.querySelector('.getpricewx');
        geth2.innerHTML = `${goodsObj.h2}`
        geth3.innerHTML = `${goodsObj.h3}`
        geth4.innerHTML = `${goodsObj.h4}`
        getsales.innerHTML = `${goodsObj.sales}`
        buyprice.innerHTML = `<i>￥</i>${goodsObj.price}`;
        getprice.innerHTML = `<span><i>￥</i>${goodsObj.price}</span>
                                        <span>市场价<del>￥${parseInt(goodsObj.price*1.2)}</del></span>`
        getlanguage.innerHTML = `${goodsObj.language}`
        getpricewx.innerHTML = `APP/微信专享价¥${parseInt(goodsObj.price*0.8)}`
        getstuff.innerHTML = `${goodsObj.stuff}`
        imgOption.innerHTML = `<div><img src="${goodsObj.aidImg[0]}" alt=""></div>
                                            <div><img src="${goodsObj.aidImg[1]}" alt=""></div>
                                            <div><img src="${goodsObj.aidImg[2]}" alt=""></div>
                                            <div><img src="${goodsObj.aidImg[3]}" alt=""></div>`
        imgBox.innerHTML = ` <img src="${goodsObj.aidImg[0]}">`

        ChangeImg();
        imgOptionsBorder()
    }
})

function ChangeImg(){
    imgOption.addEventListener('mouseover',moveHandler);
}

function moveHandler(e){
    if(e.target.tagName === 'IMG'){
        let img = new Image();
        imgBox.innerHTML = '';
        img.src = e.target.src;
        imgBox.appendChild(img);
    }
}

//商品详情 用户评价 购物保障 切换
let tabA = document.querySelectorAll('.tab p')[0];
let tabB = document.querySelectorAll('.tab p')[1];
let tabC = document.querySelectorAll('.tab p')[2];
let detailGood = document.querySelector('.detailGood');
let detailEvaluate = document.querySelector('.detailEvaluate');
let detailEnsure = document.querySelector('.detailEnsure');
let tabChange = tabA;

tabA.addEventListener('click',clickHandler);
tabB.addEventListener('click',clickHandler);
tabC.addEventListener('click',clickHandler);

function clickHandler(e){
    if(e.target === tabA){
        detailGood.style.display = 'block';
        detailEvaluate.style.display = 'none';
        detailEnsure.style.display = 'none';
    }
    if(e.target === tabB){
        detailGood.style.display = 'none';
        detailEvaluate.style.display = 'block';
        detailEnsure.style.display = 'none';
    }
    if(e.target === tabC){
        detailGood.style.display = 'none';
        detailEvaluate.style.display = 'none';
        detailEnsure.style.display = 'block';
    }
    tabChange.style.borderTop =  '2px solid transparent';
    tabChange.style.borderBottom =  '2px solid #FFF';
    tabChange.style.borderBottom = '';
    tabChange = e.target;
    e.target.style.borderTop = '2px solid #FF6941';
    e.target.style.borderBottom = '2px solid #FFF';
}


//购物保障动态切换
let servertbA = document.querySelectorAll('.servertbs ul li')[0];
let servertbB = document.querySelectorAll('.servertbs ul li')[1];
let servertbC = document.querySelectorAll('.servertbs ul li')[2];
let servertbD = document.querySelectorAll('.servertbs ul li')[3];
let servertbE = document.querySelectorAll('.servertbs ul li')[4];
let servertbF = document.querySelectorAll('.servertbs ul li')[5];

let serverimgA = document.querySelectorAll('.serverimg img')[0];
let serverimgB = document.querySelectorAll('.serverimg img')[1];
let serverimgC = document.querySelectorAll('.serverimg img')[2];
let serverimgD = document.querySelectorAll('.serverimg img')[3];
let serverimgE = document.querySelectorAll('.serverimg img')[4];
let serverimgF = document.querySelectorAll('.serverimg img')[5];

let servertbChange = servertbA;
let serverimgChange = serverimgA;

servertbA.addEventListener('mouseenter',enterHandler);
servertbB.addEventListener('mouseenter',enterHandler);
servertbC.addEventListener('mouseenter',enterHandler);
servertbD.addEventListener('mouseenter',enterHandler);
servertbE.addEventListener('mouseenter',enterHandler);
servertbF.addEventListener('mouseenter',enterHandler);

function enterHandler(e){
    serverimgChange.style.opacity = '0';
    if(e.target === servertbA){
        serverimgA.style.opacity='1';
        serverimgChange = serverimgA;
    }
    if(e.target === servertbB){
        serverimgB.style.opacity='1';
        serverimgChange = serverimgB;
    }
    if(e.target === servertbC){
        serverimgC.style.opacity='1';
        serverimgChange = serverimgC;
    }
    if(e.target === servertbD){
        serverimgD.style.opacity='1';
        serverimgChange = serverimgD;
    }
    if(e.target === servertbE){
        serverimgE.style.opacity='1';
        serverimgChange = serverimgE;
    }
    if(e.target === servertbF){
        serverimgF.style.opacity='1';
        serverimgChange = serverimgF;
    }
    
}



//左侧四张图片外边框
function imgOptionsBorder(){
    let imgOptions = document.querySelector('.imgOption');
    let imgOptionA = document.querySelectorAll('.imgOption div')[0];
    let nowimgOption = imgOptionA;
    nowimgOption.style.borderColor = '#FF734D';
    imgOptions.onmouseover = function(e){
        if(e.target.tagName === 'IMG' && e.target.parentNode!==nowimgOption){
            e.target.parentNode.style.borderColor = '#FF734D';
            nowimgOption.style.borderColor = 'transparent';
            nowimgOption = e.target.parentNode;
        }
    }
}
