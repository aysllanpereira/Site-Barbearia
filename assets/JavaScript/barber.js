// rolagem de página
// pegando o corpo da página
const element = document.body;

// função rolagem de página suave
function rolagemPagina(elemento) {
    // selecionando o elemento e fazendo com que seja suave a rolagem de página com o smooth
    document.querySelector(elemento).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#menuInicio").addEventListener("click", function(event) {
    // tirando o efeito padrão 
    event.preventDefault();
    // colocando a função ao elemento da página
    rolagemPagina("#btinicio");
});

// selecionando o elemento e adicionando um evento de click pra ele
document.querySelector("#menuServicos").addEventListener("click", function(event) {
    // tirando o efeito padrão 
    event.preventDefault();
    // colocando a função ao elemento da página
    rolagemPagina("#btservicos");
});

document.querySelector("#menuGalery").addEventListener("click", function(event) {
    // tirando o efeito padrão 
    event.preventDefault();
    // colocando a função ao elemento da página
    rolagemPagina("#btgaleria");
});

document.querySelector("#menuContatos").addEventListener("click", function(event) {
    // tirando o efeito padrão 
    event.preventDefault();
    // colocando a função ao elemento da página
    rolagemPagina("#btfale-conosco");
});

// função para mostrar os valores de cada serviço ao clicar nos botões

function exibir(servico) {
    // recebe os elementos 
    const valorCabeloBarba = document.getElementById("cabelobarba");
    const valorBarba = document.getElementById("barb");
    const valorCabelo = document.getElementById("cab");

    // verifica qual serviço foi passado/selecionado
    switch (servico)  {

        case "cabelo-barba":
            // verifica se está vazio 
            if(valorCabeloBarba.innerText.trim() !== "") {
                valorCabeloBarba.innerText = "";
            } else {
                // se não estiver vazio é preenchido com o valor
                valorCabeloBarba.innerText = `Valor R$25,00 para Cabelo & Barba`;
            }
            break;
        
        case "barba": 
            // verifica se está vazio
            if(valorBarba.innerText.trim() !== "") {
                valorBarba.innerText = "";
            } else {
                // se não estiver vazio é preenchido com o valor
                valorBarba.innerText = "Valor R$15,00 para Barba";
            }
            break;

        case "cabelo":
            // verifica se está vazio
            if(valorCabelo.innerText.trim() !== "") {
                valorCabelo.innerText = "";
            } else {
                // se não estiver vazio é preenchido com o valor
                valorCabelo.innerText = "Valor R$10,00 para Cabelo";
            }
            break;
            // caso dê erro, informa que o serviço é desconhecido
            default:
                console.error("Serviço desconhecido", servico); 
    
    }
   
}

// após o carregamento total da página, aciona a função exibir ao clicar no botão
document.addEventListener("DOMContentLoaded", function() {
    // elemento de cada button
    const buttonCabeloBarba = document.getElementById("btcortes");
    const buttonBarba = document.getElementById("btbarba");
    const buttonCabelo = document.getElementById("btcabelo");

    // ao clicar no botão, irá exibir os valores de cada case
    buttonCabeloBarba.addEventListener("click", () => {
            exibir("cabelo-barba");
    });

    buttonBarba.addEventListener("click", () => {
        exibir("barba");
    });

    buttonCabelo.addEventListener("click", () => {
        exibir("cabelo");
    });
});





