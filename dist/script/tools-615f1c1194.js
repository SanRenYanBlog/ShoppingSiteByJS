"use strict";function ajax(e){var t=new XMLHttpRequest,a="";if("string"==typeof e.data&&(a=e.data),isObject(e.data)){for(var o in e.data)a+=o+"="+e.data[o]+"&";a=a.substring(0,a.length-1)}if("get"===e.type.toLowerCase())t.open(e.type,e.url+"?"+a+"&_="+Date.now()),t.send(null);else{if("post"!==e.type.toLowerCase())return alert("目前只支持get和post请求方式"),!1;t.open(e.type,e.url),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(a)}t.onreadystatechange=function(){4===t.readyState&&(200<=t.status&&t.status<300?"xml"===e.dataType?e.success(t.responseXML):e.success(t.responseText):e.error(t.status))}}function isObject(e){return"[object Object]"===Object.prototype.toString.call(e)}function setCookies(e){if(!e.key||!e.val)return!1;var t;e.days=e.days||0,e.domain=e.domain||"",e.path=e.path||"",0===e.days?document.cookie=e.key+"="+escape(e.val)+";domain="+e.domain+";path="+e.path:((t=new Date).setDate(t.getDate()+e.days),console.log(t),document.cookie=e.key+"="+escape(e.val)+";domain="+e.domain+";path="+e.path+";expires="+t)}function delAllCookie(){(new Date).setTime(-1e3);for(var e=document.cookie.split("; "),t=0;t<e.length;t++){setCookies({key:e[t].split("=")[0],val:"null",days:-1})}}function judgeCookie(){var e=document.cookie;return 0<e.length?e.split("=")[0]:null}function move(e,t){var a,o=100*e.style.opacity,n=null;n&&clearInterval(n),n=setInterval(function(){a=o<t?2:-2,Math.abs(o-t)<=Math.abs(a)?(clearInterval(n),e.style.opacity=t/100):(o+=a,e.style.opacity=o/100)},10)}