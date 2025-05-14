# Ponto de Venda

A seção de **Ponto de Venda** da API Involves concentra todos os recursos relacionados aos locais de execução em campo: PDVs, suas redes, canais, perfis, tipos, localizações e muito mais. Se você precisa consultar, criar ou atualizar pontos de venda — ou qualquer entidade relacionada —, aqui é o seu lugar.

Essa coleção cobre desde endpoints clássicos em **v1**, recursos otimizados em **v3**, e até versões descontinuadas (marcadas para referência). Tudo agrupado de forma semântica para facilitar sua navegação e integração.


### ⚙️ Funcionalidades disponíveis

Você encontrará recursos organizados em subgrupos como:

* **PDV**: criação, edição, listagem e detalhes
* **Rede / Região / Regional**: hierarquias comerciais
* **Perfil / Tipo / Canal de PDV**: caracterização de ponto de venda
* **Endereço, Cidade, Estado, País**: dados geográficos
* **Shopping e Macroregional**: entidades estendidas


### ✅ Observações importantes

* A maior parte dos endpoints requer autenticação via **Bearer Token**
* Os métodos `POST`, `PUT` e `PATCH` usam `Content-Type: application/json`
* Versões diferentes da API (v1, v3) coexistem — confira as anotações de **deprecated** ou **não realizado**
* Todos os dados retornam em `application/json`
* A estrutura é **RESTful** com respostas padronizadas e status HTTP claros


💡 **Dica**: para recursos legados ou sincronização, verifique os endpoints de `/sync/timestamp` disponíveis em outra seção dedicada à **sincronização de dados**.
