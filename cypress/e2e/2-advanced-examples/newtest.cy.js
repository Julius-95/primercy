describe("haciendo busquedas",()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it.skip("buscar",()=>{ 
    cy.search('dress')
        cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.title).should('contain','"dress"');
        })
    })
    it.skip("error",()=>{
    cy.search('something')
        cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    })
    it("type and clear",()=>{
        cy.search('hut')
    })
})