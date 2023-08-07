const fomr = document.getElementById('info')
let linhas = '';


fomr.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numb');


    if (inputNumero.value.length < 7){
        alert ('insira um numero valido')
        console.log('numero invalido');
    }else{    let linha =`<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;

    linhas +=linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    console.log(inputNome.value , inputNumero.value);}

    }



);



