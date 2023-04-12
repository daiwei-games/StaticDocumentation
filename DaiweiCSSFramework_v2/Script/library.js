//產生亂數號碼
//參數 放入產生幾位亂數
function RandomNumber(e) {
    let f = "10";
    let rd;
    if (typeof e == "number") {
        for (var i = 1; i < Number(e); i++) {
            f += "0";
        }
        rd = Math.floor(Math.random() * Number(f)).toString();

        if (rd.length < e) //補足位數
            rd += Math.floor(Math.random() * Number(10)).toString();
    } else
        rd = "error";
    return rd;
};