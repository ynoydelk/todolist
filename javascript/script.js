function adicionarTarefa() {
    let valorDoInput = document.querySelector("input").value /* a let "valorDoInput" tá sendo tipo uma gaveta, o document.queryselector está guardando o meu input e o .value está dizendo para o código pegar apenas o valor, pq sem o .value ele pega o código input ao todo. */

    let li = document.createElement("li")
    li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>'

    /* o "this" está tipo, apontando para quem eu estou chamando no deletar tarefa. */

    /* o li.innerHTML tá ai para colocar a li no html e o "=" tá dizendo para trazer o "valorDoInput" no caso a vaga de cima que trás o que tá escrito no input e o "+" tá dizendo para trazer junto a eles um span que é um emojizinho que eu botei.*/

    /* o createElemet está dizendo para criar um elemento, no caso criei uma li.*/

    document.querySelector("ul").appendChild(li)
    document.querySelector("input").value = "" /* zerando o valor do input para adicionar outra. */
    /* estou pegando a ul lá do html e colocando "um filho" nela ADKSAKDAKD, tipo, tô colocando uma li nela no caso. */
}

function deletarTarefa(li){
    li.parentElement.remove() /* e aqui por ultimo é só para deletar a tarefa quando eu clicar no x. */
}