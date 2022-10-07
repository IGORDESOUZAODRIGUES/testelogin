/// <reference types="Cypress" />
import SignupPage from '../pages/signupPage'

describe('Teste de login',() =>{
    var signup = new SignupPage()

    beforeEach(function(){
        cy.fixture("login").then((l) =>{
            this.login = l
        }) 
        cy.visit('/')
    })
    it('Teste de login cpf',function(){
    
        signup.fillForm(this.login.credenciais)
        signup.submit()
    
    
        signup.modalContentShouldBe('ANA o que você deseja fazer hoje?')
    })

    it.only('Teste de login com carterinha',function(){
        

        signup.go()
        signup.fillForm(this.login.credenciais1)
        signup.submit()
    
    
        signup.modalContentShouldBe('ANA o que você deseja fazer hoje?')
    })
    it('Teste de login com error',function(){
        

        signup.go()
        signup.fillForm(this.login.credenciais2)
        signup.submit()
        signup.Error()
    
    
        
    })


})