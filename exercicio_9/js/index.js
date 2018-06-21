var div = document.getElementById("div1")
    
div.style.width = '225px';
div.style.height = '225px';
div.style.backgroundColor = '#ff0000';

div.style.position = 'absolute';
div.style.top = '100px';
div.style.left = '50px';

var tmp = 0
var tmp2 = 0

start()

function start(){
    var btn = document.getElementById("btnStart")
    btn.onclick = function(){
        setInterval(move,100)
    }
}

function move(){
    if(tmp < 100){
        var leftAtual = parseInt(div.style.left, 10);
        div.style.left = (leftAtual + 10) + 'px';
        tmp++
    }else{
        if(tmp2 < tmp){
            var leftAtual2 = parseInt(div.style.left,10)
            div.style.left = (leftAtual2 - 10) + 'px'
            tmp2++
        }else{
            tmp = 0
            tmp2 = 0
        }
    }
}