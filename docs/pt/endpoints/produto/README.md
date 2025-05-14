# Produto

📦 A seção **Produto** da API Involves oferece tudo o que você precisa para gerenciar o catálogo de itens comercializados no seu ambiente — **linhas de produto, SKUs, marcas, categorias e supercategorias**.

Com ela, você pode **listar, buscar, criar e atualizar** produtos com flexibilidade, além de consultar estruturas hierárquicas e atributos personalizados por item.


### ⚙️ Funcionalidades disponíveis

* Gerenciar **linhas de produto** e **SKUs** com atributos completos
* Obter **marcas, categorias e supercategorias** organizadas
* Consultar dados paginados ou detalhados por ID
* Realizar **integrações via PATCH** para atualizações parciais
* Usar rotas RESTful modernas nas versões `v1` e `v3`


### ✅ Observações importantes

* Todos os endpoints exigem **autenticação via Bearer Token**
* O formato de envio de dados é `application/json`
* A maioria dos endpoints de leitura retorna objetos ricos e hierárquicos
* Os métodos estão divididos por HTTP verb: `GET`, `POST` e `PATCH`

> 💡 **Dica Dev**: Precisa criar um produto com campos customizados? Use os exemplos de `customFields` nas rotas de criação e atualize apenas o necessário com PATCH.
