// @ts-check
import { test, expect } from '@playwright/test';
const { Todo } = require('../support/actions/Todo')

let toDo

test.beforeEach(async ({ page }) => {
    toDo = new Todo(page)
})

test('Deve entrar no site e validar se possui header', async ({ page }) => {
  await toDo.visit()
  const html = await page.content();
  console.log(html);
  await page.getByRole('heading', { name: 'Quadro Kanban' }).click();
});

test('Validar botão de switch', async ({ page }) => {
  await toDo.visit()
  await toDo.switchButton()
});

test('Adicionar Card', async ({ page }) => {
  await toDo.visit()
  const firstCard = 'TestCard';
  await toDo.createCard(firstCard)
});

test('Adicionar card e campos de tarefa', async ({ page }) => {
  await toDo.visit()
  const nameCard = 'TestCard';
  await toDo.createCard(nameCard)
  await toDo.createTask(nameCard)
});

test('Remover card', async ({ page }) => {
  await toDo.visit()

  const nameCardRemove = 'CardRemove';
  await toDo.createCard(nameCardRemove)
  await toDo.removeCard(nameCardRemove)
});

test('Adicionar card, implementar tarefas e realizar a exclusão', async ({ page }) => {
  await toDo.visit()
  const nameCardRemove = 'CardRemove';
  await toDo.createCard(nameCardRemove)
  await toDo.createTask(nameCardRemove)
  await toDo.removeCard(nameCardRemove)
});

test('Adicionar card, implementar tarefa com tags', async ({ page }) =>{
  await toDo.visit()
  const nameCard = 'TestCard';
  await toDo.createCard(nameCard)
  await toDo.createTaskAndTag(nameCard,'Primeiro Campo')
})