describe('create a new user',()=>{
    it('user',()=>{
        cy.visit('/');
        cy.get('.login').click();
        cy.get('#email_create').type('usuarioprueba@gmail.com');
        cy.get('#SubmitCreate > span').click();
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type('julio');
        cy.get('#customer_lastname').type('alemán');
        cy.get('#email').clear().type('usuarioprueba@gmail.com');
        cy.get('#passwd').type('pelota01');
        cy.get('#days').select('16');
        cy.get('#months').select('July');
        cy.get('#years').select('1995');
        cy.get('#newsletter').check();
        cy.get('#optin').check();
        cy.get('#company').type('conexión');
        cy.get('#address1').type('P.O.BOX 1234 la libertad street');
    })    
})