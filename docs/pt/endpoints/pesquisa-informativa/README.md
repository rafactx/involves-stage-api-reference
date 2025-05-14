# Pesquisa Informativa

📝 A seção de **Pesquisa Informativa** da API Involves oferece endpoints para **criar, listar e consultar pesquisas** utilizadas no contexto de visitas de campo. Diferente das pesquisas obrigatórias, essas são focadas em **coleta de informações contextuais**, sem necessidade de resposta ou ação corretiva — ideais para observações, registros auxiliares ou fluxos informativos.


### ⚙️ Funcionalidades disponíveis

Nesta seção você pode:

* **Criar pesquisas informativas** vinculadas a formulários
* **Consultar pesquisas ativas ou específicas por ID**
* **Listar e filtrar registros informativos com base em critérios diversos**

Tudo isso com estrutura RESTful, respostas em JSON e endpoints agrupados por método para facilitar sua navegação.


### ✅ Observações importantes

* Autenticação via **Bearer Token** é obrigatória em todos os endpoints
* As rotas `POST` e `PUT` utilizam `Content-Type: application/json`
* Pesquisas informativas **não exigem preenchimento obrigatório**, e servem como ferramenta de apoio para equipes de campo
* Os recursos seguem padrão **RESTful** e estão disponíveis em versões compatíveis com diferentes ambientes

