start()

function start(){
    var button = document.getElementById('btn')
    button.onclick = function(){
        addParagraphs()
    }
}

function addParagraphs(){
    var inputNum = document.getElementById('num')
    var inputCont = document.getElementById('cont')

    if(validateField(inputNum) && validateField(inputCont)){
        createParagraphs(inputNum, inputCont)
        clearField();
    }else{
        alert('Digite todos os campos')
    }
}

function validateField(input){
    return input.value.trim() != ''
}

function createParagraphs(inputNum, inputCont){
    var max = parseInt(inputNum.value,10)

    for(var i=0; i < max ; i++){
        var p = document.createElement('p')
        p.onclick = removeElement
        p.innerHTML = inputCont.value
        document.body.appendChild(p)
    }

}

function removeElement(){
    document.body.removeChild(this)
}