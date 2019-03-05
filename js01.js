window.onload=function () {
    var btn = document.querySelector('button');
    btn.onclick=function(){
        var p = document.createElement('p');
        var text = document.createTextNode("hello, first github page demp!");
        p.appendChild(text);
        document.body.appendChild(p);
    }
}
