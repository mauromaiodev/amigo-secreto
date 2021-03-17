function sortearAmigoScreto(nomes) {
    const nomesEmbaralhados = nomes.sort(condicaoOrdenacao);

    function condicaoOrdenacao( ) {
        return Math.random( ) - 0.5;
    }
}

nomesEmbaralhados.forEach((nome, index) => {
    if(index == (nomesEmbaralhados.lenght - 1)) {
        return console.log(`${nome} saiu com ${nomesEmbaralhados[0]}`);
    }

    console.log(`${nome} saiu com ${nomesEmbaralhados[index + 1]}`);
});

sortearAmigoScreto(['Mauro Maio', 'Felipe Castro', 'Vitor Gomes']);