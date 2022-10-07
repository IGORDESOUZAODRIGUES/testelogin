

class SignupPage{
    go(){

        cy.visit('')
    }
    fillForm(cadastro){
        cy.get('input[name="login"]').type(cadastro.login)
        cy.get('input[type="password"]').type(cadastro.senha)

    }
    submit(){
        cy.get('button[type="submit"]').click()
        
        //cy.get('.sc-keSoGd :nth-child(1) > .sc-jfmDQi > .sc-lbxAil').click()
        //cy.get('.sc-dGjIxE .sc-cjCnCM > p').click()
       // cy.get('.bIurkc').click()
        
        
       // cy.get('.sc-cOFTSb .sc-cYfpLr > .sc-ehmTmK').click()
        //cy.get('.sc-bjUoiL').click()
        //cy.get(':nth-child(1) > .sc-idiyUo > .sc-dIouRR > svg').click()
    }
    modalContentShouldBe(mensagemDeValidacao){
       // cy.get('.sc-cvVKib').should('have.text',mensagemDeValidacao)
       cy.get('#main main h1').should('have.text', 'Boas vindas!')
    }
    Error(){
        cy.get('div [class="sc-ftvSup ezYDli"] [stroke="currentColor"]').should('be.visible')
    }
}

export default SignupPage;