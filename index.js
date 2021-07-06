let count_el= document.getElementById("count_el")
let save_el = document.getElementById("save_el")
let count = 0

function increment() {
    count++
    count_el.innerText=count
}

let prevEntry=0;

function save() {       
        let countStr= count + " - "
        //save_el.innerText+=countStr

        save_el.textContent+=countStr    //using textContent to read spaces, which .innertext cannot

        count_el.textContent=0
        count=0
}