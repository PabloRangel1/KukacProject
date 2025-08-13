#  Testes Automatizados - Kukac

Este projeto contém uma suíte de testes automatizados desenvolvida com [Playwright](https://playwright.dev/) para validar as funcionalidades do **Quadro Kanban**:

**https://kanban-dusky-five.vercel.app/**

---

## Tecnologias Utilizadas

- Node.js
- Playwright
- Faker


---




##  Cenários de Teste

Os testes cobrem as seguintes funcionalidades:

1. **Validar Header**  
   - Verifica se o título "Quadro Kanban" está presente na página.

2. **Validar Botão de Switch**  
   - Testa o botão para alternar o tema.

3. **Adicionar Card**  
   - Cria uma nova lista (card) no quadro.

4. **Adicionar Card e Criar Tarefas**  
   - Adiciona um card e cria três tarefas usando nomes aleatórios.

5. **Remover Card**  
   - Cria e remove um card do quadro.

6. **Fluxo Completo de Adição e Exclusão**  
   - Adiciona card, cria tarefas e remove o card criado.

7. **Adicionar Card com Tarefas e Tags**  
   - Cria um card, adiciona tarefas e associa múltiplas tags.

---

## Pré-requisitos

Antes de executar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

---

##  Instalação

```bash
# Clonar o repositório
1. git clone https://github.com/seu-usuario/projeto-kanban-tests.git

2.Executar testes em Headless
npx playwright test 

3.Executar ver o relatório dos testes
npx playwright show-report

4. Executar interface para visualização dos testes.
npx playwright test --ui
```
▶️[Video de auxilio]()
