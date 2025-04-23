# Roteiro

🗺️ A seção **Roteiro** da API Involves permite **agendar, listar, editar e consultar** visitas de campo realizadas por colaboradores. Ideal para controlar a execução de visitas planejadas, acompanhar justificativas de ausência (no-show) e montar roteiros otimizados.

***

### 🚀 O que você pode fazer

* Obter o **roteiro completo de um colaborador** em um dia
* Listar e **filtrar visitas agendadas**
* Cadastrar múltiplas visitas por colaborador
* Identificar visitas **não realizadas (no-show)**
* Remover visitas previamente agendadas

***

### ✅ Observações importantes

* Todos os endpoints exigem **autenticação via Bearer Token**
* O formato das requisições com payload é `application/json`
* Endpoints seguem convenções RESTful modernas, com suporte a versionamento (`v2`, `v3`)
* Rotas obsoletas (ex: `/v1/visit/find`) foram mantidas apenas para referência histórica

> 💡 **Dica Dev**: Combine os filtros `startDate`, `endDate` e `visited` nos endpoints de visitas para construir dashboards de presença e produtividade.
