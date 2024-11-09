function validador(){
    const name = document.querySelector("#fname")
    const lastName = document.querySelector("#1name")
    const email1 = document.querySelector("#email1")

    const messageError = document.querySelector(".message-error")

    const nameValue = name.value
    const lastNameValue = lastName.value
    const email1Value = email1.value

    if(nameValue === ""){
        name.classList.add("error")
        messageError.textContent = "This field is required"
    }
}