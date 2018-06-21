start();

function start(){
    var btn = document.getElementById('btnApply')
    btn.onclick = function(){
        changeStyle()
    }
}

function changeStyle(){
    var inputColor = document.getElementById('color')
    var inputWidth = document.getElementById('width')
    var inputHeight = document.getElementById('height')

    var div = document.getElementById('myDiv')
    div.style.color = inputColor.value
    div.style.width = inputWidth.value + 'px'
    div.style.height = inputHeight.value + 'px'


} 