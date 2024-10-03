var valorTotal = [0,0];
var valorProduto = [50.00, 30.00];
var qtd = [0,0];

function adicionarItem(item){
    qtd[item] += 1;
    calcularTotal(item);
}

function removerItem(item){
    if (qtd[item] > 0){
        qtd[item] -= 1;
        calcularTotal(item);
    }    
}

function calcularTotal(item){
    var quantidade = document.getElementById('quantidade'+item);
    var total = document.getElementById('total'+item);
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item]
    total.innerHTML = valorTotal[item].toFixed(2);

    var valor = 0;
    for (var i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }
    valorTotalCompra.innerHTML = valor.toFixed(2);
}