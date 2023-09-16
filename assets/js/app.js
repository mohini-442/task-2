let addbtn = document.querySelector("#addbtn")
let counting = document.querySelector("#title")
let decreasebtn = document.querySelector("#decreasebtn")

addbtn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML + 1

})
decreasebtn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML - 1
})
