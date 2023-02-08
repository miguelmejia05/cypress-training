describe('Buy a t-shirt', () => {
	it('then the t-shirt should be bought', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.get('input#user-name').type('standard_user');
		cy.get('input#password').type('secret_sauce');
		cy.get('input#login-button').click();
		cy.get('button[data-test*="-bolt-t-shirt"]').click();
		cy.get('.shopping_cart_link').click();
		cy.get('#checkout').click();
		cy.get('input#first-name').type('John');
		cy.get('input#last-name').type('Doe');
		cy.get('input#postal-code').type('Doe');
		cy.get('input#continue').click();
		cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Bolt T-Shirt');
		cy.get('#finish').click();
		cy.get('h2').should('contain.text', 'THANK YOU FOR YOUR ORDER');
	});
});
