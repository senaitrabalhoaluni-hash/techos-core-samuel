# TechOS Core - Documentação de Requisitos e Modelagem

## 1. USER STORIES (INVEST)
* **US01:** "Como técnico, quero abrir uma Ordem de Serviço para registrar um conserto."
  * **C.A.01:** Deve validar o ID do cliente.
  * **C.A.02:** O status inicial deve ser sempre 'ABERTA'[cite: 4].
* **US02:** "Como cliente, quero visualizar o status do meu equipamento."[cite: 4]

## 2. REQUISITOS NÃO-FUNCIONAIS (RNF)
* **RNF01 (Segurança):** Sanitização de inputs contra XSS/OWASP no cadastro[cite: 4].
* **RNF02 (Desempenho):** Tempo de resposta na criação de chamados < 2s[cite: 4].

## 3. DIAGRAMA DE CLASSES
+---------------------------------------------------+Usuario- id: int- nome: string- email: string+---------------------------------------------------+                     ^
                     | (Herança)[cite: 4]
   +-----------------+-----------------+
   |                                   |
+--------------+                   +---------------+|   Cliente    |                   |    Tecnico    ||--------------|                   |---------------|| - telefone   |                   | - especialidade|+--------------+                   +---------------++---------------------------------------------------+OrdemServico- id: int- cliente: Cliente- tecnico: Tecnico- status: string- descricao: string+---------------------------------------------------+