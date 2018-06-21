start();

function start(){
    var content = document.getElementById('content')
    var btnAdd = document.getElementById('btn')
    btnAdd.onclick = function(){
        addParagrafo();
    }
}

function addParagrafo(){

    var qtd = parseInt(document.getElementById('num').value)

    for(var i = 0; i < qtd; i++){
        newParagrafo();
    }
    
}

function newParagrafo(){
    
    var parag = document.getElementById('paragrafo')
    var newParag = createParag(content)
    parag.appendChild(newParag)
}

function createParag(content){
    var p = document.createElement('p')
    p.innerHTML = content.value
    return p
}