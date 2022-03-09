const mainDiv = document.getElementById("main")

fetch("https://restcountries.com/v3.1/all")
.then(r => r.json())
.then(data =>{
    data.forEach(country =>{
        const flagImg = document.createElement("img")
        flagImg.src = country.flags.png
        // mainDiv.append(flagImg)
    })
})