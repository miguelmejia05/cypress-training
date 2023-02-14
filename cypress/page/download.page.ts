class DownloadPage {

    private downloadPageUrl: string;
    private downloadButton: string;

    constructor() {
        this.downloadPageUrl = "https://demoqa.com/upload-download";
        this.downloadButton = "#downloadButton";
    }

    public visitDownloadPage(): void {
        cy.visit(this.downloadPageUrl);
    }

    public downloadFile(){
        cy.get(this.downloadButton).click();
    }

    public checkDownloadedFile(){
        cy.readFile('cypress/downloads/sampleFile.jpeg')
    }

}

export { DownloadPage }