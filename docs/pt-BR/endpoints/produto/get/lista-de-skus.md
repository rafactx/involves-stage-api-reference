---
description: >-
  Retorna uma lista de SKUs com no máximo 100 elementos, filtrando por nome ou
  código externo.
---

# Lista de SKUs ⚠️

⚠️ _Este endpoint está obsoleto (Deprecated)_\


## 🧾 Resumo

| Método | Endpoint                     | Autenticação | Descrição                               |
| ------ | ---------------------------- | ------------ | --------------------------------------- |
| `GET`  | /v1/{environmentId}/sku/find | ✅ Token      | Lista SKUs filtrados por nome ou código |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v1/{environmentId}/sku/find`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição             |
| ------------- | ------- | ----- | ----------- | --------------------- |
| environmentId | integer | path  | Sim         | ID do ambiente        |
| name          | string  | query | Não         | Nome do SKU           |
| externalCode  | string  | query | Não         | Código externo do SKU |

***

## 🔄 Resposta

### ✅ 200 – Lista de SKUs retornada com sucesso

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
  "updatedAt": "2025-04-22T19:55:54.250Z",
  "updatedAtMillis": 0,
  "photoUpdatedAt": "2025-04-22T19:55:54.250Z",
  "barCode": "string",
  "externalCode": "string",
  "integrationCode": "string"
}
```

### ❌ 401 – Não autorizado

```json
{
  "error": "Unauthorized",
  "message": "Token inválido ou ausente."
}
```

***

## 🧬 Esquema da Resposta

**SKU V1**

* `id` (integer): ID do SKU
* `name` (string): Nome do SKU
* `productLine` (ProductLine Mini V1): ID e nome da linha de produto
* `active` (boolean): Está ativo?
* `deleted` (boolean): Está excluído?
* `customFields`: Lista de campos customizáveis
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
  --url 'https://SeuDominio.involves.com/v1/123/sku/find?name=ProdutoX' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v1/123/sku/find?name=ProdutoX', {
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
  "https://SeuDominio.involves.com/v1/123/sku/find?name=ProdutoX",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/sku/find?name=ProdutoX', {
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
