import {expect } from '@playwright/test'
const { faker } = require('@faker-js/faker')


export class Todo{
    
    constructor(page){
        this.page = page
    }

    async visit(){
        await this.page.goto('https://kanban-dusky-five.vercel.app/');
    }

    async switchButton(){
        await this.page.locator('.react-switch-bg').click();
    }

    async createCard(nameCard){
        await this.page.locator('.custom-input').getByText('Adicionar outra lista').click()
        await this.page.getByRole('textbox').fill(nameCard)
        await this.page.locator('.custom-input .btn').click()
    }

    async createTask(nameCard){
        for (let i = 0; i < 3; i++) {
                const title = faker.word.words({ count: 3 })
                await this.page.locator(`#${nameCard}CreateTask`).click()
                await this.page.getByRole('textbox').fill(title);
                const btn = this.page.locator('.custom-input .btn')
                await expect(btn).toHaveText("Enviar");
                await btn.click()
        }
    }

    async createTaskAndTag(nameCard, nameInput){
                await this.page.locator(`#${nameCard}CreateTask`).click()
                await this.page.getByRole('textbox').fill(nameInput);
                const btn = this.page.locator('.custom-input .btn')
                await expect(btn).toHaveText("Enviar");
                await btn.click()

                await this.page.locator('.board-cards p', { hasText: nameInput}).click();
                //Editando o nome
                await this.page.locator('.custom-input p', { hasText: nameInput}).click();
                await this.page.locator('input[type=text]').fill("Editar 1")
                await this.page.getByRole('button').click(); //Botão de confirm

                await this.page.locator('section ul li').nth(1).click();
                await this.page.locator('.custom-input p', {hasText: 'Adicionar nova Tag'}).click()
                await this.page.locator('input[type=text]').fill("Tag 1")
                await this.page.getByRole('button', { name: 'Enviar' }).click();

                await this.page.locator('section ul li').nth(2).click();
                await this.page.locator('.custom-input p', {hasText: 'Adicionar nova Tag'}).click()
                await this.page.locator('input[type=text]').fill("Tag 2")
                await this.page.getByRole('button', { name: 'Enviar' }).click();
                await this.page.locator('.custom-input p', {hasText: 'Adicionar nova Tag'})
    }

}  