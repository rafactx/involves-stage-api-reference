# Pesquisa

📊 A seção de **Pesquisa** da API Involves centraliza os endpoints relacionados a **formulários, respostas e fluxos de pesquisa**, oferecendo recursos para **criação, edição, listagem e sincronização**. É ideal para contextos em que o usuário coleta e gerencia dados em campo ou na retaguarda — com suporte a respostas, validações, imagens e muito mais.


### ⚙️ Funcionalidades disponíveis

Com esses endpoints, você pode:

* Criar e listar **formulários e campos personalizados**
* Resgatar **respostas de pesquisa**, inclusive com filtros por status, usuário e PDV
* Sincronizar pesquisas e formulários com base em **timestamps**
* Gerenciar **versões, imagens, permissões e validações** das pesquisas

Tudo com estrutura **RESTful** e organização por versões (`v1`, `v3`, etc.), garantindo compatibilidade com diferentes ambientes e sistemas legados.


### ✅ Observações importantes

* Autenticação via **Bearer Token** é obrigatória
* Requisições de envio de dados utilizam `Content-Type: application/json`
* A estrutura segue o padrão **RESTful**, agrupada por métodos HTTP e recurso
* Endpoints com `/sync/timestamp` são otimizados para **sincronização incremental**
* Use sempre a **versão da API adequada** ao seu ambiente (`v1`, `v2`, `v3`…)
