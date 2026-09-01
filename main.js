const numeroSenha = document.querySelector('#valor-comprimento');
let tamanhoSenha = 12;

const btnDiminuir = document.querySelector('#btn-diminuir');
const btnAumentar = document.querySelector('#btn-aumentar');
const campoSenha = document.querySelector('#input-senha');
const btnGerar = document.querySelector('.btn-principal');

// Listas de caracteres mapeadas na aula 7
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Seleciona todas as checkboxes que usam a classe parametro-senha
const checkboxes = document.querySelectorAll('.parametro-senha');

btnDiminuir.onclick = diminuirTamanho;
btnAumentar.onclick = aumentarTamanho;
btnGerar.onclick = gerarSenha;

function diminuirTamanho() {
    if (tamanhoSenha > 6) {
        tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentarTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function gerarSenha() {
    let alfabeto = '';

    // Verifica quais checkboxes estão marcadas para criar o alfabeto
    if (checkboxes[0].checked) alfabeto += letrasMaiusculas;
    if (checkboxes[1].checked) alfabeto += letrasMinusculas;
    if (checkboxes[2].checked) alfabeto += numeros;
    if (checkboxes[3].checked) alfabeto += simbolos;

    let senhaGerada = '';

    // Laço de repetição for que sorteia caractere por caractere
    for (let i = 0; i < tamanhoSenha; i++) {
        let indiceAleatorio = Math.floor(Math.random() * alfabeto.length);
        senhaGerada += alfabeto[indiceAleatorio];
    }

    // Exibe a senha gerada dentro do input
    campoSenha.value = senhaGerada;
}
