---
description: Retorna os dados de uma marca específica com base no ID.
---

# Detalhes de Marca (ID)

***

## 🧾 Resumo

| Método | Endpoint                                          | Autenticação | Descrição              |
| ------ | ------------------------------------------------- | ------------ | ---------------------- |
| `GET`  | /v3/environments/{environmentId}/brands/{brandId} | ✅ Token      | Busca uma marca por ID |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v3/environments/{environmentId}/brands/{brandId}`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição      |
| ------------- | ------- | ----- | ----------- | -------------- |
| environmentId | integer | path  | Sim         | ID do ambiente |
| brandId       | integer | path  | Sim         | ID da marca    |

***

## 🔄 Resposta

### ✅ 200 – Marca retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "regionals": {
    "id": 0,
    "_link": "string"
  }
}
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
  --url 'https://SeuDominio.involves.com/v3/environments/123/brands/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/brands/456', {
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
  "https://SeuDominio.involves.com/v3/environments/123/brands/456",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/brands/456', {
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
