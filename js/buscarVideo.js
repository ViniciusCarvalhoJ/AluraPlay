// Importa o objeto 'conectaApi' do módulo 'conectaApi.js'
import { conectaApi } from "./conectaApi.js";

// Importa a função 'constroiCard' do módulo 'mostrarVideos.js'
import constroiCard from "./mostrarVideos.js";

// Função assíncrona 'buscarVideo' que é chamada quando o botão de pesquisa é clicado
async function buscarVideo(evento) {
    // Previne o comportamento padrão do evento de clique, que poderia ser enviar um formulário
    evento.preventDefault();

    // Seleciona o campo de entrada de pesquisa no documento HTML que possui o atributo 'data-pesquisa' e obtém seu valor
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    
    // Chama a função 'buscarVideo' do objeto 'conectaApi' passando o termo de pesquisa e aguarda a resposta
    const busca = await conectaApi.buscarVideo(dadosDePesquisa);

    // Seleciona o elemento de lista no documento HTML que possui o atributo 'data-lista'
    const lista = document.querySelector("[data-lista]");

    // Remove todos os filhos (elementos) do elemento de lista para limpar os resultados anteriores
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    // Itera sobre os resultados da busca e adiciona cada um como um novo elemento na lista
    // 'constroiCard' é uma função que cria um elemento HTML representando um vídeo
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if(busca.lenght == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Nao existe videos com esse termo</h2>`
    }
}

// Seleciona o botão de pesquisa no documento HTML que possui o atributo 'data-botao-pesquisa'
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

// Adiciona um ouvinte de evento para o evento 'click' do botão de pesquisa
// Quando o botão é clicado, chama a função 'buscarVideo'
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
