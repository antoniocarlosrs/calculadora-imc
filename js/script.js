//variavel para buscar o formulário
const form = document.getElementById('form');

//Evento do formulário.
form.addEventListener('submit', function(event) {
    event.preventDefault() //impedir o carregamento da pagina quando enviar os dados.

    //buscando os valores dos inputs peso e da altura.
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    //Fazenda o calculo do IMC
    const imc = (weight / (height * height)).toFixed(2);

    //Buscando o valor do Calculo 
    const value = document.getElementById('value')
    let description = ''; //variavel da descrição do resultado.

    //cor dos resultados do calculo do IMC em alerta atenção
    value.classList.add('attention');

    // Tirar a class hidden
    document.getElementById('infos').classList.remove('hidden');

    //if de condições para aparecer o calculo de IMC na tela
    if (imc < 18.5) {
        description = 'Você esta abaixo do Peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        description = "Seu peso está ideal!";
        value.classList.remove('attention'); //Removendo o alerta vermleho.
        value.classList.add('normal'); // cor verde para peso ideal.
    } else if (imc > 25 && imc <= 30) {
        description = "Você está com Sobrepeso!"
    } else if (imc > 30 && imc <= 35) {
        description = "Você está com obsidade moderada!"
    } else if (imc > 35 && imc <= 40) {
        description = "Você está com obsidade severa!"
    } else {
        description = "Você está com obsidade morbita!"
    }

    //exibir valor do imc
    value.textContent = imc.replace('.', ',');

    //exibir a msg de descrição.
    document.getElementById('description').textContent = description;
});

// Não permitir digitar virgula, digitar somente ponto
document.addEventListener("DOMContentLoaded", function() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const errorMessageWeight = document.getElementById("error-message-weight");
    const errorMessageHeight = document.getElementById("error-message-height");

    weightInput.addEventListener("keypress", function(event) {
        if (event.key === ",") {
            event.preventDefault();
            showError(errorMessageWeight);
        }
    });
    
    heightInput.addEventListener("keypress", function(event) {
        if (event.key === ",") {
            event.preventDefault();
            showError(errorMessageHeight);
        }
    });

    // Função mensagem de erro.
    function showError(errorMessage) {
        errorMessage.style.display = "block"; // Exiber a msg de erro
        setTimeout(() => {  
            errorMessage.style.display = "none"; // Exiber a msg de erro, por tempo determinado de 2 segundos.
        }, 2000);
    }
});