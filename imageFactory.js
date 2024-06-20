function imageFactory (imgUrl) {
    const dogImg = document.createElement("img")
    dogImg.src = imgUrl
    return dogImg
}
export default imageFactory