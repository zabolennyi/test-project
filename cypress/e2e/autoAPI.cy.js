import User1 from '../fixtures/User1.json'
import {findPetsByStatus, petsSold} from '../support/utils'

// 1. Crea tu usuario mediante petición HTTP y posteriormente recupera sus datos llamando al servicio correspondiente.
describe('automation API', () => {
  it('create user and get users info', () => {
    cy.createUserPetstore(User1).then(() => {
      cy.getUserPetstore(User1.username).then((newUser) => {
        console.log(newUser)
      })
    })
  })
})

// 2. Recoge mediante petición HTTP, el JSON que retorna el endpoint /pet/findByStatus y lista mediante una función los nombres de las mascotas que se hayan vendido.
describe('automation API', () => {
  it('get info of pets sold', () => {
    findPetsByStatus('sold').then(pets => {
      petsSold().then((pets) => {
        console.log(pets)
        })
     })
  })
})
