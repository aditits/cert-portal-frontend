const form = document.querySelector("#form")


const getdata = async (name) => {
    const res = await fetch("https://api-cert.abhyudayiitb.org/api/certificate/" + name)
    const data = await res.json()

    return data
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let name = form.name.value.toLowerCase()
    name = name.replace(" ", "")
    getdata(name).then(res => {
        console.log(res.url);
        localStorage.setItem("urls", JSON.stringify(res.url))
        window.location = "/download.html"
    })

})