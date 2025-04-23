---
description: Retorna os dados de uma categoria de produto com base em seu ID.
---

# Detalhes da Categoria

***

## 🧾 Resumo

| Método | Endpoint                                                 | Autenticação | Descrição                        |
| ------ | -------------------------------------------------------- | ------------ | -------------------------------- |
| `GET`  | /v3/environments/{environmentId}/categories/{categoryId} | ✅ Token      | Retorna uma categoria específica |

***

## 🟢 Método

GET

***

## 🔗 Endpoint

`/v3/environments/{environmentId}/categories/{categoryId}`

***

## 📥 Parâmetros da Requisição

| Parâmetro     | Tipo    | Local | Obrigatório | Descrição       |
| ------------- | ------- | ----- | ----------- | --------------- |
| environmentId | integer | path  | Sim         | ID do ambiente  |
| categoryId    | integer | path  | Sim         | ID da categoria |

***

## 🔄 Resposta

### ✅ 200 – Categoria retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "supercategory": {
    "id": 0,
    "_link": "string"
  }
}
```

***

## 🧬 Esquema da Resposta

**Category**

* `id` (integer): ID da categoria
* `name` (string): Nome da categoria
* `supercategory` (Link): Referência à supercategoria associada

***

## ❌ Erros Comuns

| Código | Descrição                                  |
| ------ | ------------------------------------------ |
| 400    | Requisição malformada ou inválida          |
| 401    | Não autorizado – token inválido ou ausente |
| 404    | Categoria não encontrada                   |
| 500    | Erro interno no servidor                   |

***

## 📘 Exemplos de Requisição

```bash
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/categories/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/categories/456', {
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
  "https://SeuDominio.involves.com/v3/environments/123/categories/456",
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/categories/456', {
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
