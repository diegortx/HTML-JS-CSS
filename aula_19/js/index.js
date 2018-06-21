var factor = 5

start()

function start(){
    var btn = document.getElementById('btnStart')
    btn.onclick = function() {
        setInterval(moveImage,1)
        btn.disabled = true
    }
}

function moveImage(){
    var image = document.getElementById('imgBrasil')
    var currentMarging = image.style.marginLeft.replace("px","")

    if(currentMarging == ""){
        currentMarging = 0
    }else{
        currentMarging = parseInt(currentMarging,10)
    }

    if(currentMarging == 1000){
        factor = -5
    }else if(currentMarging == 0){
        factor = 5
    }

    currentMarging += factor
    image.style.marginLeft = currentMarging + "px"

}