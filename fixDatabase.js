const fs = require('fs');

// Função para ler um arquivo JSON
function lerArquivo(caminho) {
    if (fs.existsSync(caminho)) {
        let dados = fs.readFileSync(caminho, 'utf8');
        if (dados) {
            return JSON.parse(dados);
        } else {
            console.error(`O arquivo ${caminho} está vazio.`);
            return [];
        }
    } else {
        console.error(`O arquivo ${caminho} não foi encontrado.`);
        return [];
    }
}

// Função para corrigir os dados
function corrigirDados(dados) {
    const charMap = {
        'æ': 'a', // æ -> a
        'ø': 'o'  // ø -> o
    };

    // Corrige uma string específica
    function corrigirTexto(texto) {
        if (typeof texto === 'string') {
            let corrigido = texto;
            for (const corrompido in charMap) {
                if (texto.includes(corrompido)) {
                    corrigido = corrigido.split(corrompido).join(charMap[corrompido]);
                }
            }
            return corrigido;
        } else {
            return texto; // Se não for string, retorna como está
        }
    }

    if (Array.isArray(dados)) {
        return dados.map(item => {
            if (typeof item === 'object' && item !== null) {
                for (let chave in item) {
                    item[chave] = corrigirTexto(item[chave]);
                }
            }
            return item;
        });
    } else {
        console.error('Os dados fornecidos não são um array.');
        return [];
    }
}

// Função para salvar os dados corrigidos
function salvarArquivo(caminho, dados) {
    if (Array.isArray(dados)) {
        try {
            fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
            console.log(`Arquivo corrigido salvo em: ${caminho}`);
        } catch (erro) {
            console.error(`Erro ao salvar o arquivo ${caminho}:`, erro.message);
        }
    } else {
        console.error('Os dados não estão no formato correto para salvar.');
    }
}

// Processo principal
function main() {
    const arquivosEntrada = ['broken_database_1.json', 'broken_database_2.json'];
    const arquivosSaida = ['fixed_database_1.json', 'fixed_database_2.json'];

    if (arquivosEntrada.length === arquivosSaida.length) {
        for (let i = 0; i < arquivosEntrada.length; i++) {
            let dados = lerArquivo(arquivosEntrada[i]);
            if (dados.length > 0) {
                let corrigidos = corrigirDados(dados);
                if (corrigidos.length > 0) {
                    salvarArquivo(arquivosSaida[i], corrigidos);
                } else {
                    console.error(`Os dados corrigidos do arquivo ${arquivosEntrada[i]} estão vazios.`);
                }
            }
        }
    } else {
        console.error('A quantidade de arquivos de entrada não corresponde à de saída.');
    }
}

main();
