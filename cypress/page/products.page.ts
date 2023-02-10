class ProductsPage {

    private productTShirtAddToCartButton: string;
    private shoppingCartButton: string;
    private productItem: string;
    private productName: string;

    constructor() {
        this.productTShirtAddToCartButton = 'button[data-test*="bolt-t-shirt"]';
        this.shoppingCartButton = '.shopping_cart_link';
        this.productItem = 'div.inventory_item';
        this.productName = `${this.productItem} a[id*="title"]`;
    }

    public selectProductAndGoToShoppingCart(): void {
        cy.get(this.productTShirtAddToCartButton).click();
        cy.get(this.shoppingCartButton).click();
    }

    getProductItems(){
        return cy.get(this.productItem);
    }

    validateItemsNumber(itemsNumber: number){
        cy.get(this.productItem).should("have.length", itemsNumber);
    }

    validateItemsNames(names: string[]){
        cy.get(this.productName).each((item, index) => {
          cy.wrap(item).should("contain.text", names[index]);
        })
    }

}

export { ProductsPage }