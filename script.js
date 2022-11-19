let checkNodejs = document.getElementById("nodejs"),
    checkReactjs = document.getElementById("reactjs"),
    checkNextjs = document.getElementById("nextjs"),
    checkTypescript = document.getElementById("typescript")

let data = [];


function addProject(event) {
    event.preventDefault()

    let nameProject = document.getElementById("nameProject").value,
        // startDate = document.getElementById("startDate").value,
        // endDate = document.getElementById("endDate").value,
        desc = document.getElementById("desc").value,
        image = document.getElementById("uploadFile").files
        
        let nodejsIcon = "",
            reactjsIcon = "",
            nextjsIcon = "",
            typescriptIcon = ""
        
        if(checkNodejs.checked === true){
           nodejsIcon = "icon-svg/nodejs.svg"
        }
        if(checkReactjs.checked === true){
            reactjsIcon = "icon-svg/reactjs.svg"
        }
        if(checkNextjs.checked === true){
            nextjsIcon =  "icon-svg/nextjs.svg"
        }
        if(checkTypescript.checked === true){
           typescriptIcon =  "icon-svg/typescript.svg"
        }

    let gambar = URL.createObjectURL(image[0])
    let result = {
        nameProject,
        desc,
        nodejsIcon,
        reactjsIcon,
        nextjsIcon,
        typescriptIcon,
        gambar
    }

    data.push(result)
    console.log(data)
    renderProject()
    one()
}

function renderProject() {
    
    document.getElementById("project").innerHTML = ``
    for (let i = 0; i < data.length; i++){
        document.getElementById("project").innerHTML += `
        <div class="card">
        <img src="${data[i].gambar}" width="100%" height="200px" style="object-fit: cover">
        <div class="article">
            <h1>${data[i].nameProject}</h1>
            <span>1 bulan</span>
            <p>${data[i].desc}</p>
        </div>
        <div class="icon">
        <img src="${data[i].nodejsIcon}">
        <img src="${data[i].reactjsIcon}">
        <img src="${data[i].typescriptIcon}">
        <img src="${data[i].nextjsIcon}" width="60px">
        </div>
        <div class="btn-card">
            <a href="">Edit</a>
            <a href="">Delete</a>
        </div>
    </div>`
    }
}
function one(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) {
            item.checked = false
        }
    })
}