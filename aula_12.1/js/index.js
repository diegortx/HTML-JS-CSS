start();

function start(){
    var btn = document.getElementById("btnAdd");
    

    btn.onclick = function(){
        var inputName = document.getElementById("nome");

        if(inputName.value.trim() == ""){
            alert("Digite alguma coisa !");
            inputName.focus();
        }else{       
        addNewElement(inputName);
        inputName.value = "";
        inputName.focus();
        }
    };
}
function addNewElement(inputName){
    
     
     var newListItem = document.createElement("li");
     newListItem.innerHTML = inputName.value;

     var list = document.getElementById("contactList");
     list.appendChild(newListItem);

}

