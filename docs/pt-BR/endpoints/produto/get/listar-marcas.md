---
description: Retorna uma lista paginada de marcas cadastradas em um ambiente.
---

# Listar Marcas

***

## 🧾 Resumo

| Método | Endpoint                                | Autenticação | Descrição                    |
| ------ | --------------------------------------- | ------------ | ---------------------------- |
| `GET`  | /v3/environments/{environmentId}/brands | ✅ Token      | Lista de marcas por ambiente |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v3/environments/{environmentId}/brands`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição                        |
| ------------- | ------- | ----- | ----------- | -------------------------------- |
| environmentId | integer | path  | Sim         | ID do ambiente                   |
| page          | integer | query | Não         | Número da página (default: 1)    |
| size          | integer | query | Não         | Tamanho da página (default: 100) |
| name          | string  | query | Não         | Nome da marca                    |

***

## 🔄 Resposta

### ✅ 206 – Lista paginada de marcas retornada com sucesso

```json
[
  {
    "id": 0,
    "name": "string",
    "regionals": {
      "id": 0,
      "_link": "string"
    }
  }
]
```

***

## 🧬 Esquema da Resposta

**Brand**

* `id` (integer): ID da marca
* `name` (string): Nome da marca
* `regionals` (Link): Referência às regionais relacionadas

***

## 📘 Exemplos de Requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/brands?page=1&size=50' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/brands?page=1&size=50', {
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
  "https://SeuDominio.involves.com/v3/environments/123/brands?page=1&size=50",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/brands?page=1&size=50', {
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
