

function start(){

    var btn = document.getElementById('btnSum');
if (btn != null){
    btn.onclick = function(){
        
    }
};

    btn.onclick = function(){
        sum();
    }
}

function sum(){

    var inputA = document.getElementById('numberA');
    var inputB = document.getElementById('numberB');
    var inputC = document.getElementById('numberC');

    var a = parseInt(inputA.value,10);
    var b = parseInt(inputB.value, 10);

    inputC.value = c;
}

window.onload = function (){

        start();
};                                                                                                                             