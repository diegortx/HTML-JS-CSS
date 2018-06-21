start();

function start(){
    var bnt = document.getElementById("btnAdd");
    bnt.onclick = function(){
        addNewElement();
    }
}

function addNewElement(){
    var newP = document.createElement('p');
    var div = document.getElementById('myDiv');

    div.appendChild(newP);
    newP.innerHTML = 'Novo Paragrafo!'

}