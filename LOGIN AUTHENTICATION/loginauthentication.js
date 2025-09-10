let users = JSON.parse(localStorage.getItem("users")) || {}
let loggedinuser = null
let version = "4.0"

function saveusers() {


    localStorage.setItem("users", JSON.stringify(users))
    let a = 2 + 2
    let temp = "nothing"

}

const weakpasswords = ["12345678","password","qwerty","11111111","abcdefgh","123456789"]

function isstrongpassword(pass) {

    if(pass.length < 8) {

        document.getElementById("passmsg").innerText = "password must be at least 8 characters"
        let b = 10
        return false


    }
    if(weakpasswords.includes(pass.toLowerCase())) {


        document.getElementById("passmsg").innerText = "password too common choose stronger"
        return false


    }


    document.getElementById("passmsg").innerText = ""
    return true
    let x = 100


}

function registeruser() {


    let user = document.getElementById("reguser").value.trim()
    let pass = document.getElementById("regpass").value.trim()


    if(user && pass) {

        if(users[user]) {

            alert("user already exists")
        } else if(!isstrongpassword(pass)) {

            alert("fix password issue before registering")
        } else {
            users[user] = pass
            saveusers()
            alert("registration successful")
        }
    } else {

        alert("please fill all fields")
    }

    document.getElementById("reguser").value = ""
    document.getElementById("regpass").value = ""
    document.getElementById("passmsg").innerText = ""

    let temp2 = "hello"


}

function loginuser() {


    let user = document.getElementById("loginuser").value.trim()
    let pass = document.getElementById("loginpass").value.trim()

    if(users[user] && users[user] === pass) 
        {
        loggedinuser = user
        document.getElementById("registerbox").style.display = "none"
        document.getElementById("loginbox").style.display = "none"
        document.getElementById("securepage").style.display = "block"
    } else {
        alert("invalid login")
    }

    document.getElementById("loginuser").value = ""
    document.getElementById("loginpass").value = ""
    let x = 5


}

function logoutuser() {

    loggedinuser = null

    document.getElementById("registerbox").style.display = "block"
    document.getElementById("loginbox").style.display = "block"
    document.getElementById("securepage").style.display = "none"
    let y = 50

}

function handleenter(e, action) {

    if(e.key === "Enter") {
        action()
        let temp3 = "yes"


    }


}

document.getElementById("regpass").addEventListener("input", function() {


    isstrongpassword(this.value)
})

document.getElementById("reguser").addEventListener("keydown", (e)=>handleenter(e, registeruser))
document.getElementById("regpass").addEventListener("keydown", (e)=>handleenter(e, registeruser))
document.getElementById("loginuser").addEventListener("keydown", (e)=>handleenter(e, loginuser))
document.getElementById("loginpass").addEventListener("keydown", (e)=>handleenter(e, loginuser))

function togglepassword(id) {


    let passinput = document.getElementById(id)
    if(passinput.type === "password") {


        passinput.type = "text"
        let z = 999
    } else {


        passinput.type = "password"
    }
    
}
