var op = 0
var num1 = 0
var num2 = 0
var calc = 0

start()

function start(){

    var one = document.getElementById('btn_one')
    var two = document.getElementById('btn_two')
    var three = document.getElementById('btn_three')
    var four = document.getElementById('btn_four')
    var five = document.getElementById('btn_five')
    var six = document.getElementById('btn_six')
    var seven = document.getElementById('btn_seven')
    var eight = document.getElementById('btn_eight')
    var nine = document.getElementById('btn_nine')
    var zero = document.getElementById('btn_zero')
    var soma = document.getElementById('btn_addition')
    var subtrai = document.getElementById('btn_subtraction')
    var mult = document.getElementById('btn_multiplication')
    var dividir = document.getElementById('btn_division')
    var result = document.getElementById('btn_result')
    var clear = document.getElementById('btn_clear')
    
    soma.onclick = function(){
        addValor(soma)
        op = '+'
    }

    subtrai.onclick = function(){
        addValor(subtrai)
        op = '-'
    }

    mult.onclick = function(){
        addValor(mult)
        op = '*'
    }

    dividir.onclick = function(){
        addValor(dividir)
        op = '/'
    }

    result.onclick = function(){
        calcular(num1,num2,op)
    }

    clear.onclick = function(){
        clearField()
    }

    one.onclick = function(){
        addValor(one)
        if(op == 0){
            num1 = num1 * 10 + 1
        }else{
            num2 = num2 * 10 + 1
        }
    }
    two.onclick = function(){
        addValor(two)
        if(op == 0){
            num1 = num1 * 10 + 2
        }else{
            num2 = num2 * 10 + 2
        }
    }
    three.onclick = function(){
        addValor(three)
        if(op == 0){
            num1 = num1 * 10 + 3
        }else{
            num2 = num2 * 10 + 3
        }
    }
    four.onclick = function(){
        addValor(four)
        if(op == 0){
            num1 = num1 * 10 + 4
        }else{
            num2 = num2 * 10 + 4
        }
    }
    five.onclick = function(){
        addValor(five)
        if(op == 0){
            num1 = num1 * 10 + 5
        }else{
            num2 = num2 * 10 + 5
        }
    }
    six.onclick = function(){
        addValor(six)
        if(op == 0){
            num1 = num1 * 10 + 6
        }else{
            num2 = num2 * 10 + 6
        }
    }
    seven.onclick = function(){
        addValor(seven)
        if(op == 0){
            num1 = num1 * 10 + 7
        }else{
            num2 = num2 * 10 + 7
        }
    }
    eight.onclick = function(){
        addValor(eight)
        if(op == 0){
            num1 = num1 * 10 + 8
        }else{
            num2 = num2 * 10 + 8
        }
    }
    nine.onclick = function(){
        addValor(nine)
        if(op == 0){
            num1 = num1 * 10 + 9
        }else{
            num2 = num2 * 10 + 9
        }
    }
    zero.onclick = function(){
        addValor(zero)
        if(op == 0){
            num1 = num1 * 10
        }else{
            num2 = num2 * 10
        }
    }

}

function addValor(valor){
    var resultado = document.getElementById('result')
    var span = document.createElement('span')
    span.innerHTML = valor.value
    resultado.appendChild(span)

}

function calcular(num1,num2,op){
    var result = document.getElementById('result')
    switch(op){
        case '+': calc = num1+num2
                break
        case '-': calc = num1 - num2
                break
        case '*': calc = num1 * num2
                break
        case '/': calc = num1 / num2
                break
    }
    var span = document.createElement('span')
    span.innerHTML = '= ' + calc
    result.appendChild(span)
}

function clearField(){
    var field = document.getElementById('result')
    for(var i = field.childNodes.length; i > 0; i--){
        var tr = field.childNodes[i-1]
        field.removeChild(tr)
    }
    num1 = 0
    num2 = 0
    calc = 0
    op = 0
}
