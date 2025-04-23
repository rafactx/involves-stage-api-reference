---
description: Retorna os dados completos de um SKU com base no seu ID.
---

# Detalhes de um SKU ⚠️

⚠️ _Este endpoint está obsoleto (Deprecated)_\


## 🧾 Resumo

| Método | Endpoint                     | Autenticação | Descrição             |
| ------ | ---------------------------- | ------------ | --------------------- |
| `GET`  | /v1/{environmentId}/sku/{id} | ✅ Token      | Retorna um SKU por ID |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v1/{environmentId}/sku/{id}`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição      |
| ------------- | ------- | ----- | ----------- | -------------- |
| environmentId | integer | path  | Sim         | ID do ambiente |
| id            | integer | path  | Sim         | ID do SKU      |

***

## 🔄 Resposta

### ✅ 200 – SKU retornado com sucesso

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

***

## 🧬 Esquema da Resposta

**SKU V1**

* `id` (integer): ID do SKU
* `name` (string): Nome do SKU
* `productLine` (ProductLine Mini V1): Linha de produto vinculada
* `active` (boolean): Está ativo?
* `deleted` (boolean): Está excluído?
* `customFields`: Campos customizáveis
* `updatedAt` (datetime): Última atualização
* `updatedAtMillis` (int): Atualização em milissegundos
* `photoUpdatedAt` (datetime): Atualização da foto
* `barCode` (string): Código de barras
* `externalCode` (string): Código externo
* `integrationCode` (string): Código de integração

***

## 📘 Exemplos de Requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v1/123/sku/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v1/123/sku/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
.then(response => response.json())
.then(data => console.log(data))
```

```python
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v1/123/sku/456",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/sku/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
})
.then(response => {
  console.log(response.data);
});
```

***

📎 Ver esquema completo em: _a ser adicionado no guia de componentes_.
