// Função assíncrona para listar vídeos a partir de uma API
async function listaVideos() {
    // Realiza uma requisição HTTP GET para a URL especificada
    const conexao = await fetch("http://localhost:3000/videos");
    
    // Converte a resposta da requisição para JSON
    const conexaoConvertida = await conexao.json();
    
    // Retorna os dados convertidos
    return conexaoConvertida;
}

// Função assíncrona para criar um novo vídeo na API
async function criaVideo(titulo, descricao, url, imagem) {
    // Realiza uma requisição HTTP POST para a URL especificada com os dados do vídeo
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", // Método HTTP POST para envio de dados
        headers: {
            "Content-type": "application/json" // Cabeçalho indicando o tipo de conteúdo como JSON
        },
        // Corpo da requisição contendo os dados do novo vídeo convertidos para JSON
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`, // Adiciona "mil visualizações" à descrição
            url: url,
            imagem: imagem
        })
    });

    // Verifica se a requisição não foi bem-sucedida
    if (!conexao.ok) {
        // Lança um erro caso a requisição falhe
        throw new Error("Não foi possível criar o vídeo");
    }
    
    // Converte a resposta da requisição para JSON
    const conexaoConvertida = await conexao.json();

    // Retorna os dados convertidos
    return conexaoConvertida;
}

// Exporta as funções 'listaVideos' e 'criaVideo' como parte de um objeto 'conectaApi'
export const conectaApi = {
    listaVideos,
    criaVideo
};
