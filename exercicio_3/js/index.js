somar()

function somar(){
    var b_somar = document.getElementById('btn_somar')

    listenerButton(b_somar)

}

function listenerButton(b_somar){
    b_somar.onclick = function(){
        var a = document.getElementById('number_a')
        var b = document.getElementById('number_b')
        var c = document.getElementById('number_c')
        c.value = parseInt(a.value) + parseInt(b.value)
    }
}