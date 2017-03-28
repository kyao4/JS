function changePic(whichPic) {
    var source = whichPic.getAttribute("href");
    var target = document.getElementById("placeholder");
    target.setAttribute("src", source);
}
// alert(typeof document.getElementById("purchases"));
// var p = document.getElementsByTagName("p");
// for (var i = 0; i < p.length; i++) {
//     var attri = p[i].getAttribute("title");
//     if (attri) {
//         alert(attri);
//     } else {
//         alert(attri);
//     }
// }
