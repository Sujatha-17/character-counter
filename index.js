let textareaEl = document.querySelector("textarea");
let totalCharacters = document.querySelector(".total-characters");
let remainingCharacters = document.querySelector(".Remaining-characters");
textareaEl.addEventListener("keyup",()=>{
    update();
})
update();
function update(){
totalCharacters.innerText = textareaEl.value.length
remainingCharacters.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}