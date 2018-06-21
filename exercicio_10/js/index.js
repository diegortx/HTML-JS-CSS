start()

var cnt = 1

function start(){
    var btnNext = document.getElementById('next')
    btnNext.onclick = function(){
        nextImage()
    }
    var btnPrev = document.getElementById('prev')
    btnPrev.onclick = function(){
        prevImage()
    }
}

function nextImage(){
    var image = document.getElementById('container-img')
    var img2 = image.children
    switch(cnt){
        case 1: img2[0].src = "./images/two.jpg"
            cnt++
            break
        case 2: img2[0].src = "./images/three.jpg"
            cnt++
            break
        case 3: img2[0].src = "./images/four.jpg"
            cnt++
            break
        case 4: img2[0].src = "./images/one.jpg"
            cnt = 1
            break
    }  
}

function prevImage(){
    var image = document.getElementById('container-img')
    var img2 = image.children
    switch(cnt){
        case 4: img2[0].src = "./images/three.jpg"
            cnt--
            break
        case 3: img2[0].src = "./images/two.jpg"
            cnt--
            break
        case 2: img2[0].src = "./images/one.jpg"
            cnt--
            break
        case 1: img2[0].src = "./images/four.jpg"
            cnt = 4
            break
    }
}