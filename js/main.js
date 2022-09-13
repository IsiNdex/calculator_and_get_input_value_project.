// kalkulyatorun funksiyalari //

function ekran(val){
    document.getElementById('result').value += val
    return val
}

function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);

    document.getElementById('result').value = y
    return y
}

function clearScreen(){
    document.getElementById('result').value = ''
}

// ----------------------------------//
// ----------------------------------//
// ----------------------------------//

// inputun funksiyalari//
function input_func(){
    var txtVal = document.getElementById('yziinp').value,
    listNode = document.getElementById('list'),
    liNode = document.createElement("LI"),
    txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
}
// ----------------------------------//
// ----------------------------------//
// ----------------------------------//