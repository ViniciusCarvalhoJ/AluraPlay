// Importa a função 'conectaApi' do módulo 'conectaApi.js'
import { conectaApi } from "./conectaApi.js";

// Seleciona o elemento HTML que tem o atributo 'data-lista' e o armazena na constante 'lista'
const lista = document.querySelector("[data-lista]");

// Função que constrói e retorna um card de vídeo
export default function constroiCard(titulo, descricao, url, imagem) {
    // Cria um elemento <li> para representar um item de lista
    const video = document.createElement("li");
    // Adiciona a classe 'videos__item' ao elemento <li>
    video.classList = 'videos__item';
    
    // Define o conteúdo HTML do elemento <li>, incluindo um iframe do YouTube e a descrição do vídeo
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>`;
    
    // Retorna o elemento <li> completo, que representa o card do vídeo
    return video;
}

// Função assíncrona que lista os vídeos
async function listaVideos() {
    try {
        // Chama a função 'listaVideos' do módulo 'conectaApi' e espera a resposta
        const listaApi = await conectaApi.listaVideos();
        lista.innerHTML = ''; // Limpa a lista existente
        listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
        
    } catch{
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar a lista de vídeos</h2>`
    }
        
}

// Chamando a função listaVideos para carregar os vídeos
listaVideos();
