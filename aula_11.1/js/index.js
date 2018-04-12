

function start(){

    var btn = document.getElementById('btnCalc');

if (btn != null){
    btn.onclick = function(){

    }
};

    btn.onclick = function(){
        calc();
    }
}

function calc(){

    var inputA = document.getElementById('numberA');
    var inputCalc = document.getElementById('operador')
    var inputB = document.getElementById('numberB');
    var inputC = document.getElementById('numberC');

    var a = parseInt(inputA.value,10);
    var b = parseInt(inputB.value, 10);

    if(isNaN(a) ||  isNaN(b)){
        alert('Digite um numero válido!');
    }
    
    if(inputCalc.value == '+') {
        var c = a + b ;
        inputC.value = c;
    }
    if(inputCalc.value == '-'){
    var c = a - b ;
    inputC.value = c;
    }
    if(inputCalc.value == '/'){
        var c = a / b ;
        inputC.value = c;
    }
    if(inputCalc.value == '*'){
        var c = a * b ;
        inputC.value = c;
    }

    window.alert("Calculado com SUCESSO !");
}


window.onload = function (){

        start();
};