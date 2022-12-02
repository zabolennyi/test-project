
import fetch from "node-fetch"

//accept only 3 status states: avaliable, pending, sold
export async function findPetsByStatus(status) {
  const response = await fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=` + status)
  const pets = await response.json()
  return pets
}

export async function petsSold() {
  let result = []
  findPetsByStatus('sold').then((pets) => {
    Object.entries(pets).forEach(prop => result.push({
      "id": prop[1].id,
      "name": prop[1].name
    }))
  })  
  return result
}

// 3. Crea una clase cuyo constructor requiera de la estructura de datos anterior y realiza un método que pueda recorrerla para poder identificar cuantas mascotas se llaman igual.
export async function allPetsSold() {
  const allPetsSold = {}
  const response = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
  .then(response => response.json())
  .then(data => {
    let key = {};
    for(i = 0; i< data.length; i++){
      let pet = data[i]['name']; 
      if (allPetsSold[pet] == void(0)) { 
        allPetsSold[pet] = [] 
      }
      allPetsSold[pet].push(data[i])
    }
  })
 
  for (var name in allPetsSold) {
    console.log(name + ": " + name.length + " ");
 }
}
 
class Pet {
  constructor(pets) {
    this.id = pets.id;
    this.name = pets.name;
  }
  sameName() {
  }
}
