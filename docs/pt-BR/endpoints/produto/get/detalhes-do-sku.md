---
description: >-
  Retorna os dados de um SKU (unidade de manutenção de estoque) com base em seu
  identificador único.
---

# Detalhes do SKU

***

## 🧾 Resumo

| Método | Endpoint                                      | Autenticação | Descrição             |
| ------ | --------------------------------------------- | ------------ | --------------------- |
| `GET`  | /v3/environments/{environmentId}/skus/{skuId} | ✅ Token      | Retorna um SKU por ID |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v3/environments/{environmentId}/skus/{skuId}`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição      |
| ------------- | ------- | ----- | ----------- | -------------- |
| environmentId | integer | path  | Sim         | ID do ambiente |
| skuId         | integer | path  | Sim         | ID do SKU      |

***

## 🔄 Resposta

### ✅ 200 – SKU retornado com sucesso

```json
{
  "id": 0,
  "name": "string",
  "active": true,
  "barCode": "string",
  "externalCode": "string",
  "integrationCode": "string",
  "customFields": [
    {
      "name": "string",
      "index": 0,
      "value": "string"
    }
  ],
  "productLine": {
    "id": 0,
    "_link": "string"
  },
  "brand": {
    "id": 0,
    "_link": "string"
  },
  "category": {
    "id": 0,
    "_link": "string"
  },
  "supercategory": {
    "id": 0,
    "_link": "string"
  }
}
```

***

## 🧬 Esquema da Resposta

**SKU**

* `id` (integer): ID do SKU
* `name` (string): Nome do SKU
* `active` (boolean): Se o SKU está ativo
* `barCode`, `externalCode`, `integrationCode`: Códigos relacionados
* `customFields`: Lista de campos personalizados
* `productLine`, `brand`, `category`, `supercategory`: Referências de relacionamento

***

## ❌ Erros Comuns

| Código | Descrição                                 |
| ------ | ----------------------------------------- |
| 400    | Requisição inválida ou malformada         |
| 401    | Token de autenticação ausente ou inválido |
| 404    | SKU não encontrado                        |
| 500    | Erro interno no servidor                  |

***

## 📘 Exemplos de Requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/skus/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/skus/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

```python
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v3/environments/123/skus/456",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/skus/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
})
.then(response => {
  console.log(response.data);
});
```
