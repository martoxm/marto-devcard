# Documentação do Projeto Marto DevCard

Este arquivo registra, de forma detalhada, o que foi construído neste projeto e por que cada parte existe. A ideia é servir como material de revisão e como base para reproduzir a mesma abordagem em outros estudos.

## Visão geral

O projeto é uma página do tipo link in bio. Ele reúne informações de perfil, um botão para alternar entre tema claro e escuro, botões para navegação principal e ícones de redes sociais.

A proposta principal foi combinar:

- HTML simples e semântico
- CSS com variáveis para facilitar troca de tema
- JavaScript pequeno e direto para persistir a preferência visual do usuário
- Design responsivo para mobile e desktop

## Estrutura dos arquivos

O projeto foi organizado em três arquivos principais:

- [index.html](index.html) define a estrutura da página e conecta os recursos externos.
- [style.css](style.css) concentra toda a aparência visual, responsividade e animações.
- [script.js](script.js) controla a alternância de tema e salva a escolha no navegador.

Também existe a pasta [assets](assets) com imagens e ícones usados na interface.

## O que foi feito no HTML

O arquivo [index.html](index.html) foi montado com foco em simplicidade e clareza.

### Metadados e base da página

Foram adicionados elementos importantes no cabeçalho:

- `lang="pt-br"` para indicar idioma principal da página.
- `charset="UTF-8"` para suportar acentuação corretamente.
- `viewport` para garantir adaptação em telas menores.
- `description` para melhorar a apresentação em mecanismos de busca e compartilhamento.
- `og:title`, `og:description` e `og:type` para enriquecer a prévia da página em redes sociais.

Também foi carregada a fonte Inter via Google Fonts para manter um visual limpo e moderno.

### Estrutura visual

A página foi dividida em blocos principais:

- Área de perfil com imagem e nome.
- Seletor de tema claro/escuro.
- Lista de links principais.
- Links sociais em forma de ícones.
- Rodapé com identificação do projeto.

Essa organização foi pensada para deixar a interface fácil de entender e rápida de navegar.

### Ícones externos

Os ícones de redes sociais foram carregados com Ionicons. Isso evita desenhar os ícones manualmente e mantém consistência visual entre diferentes dispositivos.

## O que foi feito no CSS

O arquivo [style.css](style.css) concentra a identidade visual do projeto. A estratégia principal foi usar variáveis CSS para simplificar a troca entre tema escuro e claro.

### Reset e padrão base

Foi aplicado um reset básico em todos os elementos para remover margens e paddings padrão e facilitar o controle do layout.

Depois disso, o corpo da página recebeu o fundo principal e a altura total da tela, o que ajuda a manter a composição centrada e estável.

### Variáveis de tema

O projeto usa `:root` como base para o tema escuro e uma classe `.light` aplicada no elemento HTML para representar o tema claro.

As variáveis controlam:

- Cor do texto
- Imagem de fundo
- Cor de bordas e superfícies translúcidas
- Destaque em estados de hover e foco
- Ícone do seletor de tema

Essa abordagem foi escolhida porque centraliza as mudanças de visual. Em vez de reescrever várias regras, basta trocar valores de variáveis.

### Organização do layout

O conteúdo principal fica dentro de um container centralizado com largura máxima. Isso evita que a interface fique esticada demais em telas grandes e mantém uma leitura confortável.

Dentro dele, o conteúdo foi separado em seções:

- Perfil no topo
- Botão de tema logo abaixo
- Links em lista vertical
- Social links no final
- Rodapé discreto

### Perfil

A seção de perfil contém a foto e o nome do autor. A imagem foi dimensionada para manter destaque visual sem dominar a tela inteira.

### Seletor de tema

O seletor foi criado com um botão circular sobre uma trilha arredondada. A animação movimenta o botão da esquerda para a direita ao alternar entre temas.

Os estados de foco e hover foram considerados para melhorar acessibilidade e deixar a interação mais clara.

### Links principais

A lista de links usa blocos grandes, centralizados e com bordas suaves. Isso melhora a área clicável e facilita o uso em telas sensíveis ao toque.

Os estados de hover e foco foram tratados para indicar interatividade.

### Links sociais

Os ícones sociais são exibidos em linha, centralizados, com espaçamento consistente. A proposta aqui é oferecer acesso rápido às redes sem competir visualmente com os botões principais.

### Responsividade

Foi criada uma media query para telas a partir de 700px. Nessa faixa, a imagem de fundo muda para uma versão desktop.

Isso melhora a composição visual sem prejudicar a versão mobile.

### Animações

Duas animações foram usadas no seletor de tema:

- `slide-in` para quando o tema claro é ativado.
- `slide-back` para quando o tema escuro é restaurado.

Elas existem para reforçar a troca de estado de forma visual, sem exagero.

## O que foi feito no JavaScript

O arquivo [script.js](script.js) é pequeno, mas cumpre uma função importante: manter a preferência de tema do usuário.

### Função de aplicação de tema

A função `applyTheme` recebe um valor booleano e faz duas coisas:

- adiciona ou remove a classe `light` no elemento HTML
- troca a imagem do perfil conforme o tema

Isso garante que o layout e a foto fiquem coerentes com o modo escolhido.

### Função de alternância

A função `toggleMode` verifica se o tema claro está ativo e alterna para o oposto.

Depois da mudança, o valor escolhido é salvo no `localStorage`. Assim, ao recarregar a página, a preferência do usuário continua preservada.

### Inicialização da página

Quando o conteúdo do DOM é carregado, o código:

- adiciona o evento de clique ao seletor de tema
- lê o valor salvo no `localStorage`
- reaplica o tema claro se essa for a escolha anterior

Esse fluxo deixa a experiência persistente e previsível.

## Fluxo completo de funcionamento

1. A página carrega com o tema padrão definido em CSS.
2. O JavaScript verifica se existe uma preferência salva.
3. Se o usuário já escolheu o tema claro, a classe correspondente é aplicada.
4. Ao clicar no seletor, o tema é alternado.
5. A imagem do perfil muda junto com o tema.
6. A escolha fica salva no navegador para a próxima visita.

## Decisões de implementação

As principais escolhas deste projeto foram:

- Usar CSS variables para evitar duplicação de estilos.
- Separar responsabilidade entre HTML, CSS e JavaScript.
- Manter a interface enxuta para priorizar links e navegação rápida.
- Trabalhar com estados de foco para melhorar acessibilidade.
- Salvar o tema no navegador para deixar a experiência consistente.

## Como reaproveitar esta abordagem em outros projetos

Se você quiser usar esta base em outro estudo, a lógica principal é esta:

1. Crie uma estrutura HTML simples com perfil, links e redes sociais.
2. Centralize a aparência em variáveis CSS para facilitar temas diferentes.
3. Use uma classe no elemento raiz da página para representar o tema alternativo.
4. No JavaScript, altere essa classe e persista a escolha com `localStorage`.
5. Troque apenas imagens, textos e links para adaptar ao novo projeto.

## Pontos para estudar depois

Este projeto é um bom exercício para revisar os seguintes tópicos:

- Semântica HTML
- Flexbox
- CSS variables
- Media queries
- Estados `hover` e `focus-visible`
- Persistência com `localStorage`
- Alternância de classes com JavaScript

## Observação prática

Se você quiser transformar este projeto em uma base mais reutilizável, o próximo passo natural seria separar melhor o conteúdo textual do comportamento e criar uma versão com dados configuráveis, para que os links e o perfil sejam alterados com menos esforço.
