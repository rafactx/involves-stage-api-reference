---
description: Retorna uma imagem relacionada com o formulário do servidor.
---

# 📄 Download de Imagem do Formulário

Permite baixar a imagem enviada em um campo de imagem de um formulário, vinculada a uma pesquisa realizada.

> 🔗 `GET /v1/{environmentId}/form/{formId}/item/{itemId}/image/download`


## 📥 Parâmetros

| Nome                         | Tipo    | Local  | Obrigatório | Descrição                                                                  |
|------------------------------|---------|--------|-------------|----------------------------------------------------------------------------|
| `environmentId`              | integer | path   | ✅ sim       | ID do ambiente                                                             |
| `formId`                     | integer | path   | ✅ sim       | ID do formulário                                                           |
| `itemId`                     | integer | path   | ✅ sim       | ID do campo da pesquisa                                                    |
| `round`                      | boolean | query  | ❌ não       | Retorna a versão arredondada da imagem (padrão: `false`)                  |
| `thumbnail`                  | boolean | query  | ❌ não       | Retorna a versão thumbnail da imagem (padrão: `false`)                    |
| `If-Match`                   | string  | header | ❌ não       | Executa apenas se o arquivo **existir**                                   |
| `If-None-Match`              | string  | header | ❌ não       | Executa apenas se o arquivo **não** existir                               |
| `If-Modified-Since`          | string  | header | ❌ não       | Executa se a imagem **foi modificada** desde esse horário                 |
| `If-Unmodified-Since`        | string  | header | ❌ não       | Executa se a imagem **não foi modificada** desde esse horário            |
| `X-AGILE-PROP-FILE-CHECKSUM` | string  | header | ❌ não       | Checksum esperado do arquivo                                              |


## ✅ Respostas

### `200 OK` – Imagem retornada com sucesso

> A imagem será retornada como binário (`image/jpeg`, `image/png`, etc.) conforme disponível no servidor.


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/form/456/item/789/image/download' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/form/456/item/789/image/download', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.blob())
  .then(image => console.log('Imagem recebida:', image));
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://{dominio}.involves.com/v1/123/form/456/item/789/image/download",
  headers={"Authorization": "Bearer {seu_token}"}
)

with open("imagem.jpg", "wb") as f:
    f.write(response.content)
```

```js [🟣 Node.js]
const axios = require('axios');
const fs = require('fs');

axios.get('https://{dominio}.involves.com/v1/123/form/456/item/789/image/download', {
  responseType: 'stream',
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  response.data.pipe(fs.createWriteStream('imagem.jpg'));
});
```

:::

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
| 🔍 `404`  | Imagem não encontrada                |
| 💥 `500`  | Erro interno no servidor             |
