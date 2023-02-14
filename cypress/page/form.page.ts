class FormPage {

    private formPageUrl: string;
    private nameInput: string;
    private lastNameInput: string;
    private emailInput: string;
    private genderRadioButton: string;
    private mobileButton: string;
    private dateOfBirth: string;
    private hobbiesCheckbox: string;
    private currentAddressInput: string;
    private submitButton: string;

    constructor() {
        this.formPageUrl = "https://demoqa.com/automation-practice-form";
        this.nameInput = "#firstName";
        this.lastNameInput = "#lastName";
        this.emailInput = "#userEmail";
        this.genderRadioButton = "input[id*='gender']";
        this.mobileButton = "#userNumber";
        this.dateOfBirth = "#dateOfBirthInput";
        this.hobbiesCheckbox = "input[id*='hobbies'] + label";
        this.currentAddressInput = "#currentAddress";
        this.submitButton = "#submit"
    }

    public visitFormPage(): void {
        cy.visit(this.formPageUrl);
    }

    public fillForm(personalInformation: any): void {
        cy.get(this.nameInput).type(personalInformation.name);
        cy.get(this.lastNameInput).type(personalInformation.lastName);
        cy.get(this.emailInput).type(personalInformation.email);
        cy.get(this.genderRadioButton + `[value='${personalInformation.gender}']`).click({force: true});
        cy.get(this.mobileButton).type(personalInformation.mobileNumber);
        cy.get(this.dateOfBirth).type('{selectall}' + personalInformation.dateOfBirth + '{enter}');
        const hobbiesCheckbox = this.hobbiesCheckbox;
        personalInformation.hobbies.forEach(function (hobbie: string) {
            cy.get(hobbiesCheckbox).contains(hobbie).click();
        });
        cy.get(this.currentAddressInput).type(personalInformation.currentAddress);
        cy.get(this.submitButton).click({force: true});
    }

}

export { FormPage }