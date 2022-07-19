const Win = window;
const Doc = document;
class gettools{
    constructor({cDoc, cWin}) {
        this.cDoc = cDoc;
        this.cWin = cWin;
    }
    getNameValue(GetName) {
        let Win = this.cWin;
        let nURL = new URL(Win.top.location.href);
        let nGet = new URLSearchParams(nURL.search);
        return nGet.get(GetName) != null ? nGet.get(GetName).toString() : "";
    }
    getURL(TeUrlFile) {
        return location.protocol + "//" + location.host + "/" + TeUrlFile;
    }
    WinTopReplace(teurl) {
        let Win = this.cWin;
        Win.top.location.replace(teurl);
    }
    UpdateNowUrl(pageName, pageUrl) {
        let Win = this.cWin;
        Win.history.pushState({ "page": pageName }, "", getURL(pageUrl));
    }
}

function AjaxPage(tagID, pageTarget) {
    var xmlHttp, pageDoc;
    let getURLs = new gettools({cDoc:Doc, cWin:Win});
    pageTarget = (pageTarget.toLowerCase().indexOf("http") == -1) ? getURLs.getURL(pageTarget) : pageTarget;

    return new Promise(function (resolve, reject) {
        if (pageDoc = Doc.querySelector(tagID)) {  //顯示資料的物件ID
            if (window.XMLHttpRequest) {
                //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                xmlHttp = new XMLHttpRequest();
            } else {
                // IE6, IE5 浏览器执行代码
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlHttp.onreadystatechange = function () {
                let ajaxview = "";
                switch (xmlHttp.status) {
                    case 200:
                        if (xmlHttp.readyState == 3) { pageDoc.innerHTML = "Loading..."; }
                        if (xmlHttp.readyState == 4) { ajaxview = xmlHttp.responseText; }
                        break;
                    default:
                        ajaxview = xmlHttp.status;
                        break;
                }
                if (ajaxview.length > 0) {
                    pageDoc.innerHTML = ajaxview
                    resolve(1);
                } else {
                    resolve(1);
                }
            }
            xmlHttp.open("POST", pageTarget, true);
            xmlHttp.send();
        } else {
            reject(0);
        }
    })
}


//使用Ajax傳送表單
//AjaxForm(this物件顯示 , 表單ID, 送出路徑, Method模式)
function AjaxForm(ClientThisBut, ClientFormID, ActionPurpose, FormMethod) {
    var ClientData = Doc.getElementById(ClientFormID);
    return new Promise(function (resolve, reject) { //宣告非同步执行
        let ButHtml = ClientThisBut.innerHTML; //紀錄按鈕
        let getURLs = new gettools({cDoc:Doc, cWin:Win});
        let but = (val) => {
            if (val == 0) {
                ButHtml = ClientThisBut.innerHTML; //紀錄按鈕
                ClientThisBut.disabled = true;
                ClientThisBut.innerHTML = "Loading...";
            }
            if (val == 1) {
                ClientThisBut.disabled = false;
                ClientThisBut.innerHTML = ButHtml;
            }
        }
        but(0);
        ActionPurpose = (ActionPurpose.toLowerCase().indexOf('http') == -1) ? getURLs.getURL(ActionPurpose) : ActionPurpose;
        if (ClientData) {

            let XmlHttp = new XMLHttpRequest();
            XmlHttp.addEventListener("readystatechange", function () {
                switch (XmlHttp.status) {
                    case 0:
                        break;
                    case 200:
                        if (XmlHttp.readyState == 4) {
                            resolve(XmlHttp.responseText);  //完成后发送完成讯息
                            but(1);
                        }
                        break;
                    default:
                        reject("0");  //失败发送讯息
                        break;
                }
            });
            XmlHttp.open(FormMethod, ActionPurpose);
            XmlHttp.send(new FormData(ClientData));
        } else {
            reject("404");
            but(1);
        }
    });
}