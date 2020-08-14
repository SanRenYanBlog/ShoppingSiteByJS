function ajax(options) {
    // ajax({
    //     url: './data/post.php',
    //     type: 'post',
    //     // data: 'abc=12345&www=baidu',
    //     data: {abc: 123456,www: 'baidu'},
    //     dataType: 'json',
    //     success: function (data){
    //         var json = JSON.parse(data);
    //         show.innerHTML = `${json.abc} ---- ${json.www}`;
    //     },
    //     error: function (status){
    //         alert(status);
    //     }
    // });
    // 1.创建XMLHttpRequest对象（数据交互对象或ajax对象）
    var xhr = new XMLHttpRequest(); // 除了IE56其他都支持
    // var xhr = new ActiveXObject('Microsoft.XMLHTTP');//IE56

    // 对传入参数进行格式化 'abc=123&www=baidu'
    var data = '';
    if (typeof options.data === 'string') {
        data = options.data;
    }
    // if (typeof options.data === 'object'&&options.data.constructor === 'Obejct'&& options.data !== null) {
    if (isObject(options.data)) {
        for (var key in options.data) {
            data += key + '=' + options.data[key] + '&';
        }
        // 'abc=123&www=baidu&'
        data = data.substring(0, data.length - 1);
        // 'abc=123&www=baidu'
    }

    if (options.type.toLowerCase() === 'get') {
        xhr.open(options.type, options.url + '?' + data + '&_=' + Date.now());
        xhr.send(null);
    } else if (options.type.toLowerCase() === 'post') {
        xhr.open(options.type, options.url);
        // POST请求需要在send之前设置请求头，模拟表单的post提交
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // 3.发送请求
        xhr.send(data); //post请求要发送的数据放参数里面
    } else {
        alert('目前只支持get和post请求方式');
        return false;
    }

    // 4.请求/响应状态
    // xhr.readyState  0-4
    // xhr.readyState属性发送变化时会触发一个事件，readystatechange
    xhr.onreadystatechange = function () {
        // console.log( xhr.readyState );// 2 3 4
        if (xhr.readyState === 4) { // 请求完成状态
            // http状态码 xhr.status
            if (xhr.status >= 200 && xhr.status < 300) { // 请求成功，可以拿到数据
                // xhr.responseText  返回文本数据
                // xhr.responseXML  返回 XML数据
                if (options.dataType === 'xml') {
                    options.success(xhr.responseXML);
                } else {
                    options.success(xhr.responseText);
                }
            } else {
                options.error(xhr.status);
            }
        }
    }
}
// 判断是否为对象
function isObject(obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        return true;
    }
    return false;
}

//cookie设置方法
function setCookies(options) {
    if (!options.key || !options.val) {
        return false;
    }
    options.days = options.days || 0;
    options.domain = options.domain || '';
    options.path = options.path || '';
    if (options.days === 0) {
        document.cookie = options.key + '=' + escape(options.val) + ';domain=' + options.domain + ';path=' +
            options.path;
    } else {
        var d = new Date();
        d.setDate(d.getDate() + options.days);
        console.log(d);
        document.cookie = options.key + '=' + escape(options.val) + ';domain=' + options.domain + ';path=' +
            options.path + ';expires=' + d;
    }
}

//删除cookie中所有定变量函数    
function delAllCookie() {
    let myDate = new Date();
    myDate.setTime(-1000); //设置时间    
    let data = document.cookie;
    let dataArray = data.split("; ");
    for (let i = 0; i < dataArray.length; i++) {
        let varName = dataArray[i].split("=")[0];
        setCookies({
            key: varName,
            val: 'null',
            days: -1
            });
    }
}