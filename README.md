# 🔎 Busca CEP

Uma aplicação simples e moderna para consultar informações de endereço a partir do CEP, utilizando a API pública do [ViaCEP](https://viacep.com.br/).

## 💻 Demonstração

![Demonstração da interface](caminho/para/screenshot.png)

> O usuário digita um CEP e obtém dados como logradouro, bairro, cidade e UF.

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (com foco em design responsivo e moderno)
- JavaScript (Fetch API)
- [ViaCEP API](https://viacep.com.br/)

## 📦 Como usar

1. Clone o repositório:
```bash
git clone https://github.com/mateus0205/busca-cep.git
```
2. Navegue até a pasta do projeto: 
```bash
cd busca-cep
```
3. Abra o arquivo index.thml no seu navegador 
```
Não é necessário instalar dependências. É um projeto totalmente front-end.
```
## 📁 Estrutura de Arquivos
busca-cep/
├── index.html
├── style.css
├── script.js
└── README.md


## ✅ Sobre a API

API pública do ViaCEP para obter os dados. Não é necessário autenticação ou chave de acesso.

## ⚠️ Aviso

Alguns CEPs podem retornar sem logradouro, pois representam áreas amplas (como cidades inteiras). O sistema foi preparado para tratar esses casos com mensagens informativas.

## 🧠 Possíveis melhorias

- Validação de CEPs inválidos ou com menos de 8 dígitos.  
- Exibição de mensagens de carregamento enquanto a busca é feita.  
- Integração com mapas (Google Maps ou OpenStreetMap).  
- Versão mobile-first com melhorias de usabilidade.


