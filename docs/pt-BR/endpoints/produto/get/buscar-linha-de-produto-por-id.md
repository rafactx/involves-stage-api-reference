---
description: >-
  ⚠️ Este endpoint está obsoleto (Deprecated) Retorna a linha de produto de
  acordo com o ID do ambiente e o ID da linha de produto enviados.
---

# Buscar Linha de Produto por ID ⚠️

### Método

`GET`

### Endpoint

`/v1/{environmentId}/productline/{id}`

***

## 📥 Parâmetros

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição                                       |
| ------------- | ------- | ----- | ----------- | ----------------------------------------------- |
| environmentId | integer | path  | Sim         | Identificador do ambiente                       |
| id            | integer | path  | Sim         | Identificador da linha de produto a ser buscada |

***

## 🔄 Resposta

### ✅ 200 – Linha de produto retornada com sucesso

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
  "updatedAt": "2025-04-22T19:37:36.024Z",
  "productLineType": "CUSTOMER_PRODUCTLINE",
  "deleted": true,
  "photoLocation": "string",
  "photoUpdatedAt": "2025-04-22T19:37:36.024Z",
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
  --url 'https://SeuDominio.involves.com/v1/123/productline/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v1/123/productline/456', {
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
  "https://SeuDominio.involves.com/v1/123/productline/456",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/productline/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
})
.then(response => {
  console.log(response.data);
});
```
