import imageFactory from "./imageFactory.js";
import dogUrl from "./dogAPi.js";
const body = document.querySelector(".result")
async function getDog() {
    const response = await fetch(dogUrl);
    const dogs = await response.json();
    return dogs
  }
  getDog().then((dogData)=>{
    let dogImg = imageFactory(dogData.url)
    body.appendChild(dogImg)
  })
