---
description: Retorna os dados da supercategoria de uma linha de produto com base no ID.
---

# Supercategoria da Linha de Produto ⚠️

⚠️ _Este endpoint está obsoleto (Deprecated)_\


## 🧾 Resumo

| Método | Endpoint                                          | Autenticação | Descrição                         |
| ------ | ------------------------------------------------- | ------------ | --------------------------------- |
| `GET`  | /v1/{environmentId}/productlinesupercategory/{id} | ✅ Token      | Retorna uma supercategoria por ID |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v1/{environmentId}/productlinesupercategory/{id}`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição            |
| ------------- | ------- | ----- | ----------- | -------------------- |
| environmentId | integer | path  | Sim         | ID do ambiente       |
| id            | integer | path  | Sim         | ID da supercategoria |

***

## 🔄 Resposta

### ✅ 200 – Supercategoria retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "updatedAt": "2025-04-22T19:50:01.106Z",
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

### ❌ 404 – Supercategoria não encontrada

```json
{
  "error": "Not Found",
  "message": "Supercategoria não localizada."
}
```

***

## 🧬 Esquema da Resposta

**Supercategory V1**

* `id` (integer): ID da supercategoria
* `name` (string): Nome da supercategoria
* `updatedAt` (datetime): Data da última atualização
* `deleted` (boolean): Supercategoria foi excluída?

***

## 📘 Exemplos de Requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v1/123/productlinesupercategory/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v1/123/productlinesupercategory/456', {
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
  "https://SeuDominio.involves.com/v1/123/productlinesupercategory/456",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/productlinesupercategory/456', {
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
