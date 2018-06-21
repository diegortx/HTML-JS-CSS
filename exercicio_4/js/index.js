start();

function start(){
    var btn = document.getElementById("btnAdd")
    btn.onclick = function(){

        var nome = document.getElementById('nome')

        if(validateName(nome)){
            addList(nome)
        }else{
            alert('Erro')
        }
        clearInput(nome)
    };
}

function validateName(nome){
    return nome.value.trim() != ''
}

function addList(nome){

    var newItemList = createItemList(nome.value)

    var ul = document.getElementById('list');

    ul.appendChild(newItemList);

}

function createItemList(content){
    var newList = document.createElement('li');
    newList.innerHTML = content;
    return newList
}

function clearInput(nome){
    nome.value = ''
    nome.focus()
}