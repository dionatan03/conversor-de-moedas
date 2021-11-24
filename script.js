function converter() {
  "use strict"

  //entrada do valor
  let valor = parseFloat(document.querySelector("#exampleInputEmail1").value);

  // valores de atribuição a cada moeda
  let valorDolar = 5.58;
  let valorEuro = 6.28;
  let valorDolarCanadense = 4.40;
  let valorLibra = 7.48;
  let valorPesoArgentino = 0.05;

  // pega todos os elementos value com name "escolha" e cada valor selecionado;
  let value = document.querySelector('[name=escolha]:checked').value;
  document.querySelector("#imagens").innerHTML

  let msg1 = 'US$ '
  let msg2 = '€ '
  let msg3 = 'C$ '
  let msg4 = '£ '
  let msg5 = '$ '

  // verifica se o valor selecionado é igual o que esta em cada if e se for o que esta selecionado faz o calculo.
  if (value === "dolar") {
    resposta.innerHTML = msg1.concat((valor / valorDolar).toFixed(2));
    //document.querySelector('#image').src = 'image/dolar.png';
  }
  else if (value === "euro") {
    resposta.innerHTML = msg2.concat((valor / valorEuro).toFixed(2));
    //document.querySelector('#image').src = 'image/euro.png';
  }
  else if (value === "dolar-canadense") {
    resposta.innerHTML = msg3.concat((valor / valorDolarCanadense).toFixed(2));
    //document.querySelector('#image').src = 'image/dolar-canadense.png';
  }
  else if (value === "libra") {
    resposta.innerHTML = msg4.concat((valor / valorLibra).toFixed(2));
    //document.querySelector('#image').src = 'image/libra.png';
  }
  else if (value === "peso-argentino") {
    resposta.innerHTML = msg5.concat((valor / valorPesoArgentino).toFixed(2));
    //document.querySelector('#image').src = 'image/peso-argentino.png';
  }
  else {
    resposta.innerHTML = "moeda não encontrado.";
  }
}

// função que atualiza a página web
function atualizar() {
  window.location.reload();
  resposta.innerHTML = 'limpeza realizada com sucesso!';
}

// função que recebe a imagem a cada input selecionado e aparece sua imagem depois de selecionada
function myFunction() {
  let value = document.querySelector('[name=escolha]:checked').value;
  if (value === "dolar") {
    document.querySelector('#image').src = 'image/dolar.png';
  }
  else if (value === "euro") {
    document.querySelector('#image').src = 'image/euro.png';
  }
  else if (value === "dolar-canadense") {
    document.querySelector('#image').src = 'image/dolar-canadense.png';
  }
  else if (value === "libra") {
    document.querySelector('#image').src = 'image/libra.png';
  }
  else if (value === "peso-argentino") {
    document.querySelector('#image').src = 'image/peso-argentino.png';
  }
  else {
    resposta.innerHTML = "moeda não encontrado.";
  }
}
