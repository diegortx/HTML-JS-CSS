
var flag = null

var button = document.getElementById('btnAdd');

start();

function start() {

    button.onclick = function() {
        addContact();
    };
}

function addContact() {
    var inputName = document.getElementById('name');
    var inputCPF = document.getElementById('cpf');
    var inputEmail = document.getElementById('email');

    if (isValidField(inputName) && 
        isValidField(inputCPF) &&
        isValidField(inputEmail)) {
        createContact(inputName, inputCPF, inputEmail);
        clearFields(inputName, inputCPF, inputEmail);
    } else {
        alert('Preencha todos os campos!');
    }
}

function isValidField(field) {
    return field.value.trim() != '';
}

function createContact(inputName, inputCPF, inputEmail) {
    var tr = createLine();
    var tdName = createTableData(inputName.value);
    var tdCPF = createTableData(inputCPF.value);
    var tdEmail = createTableData(inputEmail.value);
    var tdExcluir = createTableData('');
    var tdEditar = createTableData('');
    tdExcluir.appendChild(createButtonElement());
    tdEditar.appendChild(createButtonEdit());

    tr.appendChild(tdName);
    tr.appendChild(tdCPF);
    tr.appendChild(tdEmail);
    tr.appendChild(tdEditar);
    tr.appendChild(tdExcluir);
    

    var table = document.getElementById('tableItems');
    table.appendChild(tr);
}

function createButtonEdit(){
    var button = document.createElement('input');
    button.value = 'Editar';
    button.onclick = editContact;
    button.type = 'button';
    return button;
}

function createButtonElement() {
    var button = document.createElement('input');
    button.value = 'Excluir';
    button.onclick = deleteContact;
    button.type = 'button';
    return button; 
}

function createLine() {
    var tr = document.createElement('tr');
    return tr;
}

function createTableData(content) {
    var td = document.createElement('td');
    td.innerHTML = content;
    return td;
}

function clearFields(inputName, inputCPF, inputEmail) {
    inputName.value = '';
    inputCPF.value = '';
    inputEmail.value = '';
    inputName.focus();
}

function deleteContact() {
    var td = this.parentNode;
    var tr = td.parentNode;
    var table = document.getElementById('tableItems');
    table.removeChild(tr);
}

function editContact(){
    var td = this.parentNode;
    var tr = td.parentNode;

    var tableDatas = tr.childNodes;

    inputName = document.getElementById('name')
    inputCPF = document.getElementById('cpf')
    inputEmail = document.getElementById('email')

    inputName.value = tableDatas[0].innerHTML;
    inputCPF.value = tableDatas[1].innerHTML;
    inputEmail.value = tableDatas[2].innerHTML;

    flag = 1;

    button.onclick = function(){
        if(flag != null){
            tableDatas[0].innerHTML = inputName.value;
            tableDatas[1].innerHTML = inputCPF.value;
            tableDatas[2].innerHTML = inputEmail.value;
            clearFields(inputName,inputCPF,inputEmail);
            flag = null;
        }else{
            start();
        }
    }
}