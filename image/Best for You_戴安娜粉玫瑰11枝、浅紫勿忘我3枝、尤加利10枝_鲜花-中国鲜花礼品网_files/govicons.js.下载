// JavaScript Document
// zengqingfeng_20130618 create
function GetRequest() {
    var d = document.getElementById("ebsgovicon").src.toLowerCase();
    //var theRequest = /govicons.js\?id=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})&width=([0-9]+)&height=([0-9]+)/.test(d) ? RegExp.$1 : "error";
    //var iconwidth = /govicons.js\?id=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})&width=([0-9]+)&height=([0-9]+)&type=([0-9]+)/.test(d) ? RegExp.$2 : "36"; //default height
    //var iconheight = /govicons.js\?id=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})&width=([0-9]+)&height=([0-9]+)&type=([0-9]+)/.test(d) ? RegExp.$3 : "50"; //default width
    //var type = /govicons.js\?id=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})&width=([0-9]+)&height=([0-9]+)&type=([0-9]+)/.test(d) ? RegExp.$4 : "1"; //default width
    var theRequest = GetParameter(d, "id=");
    var iconwidth = GetParameter(d, "width=");
    var iconheight = GetParameter(d, "height=");
    var type = GetParameter(d, "type=");
    var retstr = { "id": theRequest, "width": iconwidth, "height": iconheight, "type": type };
    return retstr;
}
function GetParameter(url, parameter) {
    var indexStart = url.indexOf(parameter) + parameter.length;
    var indexEnd = url.indexOf("&", indexStart);
    if (indexEnd > 0) {
        return url.substring(indexStart, indexEnd);
    }
    else {
        return url.substring(indexStart);
    }
}
var webprefix = "https://szcert.ebs.org.cn/"
var iconImageURL = "https://szcert.ebs.org.cn/Images/govIcon.gif";
var niconImageURL = "https://szcert.ebs.org.cn/Images/newGovIcon.gif";
var tempiconImageURL = "";

var params = GetRequest();
if (params.type == "1") {
    tempiconImageURL = iconImageURL;
}
if (params.type == "2") {
    tempiconImageURL = niconImageURL;
}
document.write('<a href="' + webprefix + params.id + '" target="_blank"><img src="' + tempiconImageURL + '" title="深圳市市场监督管理局企业主体身份公示" alt="深圳市市场监督管理局企业主体身份公示" width="' + params.width + '" height="' + params.height + '"border="0" style="border-width:0px;border:hidden; border:none;"></a>');
