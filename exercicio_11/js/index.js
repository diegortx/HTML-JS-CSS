var cards = [
    'one.png',
    'two.png',
    'three.png',
    'four.png',
    'five.png',
    'six.png',
    'seven.png',
    'eight.png',
    'nine.png',
    'one.png',
    'two.png',
    'three.png',
    'four.png',
    'five.png',
    'six.png',
    'seven.png',
    'eight.png',
    'nine.png'
]

var newCard = shuffle(cards)
console.log(newCard)

start()

function start(){

    var btnStart = document.getElementById("start")
    btnStart.onclick = function(){
        loadImg()
    }

}

function loadImg(){
    var tela = document.getElementById("images-content")
    var i

    for(i=0; i< 18; i++){
        var newDiv = createDiv(i)
        tela.appendChild(newDiv)
    }
}

function createDiv(i){
    var nDiv = document.createElement('div')
    var newImg = createImg(i)
    nDiv.className = "div-adj"
    nDiv.appendChild(newImg)
    return nDiv
}

function createImg(i){
    var img = document.createElement("img")
    img.src = "./images/game.png"
    img.className = "img-responsive"
    img.id = i
    img.onclick = function(){
        img.src = "./images/"+newCard[i]
    }
    return img
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}