const trt = 0.5;

var header = document.querySelector(".header");
var logo = document.querySelector(".logo");
var hlink = document.querySelector(".header-link");
var footer = document.querySelector(".footer");
var search = document.querySelector(".search");
var fbtm = document.querySelector(".footer-bottom");
var ftop = document.querySelector(".footer-top");
var flist = document.querySelector(".ftop");
var msg = document.querySelector(".message");
var main = document.querySelector(".main");
var losin = document.querySelector(".losin");
var pgtitle = document.querySelector(".pt");
pgtitle.style.transition = "all "+String(trt)+"s";
main.style.transition = "all "+String(trt)+"s";
flist.style.transition = "all "+String(trt)+"s";
fbtm.style.transition = "all "+String(trt)+"s";
ftop.style.transition = "all "+String(trt)+"s";
search.style.transition = "all "+String(trt)+"s";
footer.style.transition = "all "+String(trt)+"s";
hlink.style.transition = "all "+String(trt)+"s";
logo.style.transition = "all "+String(trt)+"s";
header.style.transition = "all "+String(trt)+"s";
window.onscroll = () => {
    if(window.scrollY != 0){
        header.style.height = "90px";
        header.style.marginTop = "10px";
        header.style.width = "100%";
        header.style.position = "fixed";
        header.style.boxShadow = "0 10px 10px gray";
        logo.style.width = "80px";
        logo.style.height = "60px";
        hlink.style.marginTop = "10px";
        hlink.style.width = "700px";
        search.style.display = "block";
        search.style.float = "left";
        search.style.top = "0";
        main.style.paddingTop = "200px";
        pgtitle.style.fontSize = "40px";
        pgtitle.style.paddingTop = "0";
    }
    else{
        header.style.height = "300px";
        header.style.marginTop = "0";
        header.style.width = "96%";
        logo.style.width = "342px"
        hlink.style.width = "400px";
        hlink.style.marginTop = "20px";
        logo.style.height = "253px";
        search.style.top = "195px";
        main.style.paddingTop = "300px";
        pgtitle.style.paddingTop = "20px";
        pgtitle.style.fontSize = "70px";
    }
    if((window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight){
        footer.style.height = "300px";
        footer.style.width = "100%";
        ftop.style.height = "75%";
        fbtm.style.height = "25%";
        flist.style.width = "300px";
        flist.style.marginTop = "-5px";
        msg.style.display = "inherit";
    }
    else{
        footer.style.height = "60px";
        footer.style.width  = " 96%";
        ftop.style.height = "100%";
        fbtm.style.height = "0";
        flist.style.width = "100%";
        flist.style.marginTop = "0px";
        msg.style.display = "none";
    }
}