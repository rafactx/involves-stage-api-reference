# Guia da API

A API do Involves Stage foi feita para times que precisam integrar sistemas externos com dados de campo em tempo real. Com suporte a versionamento, autenticação segura e boas práticas REST, ela é a ponte entre o seu backend e o universo do Involves.

Seja para criar PDVs, registrar visitas ou analisar pesquisas, aqui você encontra tudo o que precisa — com exemplos reais e explicações diretas ao ponto.

***

## 🔍 Índice

* [🛠️ Como usar esta documentação](guia-da-api.md#como-usar-esta-documentacao)
* [🔐 Autenticação](guia-da-api.md#autenticacao)
* [🌍 Ambientes](guia-da-api.md#ambientes)
* [📦 Versionamento](guia-da-api.md#versionamento)
* [📥 Requisições e Respostas](guia-da-api.md#requisicoes-e-respostas)
* [📛 Erros comuns](guia-da-api.md#erros-comuns)
* [🔗 HATEOAS](guia-da-api.md#hateoas)
* [📚 Exemplos de uso por linguagem](guia-da-api.md#exemplos-de-uso-por-linguagem)

***

## 🛠️ Como usar esta documentação

Cada rota está organizada por método HTTP (`GET`, `POST`, `PUT`, etc.), agrupada por recurso (ex: `PDV`, `Colaborador`, `Produto`) e com exemplos de requisição para facilitar o uso. Você pode copiar os exemplos em `cURL`, `JavaScript`, `Python` ou `Node.js`.

***

## 🔐 Autenticação

Todas as requisições exigem autenticação via Bearer Token.

#### Exemplo de headers:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
Content-Type: application/json
```

***

## 🌍 Ambientes

O `environmentId` representa o identificador do ambiente que você quer consultar. Você encontra esse ID na URL da área de Administração de Ambientes no Involves Stage Web.

***

## 📦 Versionamento

A API está disponível em múltiplas versões (`v1`, `v2`, `v3`). Sempre confira a versão mais apropriada para o seu caso de uso, conforme especificado no início de cada endpoint.

***

## 📥 Requisições e Respostas

Abaixo estão exemplos de como fazer uma requisição **GET** para listar pontos de venda utilizando diferentes linguagens:

#### \[🟢 cURL]

```bash
bashCopiarEditarcurl -X GET 'https://SeuDominio.involves.com/v1/123/pointofsale' \
-H 'Authorization: Bearer {{token}}' \
-H 'Accept: application/json'
```

***

#### \[🟡 JavaScript (Fetch)]

```javascript
javascriptCopiarEditarfetch('https://SeuDominio.involves.com/v1/123/pointofsale', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{token}}',
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

***

#### \[🔵 Python (requests)]

```python
pythonCopiarEditarimport requests

url = "https://SeuDominio.involves.com/v1/123/pointofsale"
headers = {
    "Authorization": "Bearer {{token}}",
    "Accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())
```

***

#### \[🟣 Node.js (axios)]

```javascript
javascriptCopiarEditarconst axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/pointofsale', {
  headers: {
    'Authorization': 'Bearer {{token}}',
    'Accept': 'application/json'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

***

## 📛 Erros comuns

| Código |         Descrição        |
| :----: | :----------------------: |
|   400  |    Requisição inválida   |
|   401  |      Não autenticado     |
|   403  |       Acesso negado      |
|   404  |  Recurso não encontrado  |
|   500  | Erro interno no servidor |

***

## 🔗 HATEOAS

Algumas respostas trazem links diretos para recursos relacionados. Esses links seguem o padrão HATEOAS, o que facilita a navegação entre entidades sem necessidade de montar URLs manualmente.

Exemplo:

```json
"_link": "https://SeuDominio.involves.com/v3/environments/123/pointofsales/456"
```

***

## 📚 Exemplos de uso por linguagem

Todos os endpoints trazem exemplos práticos nos seguintes formatos:

* 🟢 `cURL`
* 🟡 `JavaScript (Fetch)`
* 🔵 `Python (requests)`
* 🟣 `Node.js (axios)`

***

💡 **Dica:** Use ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar suas requisições enquanto desenvolve.

***
