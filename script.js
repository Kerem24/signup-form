console.log("HELLO WORLD!")
const password = document.querySelector('#password')
const confirm = document.querySelector('#confirm_password')
const submit = document.querySelector('.submitBtn')

submit.addEventListener('click', e => {
    const matched = validatePassword(password.value, confirm.value)

    if (matched) {
        alert("Access is granted")
    } else {
        alert("Access is denied. Passwords are not the same!")
    }
})


function validatePassword(a, b) {
    if (a === b) {
        return true
    } else {
       return false
    }

}