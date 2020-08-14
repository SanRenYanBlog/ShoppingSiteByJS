//登录框
let loginTabs = document.querySelector('.loginTabs');
let registerTabs = document.querySelector('.registerTabs');
let loginMain = document.querySelector('.loginMain');
let registerMain = document.querySelector('.registerMain');
let loginBtn = document.querySelector('.loginBtn');
let registerBtn = document.querySelector('.registerBtn');
let loginUsername = document.querySelector('.loginMain .username');
let loginUserpwd = document.querySelector('.loginMain .userpwd');


loginTabs.addEventListener('click', clickHandler);
registerTabs.addEventListener('click', clickHandler);
loginBtn.addEventListener('click', clickHandler);
registerBtn.addEventListener('click', clickHandler);

function clickHandler(e) {
    if (e.target === loginTabs) {
        loginMain.style.display = 'block';
        registerMain.style.display = 'none';
        loginTabs.style.color = '#FF734C'
        registerTabs.style.color = '#232628'
        loginTabs.style.borderBottomColor = '#FF734C';
        registerTabs.style.borderBottomColor = 'transparent';
    }
    if (e.target === registerTabs) {
        loginMain.style.display = 'none';
        registerMain.style.display = 'block';
        loginTabs.style.color = '#232628'
        registerTabs.style.color = '#FF734C'
        loginTabs.style.borderBottomColor = 'transparent';
        registerTabs.style.borderBottomColor = '#FF734C';
    }
    if (e.target === loginBtn) {
        ajax({
            url: '../json/user.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                let json = JSON.parse(data);
                console.log(json);
                if (loginUsername.value in json) {
                    if (loginUserpwd.value === json[loginUsername.value]) {
                        alert('登录成功！即将为您跳转至首页！');
                        delAllCookie();
                        setCookies({
                            key: loginUsername.value,
                            val: loginUserpwd.value,
                            days: 7
                        });
                        window.location.href = "./index.html";
                    } else {
                        alert('密码输入错误！');
                    }
                } else {
                    alert('您输入的账号有误，请重新输入！');
                }
            },
            error: function (status) {
                alert(status);
            }
        });
    }
    if(e.target===registerBtn){
        alert("暂未对接数据库，无法注册用户！");
    }
}


setTimeout(function () {
    var cookieStr = document.cookie;
    if (cookieStr) {
        let username = cookieStr.split('=')[0];
        let boolen = confirm("系统检测到用户" + username + "已经登录，是否立即跳转至首页？");
        if (boolen) {
            window.location.href = "./index.html";
        } else {
            delAllCookie();
        }
    }
}, 2000)