 export default function deleteDog(container){
    if (container.children.length){
        container.removeChild(container.children[0])
    }
}