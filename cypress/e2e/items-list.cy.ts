import {LoginPage, ProductsPage, ShoppingCartPage, CheckoutPage} from '../page/index';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

describe('The user navigates to the product items page', () => {
	it('show the available products', () => {
		const itemsNumber = 6;
		const itemsNames = ['Sauce Labs Backpack',
			'Sauce Labs Bike Light',
			'Sauce Labs Bolt T-Shirt',
			'Sauce Labs Fleece Jacket',
			'Sauce Labs Onesie',
			'Test.allTheThings() T-Shirt (Red)'];
		loginPage.visitLoginPage();
		loginPage.logIn();
		productsPage.validateItemsNumber(itemsNumber);
		productsPage.validateItemsNames(itemsNames);
	});
});
