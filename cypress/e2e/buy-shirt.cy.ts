describe('Buy a t-shirt', () => {
	it('then the t-shirt should be bought', () => {
		cy.visit('https://www.amazon.com/');
		cy.get('div[class*=\'search-field\'] input').type('t-shirt');
		cy.get('div[class*=\'search-submit\'] input').click();
		cy.get('span[data-component-type*=\'search-results\'] div[data-component-type*=\'search-result\']:nth-child(3)')
			.click();
		cy.get('input#add-to-cart-button').click();
		cy.get('input[name*=\'Checkout\']:first-child').click();
		cy.get('h1').should('contain.text', 'Sign in');
	});
});
