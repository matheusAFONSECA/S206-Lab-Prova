# S206-Lab-Prova

## Overview
Repositório dedicado a armazenar os códigos e arquivos utilizados para a resolução da Prova de Laboratório da disciplina S206. A prova é composta por duas questões principais: a primeira utilizando Postman + Newman, e a segunda utilizando Cypress + Mochawesome.

## Sumário
- [Como configurar o projeto](#como-configurar-o-projeto)  
  - [Clonar o repositório](#clonar-o-repositório)  
  - [Instalar dependências (via npm)](#instalar-dependências-via-npm)  
- [Prova](#prova)  
  - [Questão 1 (Postman)](#questão-1-postman)  
    - [Explicação da coleção e API usada](#explicação-da-coleção-e-api-usada)  
    - [Como criar o report usando Newman](#como-criar-o-report-usando-newman)  
    - [Como visualizar o report](#como-visualizar-o-report)  
  - [Questão 2 (Cypress)](#questão-2-cypress)  
    - [Explicação dos testes e o site utilizado](#explicação-dos-teste-e-o-site-utilizado)  
    - [Como criar o report usando o mochawesome](#como-criar-o-report-usando-o-mochawesome)  
    - [Como visualizar o report](#como-visualizar-o-report-1)  
- [Autor](#autor)

---

## Como configurar o projeto

### Clonar o repositório

```bash
git clone https://github.com/matheusAFONSECA/S206-Lab-Prova.git
cd S206-Lab-Prova
```

### Instalar dependências (via npm)

```bash
npm install
```

---

## Prova

### Questão 1 (Postman)

#### Explicação da coleção e API usada

A coleção Postman está localizada na pasta `postman/`, contendo:
- `ProvaS206.postman_collection.json`: a coleção de requisições.
- `ProvaS206Env.postman_environment.json`: variáveis de ambiente utilizadas.

A API utilizada é a **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)**, uma API pública usada para testes e prototipação, que simula operações como criação, leitura, atualização e exclusão de posts, comentários, usuários etc.

#### Como criar o report usando newman

Execute os testes e gere o relatório:

```bash
npx newman run postman/ProvaS206.postman_collection.json \
  -e postman/ProvaS206Env.postman_environment.json \
  -r htmlextra 
```
#### Como visualizar o report

O relatório em HTML será gerado automaticamente na pasta ``newman/``. Abra o arquivo ``newman-run-report.html`` com o navegador ou rode o comando:

```bash
start newman\ProvaS206-2025-06-20-00-34-20-724-0.html
```

---

### Questão 2 (Cypress)

#### Explicação dos teste e o site utilizado

Os testes automatizados foram desenvolvidos com **Cypress**, e o site utilizado foi o **[saucedemo.com](https://www.saucedemo.com/)**, uma plataforma de testes voltada a automação web.

#### Como criar o report usando o mochawesome

Execute os testes e gere o relatório:

```bash
npx cypress run --reporter mochawesome
```

#### Como visualizar o report

Abra o arquivo HTML gerado na pasta cypress/reports/mochawesome.html usando o navegador ou rode o comando:

```bash
start mochawesome-report\mochawesome.html
```

---

## Autor

### [Matheus Fonseca](https://github.com/matheusAFONSECA)

Estudante do nono (9º) semestre de Engenharia da Computação no Instituto Nacional de Telecomunicações (Inatel). Atuou em Iniciação Científica no CS&ILAB no projeto Park Here, com foco em visão computacional para reconhecimento de placas e identificação de veículos. Foi monitor de Física 1, 2 e 3. Atualmente é estagiário no Inatel Competence Center (ICC), no setor de PDI SW.
