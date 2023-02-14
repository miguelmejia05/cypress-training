class UploadPage {

    private uploadPageUrl: string;
    private selectFileButton: string;
    private uploadButton: string;
    private fileNameLabel: string;

    constructor() {
        this.uploadPageUrl = "https://the-internet.herokuapp.com/upload";
        this.selectFileButton = "#file-upload";
        this.uploadButton = "#file-submit";
        this.fileNameLabel = "#uploaded-files";
    }

    public visitUploadPage(): void {
        cy.visit(this.uploadPageUrl);
    }

    public uploadFile(){
        cy.get(this.selectFileButton).attachFile('example.json');
        cy.get(this.uploadButton).click();
    }

    public checkUploadedFileName(){
        cy.get(this.fileNameLabel).should('contain.text', 'example.json');
    }

}

export { UploadPage }