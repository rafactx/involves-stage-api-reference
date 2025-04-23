---
description: Retorna a categoria da linha de produto de acordo com o ID especificado.
---

# Categoria da Linha de Produto ⚠️

⚠️ _Este endpoint está obsoleto (Deprecated)_\


## 🧾 Resumo

| Método | Endpoint                                     | Autenticação | Descrição                                    |
| ------ | -------------------------------------------- | ------------ | -------------------------------------------- |
| `GET`  | /v1/{environmentId}/productlinecategory/{id} | ✅ Token      | Retorna categoria da linha de produto por ID |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v1/{environmentId}/productlinecategory/{id}`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição                           |
| ------------- | ------- | ----- | ----------- | ----------------------------------- |
| environmentId | integer | path  | Sim         | ID do ambiente                      |
| id            | integer | path  | Sim         | ID da categoria da linha de produto |

***

## 🔄 Resposta

### ✅ 200 – Categoria da linha de produto retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "supercategory": {
    "id": 0,
    "name": "string"
  },
  "updatedAt": "2025-04-22T19:44:44.837Z",
  "deleted": true
}
```

### ❌ 401 – Não autorizado

```json
{
  "error": "Unauthorized",
  "message": "Token inválido ou ausente."
}
```

### ❌ 404 – Categoria não encontrada

```json
{
  "error": "Not Found",
  "message": "Categoria de linha de produto não localizada."
}
```

***

## 🧬 Esquema da Resposta

**Category V1**

* `id` (integer): ID da categoria
* `name` (string): Nome da categoria
* `supercategory` (Supercategory Mini V1): ID e nome da supercategoria
* `updatedAt` (datetime): Data da última atualização
* `deleted` (boolean): Categoria foi excluída?

***

## 📘 Exemplos de Requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v1/123/productlinecategory/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v1/123/productlinecategory/456', {
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
  "https://SeuDominio.involves.com/v1/123/productlinecategory/456",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/productlinecategory/456', {
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
