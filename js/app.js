const inputURL = document.querySelector("#input-url")
const QR = document.querySelector("#qr-code-img")
const qrBox = document.querySelector("#qr-box")
const download = document.querySelector("#download")
const link = document.querySelector("#link")



inputURL.addEventListener("submit" , (e) => {
    e.preventDefault()
    const value =e.target["input"].value.trim()
    if (value.length > 0 ){
        QR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`
        qrBox.style.display = 'flex'
    }
    else{
    e.target["input"].style.borderColor = "red"
    e.target["input"].addEventListener("keydown" , (changeed) => {
        e.target["input"].style.borderColor = "green"
        qrBox.style.display = 'none'
    })
    }
    e.target["input"].addEventListener("keydown" , (changeed) => {
        qrBox.style.display = 'none'
    })
    
})



