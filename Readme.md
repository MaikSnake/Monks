### Documentação do Trabalho: Correção de Arquivos JSON com JS

#### *Objetivo*
O objetivo deste projeto é criar um programa em Node.js que leia arquivos JSON corrompidos, corrija caracteres problemáticos e salve os dados corrigidos em novos arquivos. Isso ajuda a lidar com informações mal formatadas e garantir que os dados possam ser utilizados corretamente em outras aplicações.

#### *Tecnologias Utilizadas*
- *Node.js*: Para manipular arquivos e trabalhar com dados em JavaScript.
- *JSON*: Formato de arquivo utilizado para armazenar os dados.

----------------------------------------------------------------------------------------------------------------------
#### *Descrição do Código*
1. *Leitura de Arquivos JSON*
   - A função `lerArquivo(caminho)` lê um arquivo JSON. Ela verifica se o arquivo existe e se não está vazio, garantindo que os dados sejam lidos corretamente.

2. *Correção de Dados*
   - A função `corrigirDados(dados)` aplica um mapeamento para substituir caracteres corrompidos como `æ` e `ø` pelos correspondentes `a` e `o`.
   - Se o dado for uma string, ele é corrigido. Caso contrário, permanece inalterado.

3. *Salvar Arquivos Corrigidos*
   - A função `salvarArquivo(caminho, dados)` salva os dados corrigidos em um novo arquivo JSON.

4. *Processo Principal*
   - A função `main()` gerencia o processo. Ela define os arquivos de entrada e saída, lê os dados, aplica a correção e salva os resultados.

---

#### *Como Executar o Código*

1. *Pré-requisitos*
   - Certifique-se de que o *Node.js* está instalado:
     node -v
     ```

2. *Configuração dos Arquivos*
   - Crie os arquivos JSON de entrada com os nomes:
     - `broken_database_1.json`
     - `broken_database_2.json`
   - Exemplo de conteúdo:
     [
         { "nome": "Joæo", "cidade": "Sãø Paulo" },
         { "nome": "Andreæ", "cidade": "Rio de Janeirø" }
     ]
     ```

3. *Salvar o Código*
   - Crie um arquivo chamado `corrigir.js` e copie o código fornecido.

4. *Execução*
   - No terminal, navegue até a pasta onde o arquivo foi salvo e execute:
     $ node corrigir.js
     ```

5. *Resultados*
   - Após a execução, arquivos corrigidos serão gerados com os nomes:
     - `fixed_database_1.json`
     - `fixed_database_2.json`
   - Exemplo do resultado corrigido:
     [
         { "nome": "Joao", "cidade": "São Paulo" },
         { "nome": "Andrea", "cidade": "Rio de Janeiro" }
     ]

#### *Conceitos Importantes*

- *Node.js e Módulo `fs`*: O módulu `fs` permite ler e gravar arquivos no sistema. Ele é usado para trabalhar com os arquivos JSON.

- *JSON*: É um formato leve para troca de dados. Trabalhamos com ele em JavaScript usando `JSON.parse()` para transformar texto em objetos e `JSON.stringify()` para o contrário.

- *Mapeamento de Caracteres*: Criamos uma estrutura para substituir caracteres específicos de forma eficiente.

#### *Conclusão*
Este projeto mostra como manipular arquivos JSON, corrigir dados automaticamente e salvar resultados usando Node.js. Ele é simples, mas demonstra como resolver roblemas comuns de processamento de dados no dia a dia.