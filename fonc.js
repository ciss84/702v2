function removeScript(){let head=document.getElementsByTagName("head")[0],scripts=head.getElementsByTagName("script");
for (let i=scripts.length;i > 0;i--){head.removeChild(scripts[i - 1]);}} 
function addDays(days){let result=new Date();result.setDate(result.getDate()+days);return result;}
function createCookie(name,value){let expire=addDays(30);document.cookie=name+"="+value+";expires="+expire.toUTCString();}
function modifyCookie(name,value){let expire=addDays(30);document.cookie=name+"="+value+";expires="+expire.toUTCString();}
function getCookie(name){let dc=document.cookie;let prefix=name+"=";let begin=dc.indexOf(";"+prefix);if (begin == -1){begin=dc.indexOf(prefix);
    if (begin != 0) 
    return null;}
    else return readCookie(name);}function readCookie(ex){const cookieValue=document.cookie .split(";") .find((row) => row.startsWith(ex)) .split("=")[1];
    return cookieValue;}function finished(){
        switch (readCookie("kex")){
            case "henSP80": removeScript();
            break;
            case "henSP82": removeScript();
            break;
            case "henSP6": removeScript();           
            break;
            case "henSP7": removeScript();
            break;
            case "ps4henvtx-702": removeScript();
            break;
            case "cache": removeScript();
            break;
            case "FTP": removeScript();
            break;
            case "gdumper": removeScript();
            break;
            case "DB_SG_Backup": removeScript();
            break;
            case "ps4debug": removeScript();
            break;
            case "linux702-3gb": removeScript();
            break;
            case "linux702": removeScript();
            break;
            case "linux702b": removeScript();
            break;
            case "arabic-guy100": removeScript();
            break;
            case "arabic-guy127": removeScript();
            break;
            case "arabic-guy132": removeScript();
            break;
            case "BeefQueefMod": removeScript();    
            break;
            case "BeefQueefMod133": removeScript();
            break;}}
function loadPayload(payload){getCookie("kex") === null ? createCookie("kex",payload):modifyCookie("kex",payload);setTimeout(function (){let tab=[payload,"c-code"];
for (let i=0;i < tab.length;i++){let element=document.createElement("script");
if (i == 0) element.src=PAYLOAD(tab[i]);
else element.src=SCMIRA(tab[i]);document.getElementsByTagName("head")[0].appendChild(element);}},1500);}