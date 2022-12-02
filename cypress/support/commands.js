import {apiUrl} from '../support/data'

Cypress.Commands.add('createUserPetstore', (User) => {
  cy.request({
    url: `${apiUrl}/user`,
    method: 'POST',
    body: User,
  }).then((response) => {
    expect(response.status).to.eq(200)
    return response.body
  })
})

Cypress.Commands.add('getUserPetstore', (username) => {
  cy.request({
    url: `${apiUrl}/user/${username}`,
    method: 'GET',
  }).then((response) => {
    expect(response.status).to.eq(200)
    return response.body
  })
})

//accept only 3 status states: avaliable, pending, sold
Cypress.Commands.add('findPetsByStatus', (status) => {
  cy.request({
    url: `${apiUrl}/pet/findByStatus`,
    method: 'GET',
    qs: {
      status: status
     },
  }).then((response) => {
    expect(response.status).to.eq(200)
    return response.body
  })
})