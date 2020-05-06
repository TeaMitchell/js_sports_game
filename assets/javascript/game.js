const teamOneShots = document.querySelector("#teamone-shoot-button")
const teamTwoShots = document.querySelector("#teamtwo-shoot-button")
const takenShots = document.querySelector("#teamone-numshots")
const takenShots2 = document.querySelector("#teamtwo-numshots")


teamOneShots.addEventListener("click", function(){
    console.log("Shoot1")
    let rand = (Math.random() > 0.5)
    console.log(rand)

     let newTakenShots = parseInt(takenShots.innerText) + 1;

     takenShots.innerText = newTakenShots

     if(rand){
         

     }

})

teamTwoShots.addEventListener ("click", function() {
    console.log("Shoot2")
    function getRandomArbitrary(min, max){
        return Math.random() * (max - min) +min;

    }

     let newTakenShots2 = parseInt(takenShots2.innerText) + 1;

     takenShots2.innerText = newTakenShots2
})