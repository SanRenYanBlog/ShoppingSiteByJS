"use strict";var loginTabs=document.querySelector(".loginTabs"),registerTabs=document.querySelector(".registerTabs"),loginMain=document.querySelector(".loginMain"),registerMain=document.querySelector(".registerMain"),loginBtn=document.querySelector(".loginBtn"),registerBtn=document.querySelector(".registerBtn"),loginUsername=document.querySelector(".loginMain .username"),loginUserpwd=document.querySelector(".loginMain .userpwd");function clickHandler(e){e.target===loginTabs&&(loginMain.style.display="block",registerMain.style.display="none",loginTabs.style.color="#FF734C",registerTabs.style.color="#232628",loginTabs.style.borderBottomColor="#FF734C",registerTabs.style.borderBottomColor="transparent"),e.target===registerTabs&&(loginMain.style.display="none",registerMain.style.display="block",loginTabs.style.color="#232628",registerTabs.style.color="#FF734C",loginTabs.style.borderBottomColor="transparent",registerTabs.style.borderBottomColor="#FF734C"),e.target===loginBtn&&ajax({url:"../json/user.json",type:"get",dataType:"json",success:function(e){var r=JSON.parse(e);console.log(r),loginUsername.value in r?loginUserpwd.value===r[loginUsername.value]?(alert("登录成功！即将为您跳转至首页！"),delAllCookie(),setCookies({key:loginUsername.value,val:loginUserpwd.value,days:7}),window.location.href="./index.html"):alert("密码输入错误！"):alert("您输入的账号有误，请重新输入！")},error:function(e){alert(e)}}),e.target===registerBtn&&alert("暂未对接数据库，无法注册用户！")}loginTabs.addEventListener("click",clickHandler),registerTabs.addEventListener("click",clickHandler),loginBtn.addEventListener("click",clickHandler),registerBtn.addEventListener("click",clickHandler),setTimeout(function(){var e,r=document.cookie;r&&(e=r.split("=")[0],confirm("系统检测到用户"+e+"已经登录，是否立即跳转至首页？")?window.location.href="./index.html":delAllCookie())},2e3);