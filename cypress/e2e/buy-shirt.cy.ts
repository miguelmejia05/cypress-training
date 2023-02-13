import {LoginPage, ProductsPage, ShoppingCartPage, CheckoutPage} from '../page/index';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const shoppingCartPage = new ShoppingCartPage();
const checkoutPage = new CheckoutPage();

describe('Buy a t-shirt', () => {
	it('then the t-shirt should be bought', () => {
		loginPage.visitLoginPage();
		loginPage.logIn();
		productsPage.selectProductAndGoToShoppingCart('Sauce Labs Bolt T-Shirt');
		shoppingCartPage.goToCheckout();
		checkoutPage.fillPersonalInformationAndContinue();
		checkoutPage.checkProductIsTShirt();
		checkoutPage.finishPurchase();
		checkoutPage.checkSuccessfulPurchase();
	});
});
