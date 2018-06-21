listenerButton();

function listenerButton(){
    var btn = document.getElementById('btnAdd')
    btn.onclick = function(){
        start()
    }
}

function start(){
    var inputName = document.getElementById('name')
    var inputEmail = document.getElementById('email')
    var inputCpf = document.getElementById('cpf')

    if(validateField(inputName) && validateField(inputEmail) && validateField(inputCpf)){

        saveAluno(inputName, inputEmail, inputCpf)
        clearFields(inputName,inputEmail,inputCpf)

    }else{
        alert('Por faver, digite todos os campos!')
    }


}

function validateField(input){
    return input.value.trim() != "";
}

function saveAluno(inputName, inputEmail, inputCpf){
    var tr = createLine()
    var tdName = createTableData(inputName.value)
    var tdEmail = createTableData(inputEmail.value)
    var tdCpf = createTableData(inputCpf.value)

    tr.appendChild(tdName)
    tr.appendChild(tdEmail)
    tr.appendChild(tdCpf)

    var table = document.getElementById('tblAlunos')

    addTableLine(tr)

}

function createLine(){
    var tr = document.createElement('tr')
    return tr
}

function createTableData(content){
    var td = document.createElement('td')
    td.innerHTML = content
    return td
}

function addTableLine(tr){
    var table = document.getElementById('tblAlunos')
    table.appendChild(tr)
}

function clearFields(inputName, inputEmail, inputCpf){

    inputName.value = ""
    inputEmail.value = ""
    inputCpf.value = ""
    inputName.focus()

}   