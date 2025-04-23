---
description: Retorna as marcas modificadas após uma data especificada em milissegundos.
---

# Marca

GET /v1/{environmentId}/brand/sync/timestamp/{timestamp}

## 📥 Parâmetros

|      Nome     |   Tipo  | Obrigatório |                             Descrição                            |
| :-----------: | :-----: | :---------: | :--------------------------------------------------------------: |
| environmentId | integer |     sim     |                          ID do ambiente                          |
|   timestamp   | integer |     sim     | Data em milissegundos que será utilizada como início da consulta |
|      size     | integer |     não     |         Número de registros a serem listados (padrão: 50)        |
|     count     | boolean |     não     |       Indica se deve retornar o número estimado de páginas       |
| ignoreExclude | boolean |     não     |            Indica se deve ignorar as marcas excluídas            |

## ✅ Respostas

| Código |               Descrição               |
| :----: | :-----------------------------------: |
|   200  | Lista de marcas retornada com sucesso |

### 💡 Exemplo de retorno - 200 OK

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

## 📘 Exemplo de requisição

### \[🟢 cURL]

```bash
curl --request GET 'https://SeuDominio.involves.com/v1/123/brand/sync/timestamp/1700000000000?size=50&count=true&ignoreExclude=true'
```

### \[🟡 JavaScript (Fetch)]

```javascript
fetch('https://SeuDominio.involves.com/v1/123/brand/sync/timestamp/1700000000000?size=50&count=true&ignoreExclude=true')
  .then(response => response.json())
  .then(data => console.log(data));
```

### \[🔵 Python (requests)]

```python
import requests

url = "https://SeuDominio.involves.com/v1/123/brand/sync/timestamp/1700000000000"
params = {
    "size": 50,
    "count": "true",
    "ignoreExclude": "true"
}

response = requests.get(url, params=params)
print(response.json())
```

### \[🟣 Node.js (axios)]

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/brand/sync/timestamp/1700000000000', {
  params: {
    size: 50,
    count: true,
    ignoreExclude: true
  }
})
.then(response => console.log(response.data));
```
