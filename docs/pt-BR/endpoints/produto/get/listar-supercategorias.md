---
description: Retorna uma lista paginada de supercategorias cadastradas no ambiente.
---

# Listar Supercategorias

***

| Método | Endpoint                                         | Autenticação | Descrição                            |
| ------ | ------------------------------------------------ | ------------ | ------------------------------------ |
| `GET`  | /v3/environments/{environmentId}/supercategories | ✅ Token      | Lista as supercategorias cadastradas |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v3/environments/{environmentId}/supercategories`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição                   |
| ------------- | ------- | ----- | ----------- | --------------------------- |
| environmentId | integer | path  | Sim         | ID do ambiente              |
| name          | string  | query | Não         | Nome da supercategoria      |
| page          | integer | query | Não         | Número da página            |
| size          | integer | query | Não         | Itens por página (máx: 100) |

***

## 🔄 Resposta

### ✅ 206 – Lista de supercategorias retornada com sucesso

```json
[
  {
    "api.doc.v3.supercategory.id.description": 0,
    "api.doc.v3.supercategory.name.description": "string"
  }
]
```

***

## 🧬 Esquema da Resposta

**Supercategory**

* `id` (integer): ID da supercategoria
* `name` (string): Nome da supercategoria

***

## ❌ Erros Comuns

| Código | Descrição                                    |
| ------ | -------------------------------------------- |
| 400    | Requisição inválida ou parâmetros incorretos |
| 401    | Token de autenticação ausente ou inválido    |
| 500    | Erro interno no servidor                     |

***

## 📘 Exemplos de Requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/supercategories?page=1&size=100' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/supercategories?page=1&size=100', {
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
  "https://SeuDominio.involves.com/v3/environments/123/supercategories?page=1&size=100",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/supercategories?page=1&size=100', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
})
.then(response => {
  console.log(response.data);
});
```
