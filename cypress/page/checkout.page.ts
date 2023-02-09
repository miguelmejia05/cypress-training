class CheckoutPage {

    private firstNameInput: string;
    private lastNameInput: string;
    private postalCodeInput: string;
    private continueButton: string;
    private finishButton: string;
    private productInventoryLabel: string;
    private successfulPurchaseLabel: string;

    constructor() {
        this.firstNameInput = "input#first-name";
        this.lastNameInput = "input#last-name";
        this.postalCodeInput = "input#postal-code";
        this.continueButton = "input#continue";
        this.finishButton = "#finish";
        this.productInventoryLabel = ".inventory_item_name";
        this.successfulPurchaseLabel = "h2";
    }

    public fillPersonalInformationAndContinue(): void {
        cy.get(this.firstNameInput).type('John');
        cy.get(this.lastNameInput).type('Doe');
        cy.get(this.postalCodeInput).type('000000');
        cy.get(this.continueButton).click();
    }

    public finishPurchase(): void {
        cy.get(this.finishButton).click();
    }

    public checkProductIsTShirt(): void {
        cy.get(this.productInventoryLabel).should('contain.text', 'Sauce Labs Bolt T-Shirt');
    }

    public checkSuccessfulPurchase(): void {
        cy.get(this.successfulPurchaseLabel).should('contain.text', 'THANK YOU FOR YOUR ORDER');
    }

}

export { CheckoutPage }