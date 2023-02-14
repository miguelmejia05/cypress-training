class IFramePage {

    private iframePageUrl: string;
    private iframe: string;
    private cssButton: string;
    private title: string;

    constructor() {
        this.iframePageUrl = "https://www.w3schools.com/html/html_iframe.asp";
        this.iframe = 'iframe[src="default.asp"]';
        this.cssButton = '#topnav a[title="CSS Tutorial"]';
        this.title = "h1";
    }

    public visit(){
        cy.visit(this.iframePageUrl);
    }

    public goToCssPageInFrame(){
        cy.iframe(this.iframe).find(this.cssButton).click();
        cy.wait(5000);
    }
      
    public getFrameTitle(frameTitle: string){
        cy.iframe(this.iframe).find(this.title).should('contain.text', frameTitle);
    }
      
}

export { IFramePage }