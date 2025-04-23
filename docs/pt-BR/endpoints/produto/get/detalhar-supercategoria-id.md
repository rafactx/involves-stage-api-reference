---
description: Retorna uma supercategoria com base no ID especificado para o ambiente.
---

# Detalhar Supercategoria (ID)

***

## 🧾 Resumo

| Método | Endpoint                                                           | Autenticação | Descrição                  |
| ------ | ------------------------------------------------------------------ | ------------ | -------------------------- |
| `GET`  | /v3/environments/{environmentId}/supercategories/{supercategoryId} | ✅ Token      | Retorna uma supercategoria |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v3/environments/{environmentId}/supercategories/{supercategoryId}`

***

## 📥 Parâmetros da Requisição

| Parâmetro       | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| environmentId   | integer | path  | Sim         | ID do ambiente       |
| supercategoryId | integer | path  | Sim         | ID da supercategoria |

***

## 🔄 Resposta

### ✅ 200 – Supercategoria retornada com sucesso

```json
{
  "api.doc.v3.supercategory.id.description": 0,
  "api.doc.v3.supercategory.name.description": "string"
}
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
| 404    | Supercategoria não encontrada                |
| 500    | Erro interno no servidor                     |

***

## 📘 Exemplos de Requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/supercategories/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/supercategories/456', {
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
  "https://SeuDominio.involves.com/v3/environments/123/supercategories/456",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/supercategories/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
})
.then(response => {
  console.log(response.data);
});
```
