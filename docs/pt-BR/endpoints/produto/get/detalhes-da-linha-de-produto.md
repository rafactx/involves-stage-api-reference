---
description: Retorna os dados de uma linha de produto específica com base em seu ID.
---

# Detalhes da Linha de Produto

***

## 🧾 Resumo

| Método | Endpoint                                                      | Autenticação | Descrição                               |
| ------ | ------------------------------------------------------------- | ------------ | --------------------------------------- |
| `GET`  | /v3/environments/{environmentId}/productlines/{productLineId} | ✅ Token      | Retorna uma linha de produto específica |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v3/environments/{environmentId}/productlines/{productLineId}`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição              |
| ------------- | ------- | ----- | ----------- | ---------------------- |
| environmentId | integer | path  | Sim         | ID do ambiente         |
| productLineId | integer | path  | Sim         | ID da linha de produto |

***

## 🔄 Resposta

### ✅ 200 – Linha de produto retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "barCode": "string",
  "externalCode": "string",
  "active": true,
  "approved": true,
  "origin": "OWN",
  "customFields": [
    {
      "name": "string",
      "value": "string",
      "index": 0
    }
  ],
  "brand": {
    "id": 0,
    "_link": "string"
  },
  "category": {
    "id": 0,
    "_link": "string"
  },
  "skus": {
    "id": 0,
    "_link": "string"
  },
  "regionals": {
    "id": 0,
    "_link": "string"
  }
}
```

***

## 🧬 Esquema da Resposta

**Product Line**

* `id` (integer): ID da linha de produto
* `name` (string): Nome da linha de produto
* `barCode` (string): Código de barras
* `externalCode` (string): Código externo
* `active` (boolean): Se está ativa
* `approved` (boolean): Se está homologada
* `origin` (string): Origem da linha (OWN ou COMPETITOR)
* `customFields` (array): Campos personalizados
* `brand`, `category`, `skus`, `regionals` (Link): Objetos referenciados

***

## ❌ Erros Comuns

| Código | Descrição                                  |
| ------ | ------------------------------------------ |
| 400    | Requisição malformada ou inválida          |
| 401    | Não autorizado – token inválido ou ausente |
| 404    | Linha de produto não encontrada            |
| 500    | Erro interno no servidor                   |

***

## 📘 Exemplos de Requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/productlines/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/productlines/456', {
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
  "https://SeuDominio.involves.com/v3/environments/123/productlines/456",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/productlines/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
})
.then(response => {
  console.log(response.data);
});
```
