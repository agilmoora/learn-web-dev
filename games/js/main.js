// let games = document.querySelectorAll("li")

// games.forEach(gm => {
//     gm.classList.add("ghost")
// })

let gamesBtn = document.querySelector(".selectGameBtn")

gamesBtn.addEventListener(
    "click",sgf
)
function sgf(){
    console.log("btn")
    document.querySelector("#gamesList").classList.toggle("ghost")
}