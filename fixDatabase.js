const fs = require('fs');

// Lê um arquivo JSON
function lerArquivo(caminho) {
    let dados = fs.readFileSync(caminho, 'utf8');
    return JSON.parse(dados);
}

// Corrige os dados
function corrigirDados(dados) {
    // Mapeamento de caracteres corrompidos para seus equivalentes corretos
    const charMap = {
        'æ': 'a', // æ -> a
        'ø': 'o'  // ø -> o
    };

    // Função para corrigir strings
    function corrigirTexto(texto) {
        if (typeof texto !== 'string') return texto; // Retorna se não for string
        let corrigido = texto;
        for (const [corrompido, correto] of Object.entries(charMap)) {
            corrigido = corrigido.split(corrompido).join(correto); // Substitui todos
        }
        return corrigido;
    }

    // Aplica as correções em todos os itens
    return dados.map(item => {
        // Itera sobre todas as propriedades do objeto
        for (let chave in item) {
            if (typeof item[chave] === 'string') {
                item[chave] = corrigirTexto(item[chave]); // Corrige texto nas propriedades
            }
        }
        return item;
    });
}

// Salva o arquivo corrigido
function salvarArquivo(caminho, dados) {
    fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
    console.log(`Arquivo corrigido salvo em: ${caminho}`);
}

// Processo principal
function main() {
    const arquivosEntrada = ['broken_database_1.json', 'broken_database_2.json'];
    const arquivosSaida = ['fixed_database_1.json', 'fixed_database_2.json'];

    for (let i = 0; i < arquivosEntrada.length; i++) {
        try {
            let dados = lerArquivo(arquivosEntrada[i]); // Lê os dados
            let corrigidos = corrigirDados(dados);      // Corrige os dados
            salvarArquivo(arquivosSaida[i], corrigidos); // Salva o resultado
        } catch (erro) {
            console.error(`Erro ao processar o arquivo ${arquivosEntrada[i]}:`, erro.message);
        }
    }
}

main();
