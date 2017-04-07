
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}


function highlightPage() {

  if (!document.getElementsByTagName) return false;
  var header = document.getElementsByTagName("header");
  if (header.length == 0) return false;
  var nav = header[0].getElementsByTagName("nav");
  if (nav.length == 0) return false;
  var links = nav[0].getElementsByTagName("a");
  if (links.length == 0) return false;
  for (var i = 0; i < links.length; i++) {
    var url = links[i].getAttribute("href");
    if (window.location.href.indexOf(url) != -1) {
      links[i].className = "here";
    }
  }
} 


addLoadEvent(highlightPage);