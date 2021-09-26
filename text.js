let myForm = document.getElementById("myForm")
let field = document.getElementById("field")
let myList =document.getElementById("myList")
myForm.addEventListener("submit",(x)=>{
  x.preventDefault()
  createItem(field.value)
})

function createItem(e){
let ourHTML =`<li>${e}<button onclick= "deleteItem(this)">Delete</button></li>`
  myList.insertAdjacentHTML("beforeend",ourHTML)
  field.value= ""
  field.focus()
  }
function deleteItem(elementToDelete){
  elementToDelete.parentElement.remove()
}
