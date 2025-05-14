---
description: Retorna os dados completos de um SKU com base no seu ID.
---

# Detalhes de um SKU ⚠️

> ⚠️ **Este endpoint está obsoleto (Deprecated)**  
> Utilize as rotas da versão `/v3/` sempre que possível.


## 🧾 Resumo

| Método | Endpoint                     | Autenticação | Descrição             |
|--------|------------------------------|--------------|-----------------------|
| `GET`  | `/v1/{environmentId}/sku/{id}` | ✅ Token      | Retorna um SKU por ID |


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
|------------------|---------|--------|--------------|----------------|
| `environmentId`  | integer | path   | ✅ sim       | ID do ambiente |
| `id`             | integer | path   | ✅ sim       | ID do SKU      |


## ✅ Respostas

### `200 OK` – SKU retornado com sucesso

```json
{
  "id": 0,
  "name": "string",
  "productLine": {
    "id": 0,
    "name": "string"
  },
  "active": true,
  "deleted": true,
  "customFields": [
    {
      "name": "string",
      "value": "string",
      "index": 0,
      "visibleAtMobile": true,
      "searchable": true
    }
  ],
  "updatedAt": "2025-04-22T19:58:32.700Z",
  "updatedAtMillis": 0,
  "photoUpdatedAt": "2025-04-22T19:58:32.700Z",
  "barCode": "string",
  "externalCode": "string",
  "integrationCode": "string"
}
```


## 🧬 Esquema da Resposta

### SKU V1

| Campo              | Tipo            | Descrição                                     |
|--------------------|------------------|-----------------------------------------------|
| `id`               | integer          | ID do SKU                                     |
| `name`             | string           | Nome do SKU                                   |
| `productLine`      | objeto           | Linha de produto associada (`id`, `name`)     |
| `active`           | boolean          | SKU está ativo?                               |
| `deleted`          | boolean          | SKU está excluído?                            |
| `customFields`     | array            | Lista de campos customizados (`name`, `value`)|
| `updatedAt`        | datetime         | Data da última atualização                    |
| `updatedAtMillis`  | integer          | Timestamp em milissegundos                    |
| `photoUpdatedAt`   | datetime         | Última atualização da imagem                  |
| `barCode`          | string           | Código de barras                              |
| `externalCode`     | string           | Código externo                                |
| `integrationCode`  | string           | Código de integração                          |


## 📘 Exemplo de requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v1/123/sku/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v1/123/sku/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
.then(response => response.json())
.then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v1/123/sku/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/sku/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
})
.then(response => {
  console.log(response.data);
});
```

:::


::: tip 🌐 Domínio da API
Substitua `SeuDominio` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na URL.  
Exemplo: `https://suaempresa.involves.com` → subdomínio: `suaempresa`
:::


## ❌ Erros Comuns

| Código | Descrição                                  |
|--------|--------------------------------------------|
| 🔴 `400` | Requisição inválida ou parâmetros incorretos |
| 🔐 `401` | Token ausente ou inválido                   |
| 🔍 `404` | SKU não encontrado                          |
| 💥 `500` | Erro interno no servidor                    |
