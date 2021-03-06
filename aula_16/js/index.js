var editRowIndex = -1

start();

function start() {

    var button = document.getElementById('btnAdd');
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

            if(editRowIndex ==-1){
                createContact(inputName, inputCPF, inputEmail);
            }else{
                updateContact(inputName, inputCPF, inputEmail);
            }

        clearFields(inputName, inputCPF, inputEmail);
        editRowIndex = -1;
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
    var tbody = table.tBodies[0];
    tbody.appendChild(tr);
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
    if(editRowIndex != -1){
        alert('Voce está no modo edição!')
    }else{
        var td = this.parentNode;
        var tr = td.parentNode;
        var table = document.getElementById('tableItems');
        var tbody = table.tBodies[0];
        tbody.removeChild(tr);
    }
}

function editContact(){
    var td = this.parentNode;
    var tr = td.parentNode;
    editRowIndex = tr.rowIndex;

    var tableDatas = tr.childNodes;

    inputName = document.getElementById('name')
    inputCPF = document.getElementById('cpf')
    inputEmail = document.getElementById('email')

    inputName.value = tableDatas[0].innerHTML;
    inputCPF.value = tableDatas[1].innerHTML;
    inputEmail.value = tableDatas[2].innerHTML;
}

function updateContact(inputName, inputCPF, inputEmail){

    var myTable = document.getElementById('tableItems');
    var tbody = myTable.tBodies[0];
    var tr = tbody.children[editRowIndex];

    tr.childNodes[0].innerHTML = inputName.value;
    tr.childNodes[1].innerHTML = inputCPF.value;
    tr.childNodes[2].innerHTML = inputEmail.value;

}