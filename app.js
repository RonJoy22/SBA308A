import imageFactory from "./imageFactory.js";
import dogUrl from "./dogAPi.js";
import deleteDog from "./deleteDog.js"
const dogButton = document.querySelector(".getPup")
const body = document.querySelector(".result")
let dogs;   
async function getDog() {
    const response = await fetch(dogUrl);
    const dogs = await response.json();
    return dogs
  }
 

dogButton.addEventListener("click", ()=>{
    getDog().then((dogData)=>{
        dogs = dogData
     
    deleteDog(body)
    let dogImg = imageFactory(dogs.url)
    body.appendChild(dogImg) 

    })
})
