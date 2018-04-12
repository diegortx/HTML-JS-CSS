start();

function start(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = function(){
        console.log("Diego");
        addNewElement();
    };

function addNewElement(){

     var newP = document.createElement("p");
     var div = document.getElementById("myDiv");

     div.appendChild(newP);
     newP.innerHTML = "Paragrafo novo !!!";

};

}