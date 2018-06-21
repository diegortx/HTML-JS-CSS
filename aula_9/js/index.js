start();

function start(){

    var btnTest = document.getElementById('btn_test')
    if(btnTest != null ) {
    console.log(btnTest)
    console.log(btnTest.value)
    btnTest.value = 'Alterado via JS'
    }

    var numberA = document.getElementById('number_a')
    numberA.value = '1234'
    listenerButton(btnTest);

}

function listenerButton(btnTest){
    btnTest.onclick = function(){
        console.log('Ok')
    }
}

