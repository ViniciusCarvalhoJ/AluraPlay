// Importa o objeto 'conectaApi' do módulo 'conectaApi.js'
import { conectaApi } from "./conectaApi.js";

// Seleciona o formulário no documento HTML que possui o atributo 'data-formulario'
const formulario = document.querySelector("[data-formulario]");

// Função assíncrona 'criarVideo' que é chamada quando o formulário é submetido
async function criarVideo(evento) {
    // Previne o comportamento padrão do evento de submit do formulário, que é recarregar a página
    evento.preventDefault();

    // Seleciona e obtém o valor do campo de entrada com o atributo 'data-imagem'
    const imagem = document.querySelector("[data-imagem]").value;
    
    // Seleciona e obtém o valor do campo de entrada com o atributo 'data-url'
    const url = document.querySelector("[data-url]").value;
    
    // Seleciona e obtém o valor do campo de entrada com o atributo 'data-titulo'
    const titulo = document.querySelector("[data-titulo]").value;
    
    // Gera uma descrição aleatória, convertida para string, como um número aleatório entre 0 e 9
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        // Chama a função 'criaVideo' do objeto 'conectaApi' para criar um novo vídeo
        // Aguarda a conclusão da função assíncrona antes de prosseguir
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
    
        // Redireciona o usuário para a página 'envio-concluido.html' após o vídeo ser criado com sucesso
        window.location.href = "../pages/envio-concluido.html";
    } catch(e){
        alert (e);
    }

}

// Adiciona um ouvinte de evento para o evento 'submit' do formulário
// Quando o formulário for submetido, chama a função 'criarVideo'
formulario.addEventListener("submit", evento => criarVideo(evento));
