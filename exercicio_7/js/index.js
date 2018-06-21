start()

function start(){
    var add = document.getElementById('btn')
    add.onclick = function(){
        addItem()
    }
}

function addItem(){

    var tdName = document.createElement('td')
    var tdEmail = document.createElement('td')
    var tdCpf = document.createElement('td')
    var tdButton = document.createElement('button')
    var tr = document.createElement('tr')

    tdName.innerHTML = document.getElementById('name').value
    tdEmail.innerHTML = document.getElementById('email').value
    tdCpf.innerHTML = document.getElementById('cpf').value
    tdButton.onclick = function(){
        removeElement(tr)}
    tdButton.innerHTML = 'Remove'

    var element = document.getElementById('element')

    tr.appendChild(tdName)
    tr.appendChild(tdEmail)
    tr.appendChild(tdCpf)
    tr.appendChild(tdButton)
    element.appendChild(tr)

}

function removeElement(tr){
    document.getElementById('element').removeChild(tr)
}

