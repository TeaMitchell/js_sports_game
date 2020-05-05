const teamOneShots = document.querySelector("#teamone-shoot-button")
const teamTwoShots = document.querySelector("#teamtwo-shoot-button")
const takenShots = document.querySelector("#teamone-numshots")


teamOneShots.addEventListener("click", function(){
    console.log("teamOneShots")
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

     let newTakenShots = parseInt(takenShots.innerText) + 1;

     takenShots.innerText = newTakenShots


})

teamTwoShots.addEventListener ("click", function() {
    var teamTwoShots = random(0,3)
    var probability = teamTwoShots
})