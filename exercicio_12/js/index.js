var contas = []

loadDataFromLocalStorage()

var saldo = 0;

start()

function start(){
    var btn = document.getElementById('Salvar')
    btn.onclick = function(){
        salvarDados()
    }
}

function salvarDados(){

    var inputDescricao = document.getElementById('descricao')
    var inputTipo = document.getElementById("tipo")
    var inputData = document.getElementById("data")
    var inputValor = document.getElementById("valor")
    var newSaldo = document.getElementById("saldo")

    if(inputTipo.value === "pagar"){
        newSaldo.value = 50
        
    }else{
        newSaldo.value = 100
    }

    var conta = {
        descricao: inputDescricao.value,
        tipo: inputTipo.value,
        data: inputData.value,
        valor: inputValor.value,
    }

    contas.push(conta)
    clearTable()
    populateTable()
    saveLocalStorage()

}

function clearTable(){
    var table = document.getElementById('tabela_conta')
    var tBody = table.tBodies[0]
    for(var i = tBody.children.length; i > 0; i--){
        var tr = tBody.children[i-1]
        tBody.removeChild(tr)
    }
}

function saveLocalStorage(){
    
    var data = JSON.stringify(contas)
    localStorage.setItem("contas", data)

}

function loadDataFromLocalStorage(){
    var accountSaved = localStorage.getItem("contas")
    if(accountSaved){
        contas = JSON.parse(accountSaved)
        populateTable()
    }
}

function populateTable(){
    var table = document.getElementById('tabela_conta')
    
    for(i=0; i < contas.length; i++){
        var conta = contas[i]
        var tr = document.createElement('tr')
        var tdDescricao = document.createElement('td')
        var tdTipo = document.createElement('td')
        var tdData = document.createElement('td')
        var tdValor = document.createElement('td')

        tdDescricao.innerHTML = conta.descricao;
        tdTipo.innerHTML = conta.tipo
        tdData.innerHTML = conta.data
        tdValor.innerHTML = conta.valor

        tr.appendChild(tdDescricao)
        tr.appendChild(tdTipo)
        tr.appendChild(tdData)
        tr.appendChild(tdValor)

        table.tBodies[0].appendChild(tr)

    }

}