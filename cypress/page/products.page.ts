class ProductsPage {

    private productTShirtAddToCartButton: string;
    private shoppingCartButton: string;
    private productItem: string;
    private productName: string;
    private productSelected: string;

    constructor() {
        this.productTShirtAddToCartButton = 'button[data-test*="add-to-cart"]';
        this.shoppingCartButton = '.shopping_cart_link';
        this.productItem = 'div.inventory_item';
        this.productName = `${this.productItem} a[id*="title"]`;
        this.productSelected = 'div.inventory_item_name'
    }

    public selectProductAndGoToShoppingCart(productName: string): void {
        cy.get(this.productSelected).contains(productName).click();
        cy.get(this.productTShirtAddToCartButton).click();
        cy.get(this.shoppingCartButton).click();
    }

    public getProductItems(){
        return cy.get(this.productItem);
    }

    public validateItemsNumber(itemsNumber: number){
        cy.get(this.productItem).should("have.length", itemsNumber);
    }

    public validateItemsNames(names: string[]){
        cy.get(this.productName).each((item, index) => {
          cy.wrap(item).should("contain.text", names[index]);
        })
    }

}

export { ProductsPage }