window.onload = function() {  
    setTimeout(changeColor, 3000);
  }
  
  function changeColor() {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#f78dbf';
    var paragraph = document.getElementsByTagName('h1')[0];
    paragraph.style.color = 'white';
  }

