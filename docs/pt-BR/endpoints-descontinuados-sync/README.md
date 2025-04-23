# Endpoints Descontinuados (Sync)

## ℹ️ Informações Gerais

### 🎯 Objetivo

A antiga API de sincronização (Sync) do Involves Stage foi projetada para fornecer dados atualizados com base em modificações ocorridas em entidades específicas a partir de um **timestamp**.

> ⚠️ Importante: embora os endpoints filtrem os dados por períodos progressivos de tempo, **cada entidade é sempre retornada em seu estado mais recente**, e não em múltiplas versões.

***

### ⚙️ Como Funciona

As requisições devem conter **dois parâmetros obrigatórios**:

* `environmentId`: ID do ambiente no qual a consulta será realizada.\
  🔍 Pode ser encontrado na URL de edição do ambiente no painel administrativo do Involves Stage (web).
* `timestamp`: data/hora da última modificação, expressa em **milissegundos** desde o marco zero do **Unix Timestamp**.

O formato utilizado é o [Unix Timestamp](https://www.unixtimestamp.com/), que representa o tempo como um número contínuo de milissegundos a partir de **01/01/1970 00:00:00.000 UTC**.

***

### 🛠 Dica para testes

Você pode usar o site [CurrentMillis.com](https://currentmillis.com/) para converter uma data específica em timestamp, ou vice-versa. Ferramentas como **Postman** também permitem testar facilmente os endpoints com esses valores.

***

### 📤 Exemplo de uso

Suponha que você envie uma requisição com:

```
timestamp=1325426400000
```

Esse valor corresponde a:

```
01/01/2012 12:00:00 UTC
```

A resposta conterá apenas os registros modificados **após essa data**.
