let userAgent = navigator.userAgent.toLowerCase();
function isPC() {
    var Agents = new Array("android", "iphone", "symbianos", "windows phone", "ipad", "ipod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgent.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
let Device = {
    uc: RegExp("android").test(userAgent) && RegExp("UC").test(userAgent) ? true : false,
    wechat: RegExp("micromessenger").test(userAgent) ? true : false,
    iphone: RegExp("iphone").test(userAgent) || RegExp("ipod").test(userAgent) || RegExp("ipad").test(userAgent) ? true : false,
    android: RegExp("android").test(userAgent) ? true : false,
    pc: isPC(),
    ie: (/msie/.test(userAgent)) && (!/opera/.test(userAgent))

};


export default  Device;