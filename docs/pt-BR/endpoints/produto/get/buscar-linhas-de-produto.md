---
description: >-
  Retorna uma lista com no máximo 100 linhas de produto de acordo com os
  parâmetros enviados.
---

# Buscar Linhas de Produto

### Método

`GET`

### Endpoint

`/v1/{environmentId}/productline/find`

***

## 📥 Parâmetros

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição                 |
| ------------- | ------- | ----- | ----------- | ------------------------- |
| environmentId | integer | path  | Sim         | Identificador do ambiente |
| name          | string  | query | Não         | Nome da linha de produto  |
| externalCode  | string  | query | Não         | Código externo            |

***

## 🔄 Resposta

### ✅ 200 – Lista de linhas de produto retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "productCategory": {
    "id": 0,
    "name": "string"
  },
  "brand": {
    "id": 0,
    "name": "string"
  },
  "barCode": "string",
  "externalCode": "string",
  "active": true,
  "approved": true,
  "updatedAt": "2025-04-22T18:28:50.044Z",
  "productLineType": "CUSTOMER_PRODUCTLINE",
  "deleted": true,
  "photoLocation": "string",
  "photoUpdatedAt": "2025-04-22T18:28:50.044Z",
  "skus": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "availabilityRegions": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "customFields": [
    {
      "name": "string",
      "value": "string",
      "index": 0,
      "visibleAtMobile": true,
      "searchable": true
    }
  ]
}
```

***

## 🧬 Esquema

**Productline V1**

* `id` (integer): ID da linha de produto
* `name` (string): Nome da linha de produto
* `productCategory` (Category Mini V1): ID e nome da categoria
* `brand` (Brand Mini V1): ID e nome da marca
* `barCode` (string): Código de barras
* `externalCode` (string): Código externo
* `active` (boolean): Linha ativa?
* `approved` (boolean): Homologada?
* `productLineType` (string): Tipo da linha (`CUSTOMER_PRODUCTLINE`, `COMPETITOR_PRODUCTLINE`)
* `deleted` (boolean): Linha excluída?
* `photoLocation` (string): Nome do arquivo de imagem
* `photoUpdatedAt` (datetime): Data da última atualização da imagem
* `skus[]` (SKU Mini V1): Lista de SKUs da linha
* `availabilityRegions[]` (Regional Mini V1): Regionais onde a linha está disponível
* `customFields[]` (Custom Field V1): Campos customizados

***

## 📘 Exemplo de requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v1/123/productline/find?name=ProdutoA' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v1/123/productline/find?name=ProdutoA', {
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
  "https://SeuDominio.involves.com/v1/123/productline/find",
  params={"name": "ProdutoA"},
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/productline/find', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  },
  params: {
    name: 'ProdutoA'
  }
})
.then(response => {
  console.log(response.data);
});
```
