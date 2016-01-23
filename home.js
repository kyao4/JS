/**
 * Created by K.Yao on 2016/1/22.
 */


function add(a, b) {
    b = b || 10;
    console.log(a + b);
}
//practice setTimeout
setTimeout(add, 6000, 10, 1);

// location object is the current url of document displayed in window
console.log(location.href);

// if we have fragment identifier #table-of-contents in url location will be changed but document.URL will not
console.log(document.URL);

//location = 'https://www.baidu.com';

console.log(navigator.geolocation);
console.log(name)
//var newWindow = open('', '_blank', 'width = 400, height = 300, status = yes, resizable = yes')
//newWindow.alert('redirecting to new site: https://www.google.com')
//newWindow.location = 'https://www.google.com'

for (p in document) {
    console.log(p)
}

document.body.class = 'haha'
for( e in document.forms) {
    console.log(e)
}

// find certain element
console.log(document.getElementsByTagName('p')[0].textContent)
console.log(document.getElementById("google").href)
// create element
var p1 = document.getElementsByTagName('p')[0]
var a_baidu = document.createElement('a')
a_baidu.href = 'http://www.baidu.com'
a_baidu.innerHTML = 'baidu'
p1.appendChild(a_baidu)


var elem = document.getElementById("animate");
var pos = 0;
var id = setInterval(frame, 5);
function frame() {
    if (pos == 350) {
        clearInterval(id);
    } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}

$('#hide').click(function () {
    $('p').hide()
})