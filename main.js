const form =document.getElementById('form-agenda');
let linhas = "";

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputNome =document.getElementById("name");
    if(!validaNome(inputNome.value)) {

        alert("Digite o nome completo");

    }

    const inputtel =document.getElementById("tel");



    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputtel.value}</td>`;
    linha += "</tr>"

    linhas += linha;

    const corpoTabela =document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputtel.value = '';




});