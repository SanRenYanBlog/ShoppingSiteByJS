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

//动态渲染列表
const ul = document.querySelector(".goodsList .center ul");
let jsonData;

ajax({
    url:"../json/goods.json",
    type:"get",
    data:null,
    dataType:"json",
    success:function(data){
        
        jsonData = JSON.parse(data);
        addUlData();
    }
})

//分类动态渲染列表
//按照type分类 //按照target分类
let typeAll = document.querySelectorAll('.optionsType ul li')[0];
let typeA = document.querySelectorAll('.optionsType ul li')[1];
let typeB = document.querySelectorAll('.optionsType ul li')[2];
let typeC = document.querySelectorAll('.optionsType ul li')[3];
let typeD = document.querySelectorAll('.optionsType ul li')[4];
let targetLover = document.querySelectorAll('.targetType ul li')[0];
let targetElder = document.querySelectorAll('.targetType ul li')[1];
let targetFriend = document.querySelectorAll('.targetType ul li')[2];
let optSyn = document.querySelectorAll('.optionsStatus ul li')[0];
let optSales = document.querySelectorAll('.optionsStatus ul li')[1];
let optPrice = document.querySelectorAll('.optionsStatus ul li')[2];
let optDate = document.querySelectorAll('.optionsStatus ul li')[3];
//设置当前分类选中状态
let typeTarget = typeAll;
let optStatus = optSyn;
//存储当前页面下商品内容 为排序做准备
let showGoodsArr = [];

let options = document.querySelector('.options .center');
options.addEventListener('click',clickHandler);

function clickHandler(e){
    if(e.target.parentNode.parentNode.className === 'optionsType' || e.target.parentNode.parentNode.className === 'optionsType targetType'){
        ul.innerHTML = '';
        typeTarget.style.color = '#222223';
        e.target.style.color = '#FE7A24';
        typeTarget = e.target;
        if(e.target === typeAll){
            addUlData();
        }
        if(e.target === typeA){
            addUlData('A');
        }
        if(e.target === typeB){
            addUlData('B');
        }
        if(e.target === typeC){
            addUlData('C');
        }
        if(e.target === typeD){
            addUlData('D');
        }
        if(e.target === targetLover){
            addUlData(null,'lover');
        }
        if(e.target === targetElder){
            addUlData(null,'elder');
        }
        if(e.target === targetFriend){
            addUlData(null,'friend');
        }        
    }else if(e.target.parentNode.parentNode.className === 'optionsStatus'){
        ul.innerHTML = '';
        optStatus.style.color = '#222223';
        e.target.style.color = '#FE7A24';
        optStatus = e.target;
        if(e.target === optSyn){
            showGoodsArr.sort(function(){
                return Math.random() -0.5;
            })
            addUlByArr()
        }  
        if(e.target === optSales){
            showGoodsArr.sort(function(a,b){
                return parseInt(a.sales) - parseInt(b.sales);
            })
            addUlByArr()
        }  
        if(e.target === optPrice){
            showGoodsArr.sort(function(a,b){
                return parseInt(a.price) - parseInt(b.price);
            })
            addUlByArr()
        }  
        if(e.target === optDate){
            showGoodsArr.sort(function(a,b){
                return a.date - b.date;
            })
            addUlByArr()
        }  
    }
}

//根据商品type或商品target动态渲染数据
function addUlData(type,target){
    showGoodsArr = [];
    if(type){
        for(let item in jsonData){
            if(jsonData[item].type===type){
                let li = document.createElement('li');
                li.onclick = function(){
                    open(`http://127.0.0.1:5500/dist/pages/goodsDetails.html?id=${item}`);
                }
                li.innerHTML+=`<div class="goodsImg">
                                            <img src="${jsonData[item].mainImg}">
                                        </div>
                                        <h2>${jsonData[item].h2}</h2>
                                        <h3>${jsonData[item].h3}</h3>
                                        <h4>${jsonData[item].h4}</h4>
                                        <h5>￥${jsonData[item].price}</h5>`
                ul.appendChild(li);
                showGoodsArr.push(jsonData[item]);
            }
        }
    }else if(target){
        for(let item in jsonData){
            if(jsonData[item].target===target){
                let li = document.createElement('li');
                li.onclick = function(){
                    open(`http://127.0.0.1:5500/dist/pages/goodsDetails.html?id=${item}`);
                }
                li.innerHTML+=`<div class="goodsImg">
                                            <img src="${jsonData[item].mainImg}">
                                        </div>
                                        <h2>${jsonData[item].h2}</h2>
                                        <h3>${jsonData[item].h3}</h3>
                                        <h4>${jsonData[item].h4}</h4>
                                        <h5>￥${jsonData[item].price}</h5>`
                ul.appendChild(li);
                showGoodsArr.push(jsonData[item]);
            }
        }
    }else{
        for(let item in jsonData){
                let li = document.createElement('li');
                li.onclick = function(){
                    open(`http://127.0.0.1:5500/dist/pages/goodsDetails.html?id=${item}`);
                }
                li.innerHTML+=`<div class="goodsImg">
                                            <img src="${jsonData[item].mainImg}">
                                        </div>
                                        <h2>${jsonData[item].h2}</h2>
                                        <h3>${jsonData[item].h3}</h3>
                                        <h4>${jsonData[item].h4}</h4>
                                        <h5>￥${jsonData[item].price}</h5>`
                ul.appendChild(li);
                
                showGoodsArr.push(jsonData[item]);
        }
    }
    
}
// 遍历排序后的数组 渲染数据
function addUlByArr(){
    showGoodsArr.forEach(function(item){
        let li = document.createElement('li');
        li.onclick = function(){
            open(`http://127.0.0.1:5500/dist/pages/goodsDetails.html?id=${item.id}`);
        }
        li.innerHTML+=`<div class="goodsImg">
                                    <img src="${item.mainImg}">
                                </div>
                                <h2>${item.h2}</h2>
                                <h3>${item.h3}</h3>
                                <h4>${item.h4}</h4>
                                <h5>￥${item.price}</h5>`
        ul.appendChild(li);
    })
}