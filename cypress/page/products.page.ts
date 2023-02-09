class ProductsPage {

    private productTShirtAddToCartButton: string;
    private ShoppingCartButton: string;

    constructor() {
        this.productTShirtAddToCartButton = 'button[data-test*="bolt-t-shirt"]';
        this.ShoppingCartButton = '.shopping_cart_link';
    }

    public selectProductAndGoToShoppingCart(): void {
        cy.get(this.productTShirtAddToCartButton).click();
        cy.get(this.ShoppingCartButton).click();
    }

}

export { ProductsPage }