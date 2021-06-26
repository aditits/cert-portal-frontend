const contianer = document.querySelector(".certificate-container")

const urls = JSON.parse(localStorage.getItem("urls"))

console.log(urls);

urls.forEach(url => {
    contianer.innerHTML += `
        <embed src="${url}" type="application/pdf" width="100%" height="400px" />
    `
})