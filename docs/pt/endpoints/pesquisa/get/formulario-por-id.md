---
description: Retorna um formulário de acordo com o ID enviado.
---

# Formulário por ID

`GET /v1/{environmentId}/form/{formId}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição        |
| --------------- | ------- | ----- | ----------- | ---------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente   |
| `formId`        | integer | path  | ✅ sim       | ID do formulário |


## ✅ Respostas

### `200 OK` – Informação retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "formFlow": {
    "id": 0,
    "name": "string",
    "flowType": "POS"
  },
  "active": true,
  "deleted": false,
  "updatedAt": "2025-04-22T08:25:18.994Z"
}
```

> A resposta completa inclui configurações avançadas do formulário, seus campos, validações, dependências, restrições e metadados adicionais.


## 🧬 Esquema de Resposta

::: details Form V1

Este esquema detalha todos os campos retornados no objeto principal de formulário. Inclui propriedades internas e objetos aninhados como fluxo (`formFlow`), campos (`formFields`), validações, dependências e permissões.

Devido à extensão do conteúdo, recomendamos acessar a documentação interna da equipe de engenharia para a referência completa e atualizada dos objetos:

- `FormField V1`
- `FormFieldDependency`
- `FormFieldValidation V1`
- `AccessProfile V1`
- `Information V1`
- `Supercategory V1`

A seguir, uma visão simplificada dos campos principais que são úteis no consumo padrão da API.

| Campo                    | Tipo      | Descrição                                                       |
|--------------------------|-----------|-----------------------------------------------------------------|
| `id`                     | integer   | ID do formulário                                                |
| `name`                   | string    | Nome do formulário                                              |
| `description`            | string    | Descrição do formulário                                         |
| `formFlow`               | objeto    | Informações do fluxo vinculado (`id`, `name`, `flowType`)       |
| `active`                 | boolean   | Indica se o formulário está ativo                               |
| `photoRequired`          | boolean   | Indica se exige foto para envio                                 |
| `checkinRequired`        | boolean   | Exige check-in para preencher                                   |
| `multipleItemSelectionAllowed` | boolean | Permite selecionar múltiplos itens ao reportar                 |
| `displayItemPhoto`       | boolean   | Exibe foto do item no app                                       |
| `barcodeValidationEnabled` | boolean | Valida código de barras                                         |
| `updatedAt`              | datetime  | Data da última atualização                                      |
| `formFields`             | FormField V1[] | Lista de campos do formulário                             |
| `userGroupsEdition`      | AccessProfile V1[] | Perfis que podem editar                              |
| `userGroupsAnswer`       | AccessProfile V1[] | Perfis que podem responder                           |

:::


## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/form/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://{dominio}.involves.com/v1/123/form/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python (requests)]
import requests

response = requests.get(
  "https://{dominio}.involves.com/v1/123/form/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/form/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````

::: tip 🌐 Domínio da API
Substitua `{dominio}` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na barra de endereço do navegador.

Exemplo: se a URL que você acessa é `https://suaempresa.involves.com`, então use `suaempresa` como valor de `{dominio}`.

A chamada final deve ficar assim:

`https://{dominio}.involves.com/v1/...`
:::


## ❌ Erros Comuns

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida                  |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Acesso negado                        |
| 🔍 `404`  | Formulário não encontrado            |
| 💥 `500`  | Erro interno no servidor             |