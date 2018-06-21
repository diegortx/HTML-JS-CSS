start();

function start(){

    var btn = document.getElementById('btn')
    btn.onclick = function() {
        addList();
    }
}

function addList(){

    var table = document.getElementById('element')

    var tr = document.createElement('tr')
    var tdNome = document.createElement('td')
    var tdEmail = document.createElement('td')
    var tdCpf = document.createElement('td')

    tdNome.innerHTML = document.getElementById('nome').value
    tdEmail.innerText = document.getElementById('email').value
    tdCpf.innerHTML = document.getElementById('cpf').value

    tr.appendChild(tdNome)
    tr.appendChild(tdEmail)
    tr.appendChild(tdCpf)

    table.appendChild(tr)

}