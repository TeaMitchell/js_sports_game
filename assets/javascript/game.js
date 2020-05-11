const teamOneShots = document.querySelector("#teamone-shoot-button")
const teamTwoShots = document.querySelector("#teamtwo-shoot-button")
const takenShots = document.querySelector("#teamone-numshots")
const takenShots2 = document.querySelector("#teamtwo-numshots")
const reset = document.querySelector("#reset-button")
const goalOne = document.querySelector("#teamone-numgoals")
const goalTwo = document.querySelector("#teamtwo-numgoals")
const numReset = document.querySelector("#num-resets")
const nameOne = document.querySelector(".left h2")
const nameTwo = document.querySelector(".right h2")

teamOneShots.addEventListener("click", function(){
    console.log("Shoot1")
     let rand = Math.random()
    console.log(rand)

     let newTakenShots = parseInt(takenShots.innerText) + 1;

     takenShots.innerText = newTakenShots

     if(rand > 0.5){ 
         let goals = parseInt(goalOne.innerText) + 1

         goalOne.innerText = goals
        
         console.log("team1 made")

     }else{
         console.log("team1 miss")
     }

})

teamTwoShots.addEventListener ("click", function() {
    console.log("Shoot2")
    let rand2 = Math.random()


     let newTakenShots2 = parseInt(takenShots2.innerText) + 1;

     takenShots2.innerText = newTakenShots2

     if(rand2 > 0.5){ 
        let goals = parseInt(goalTwo.innerText) + 1

        goalTwo.innerText = goals
       
        console.log("team2 made")

    }else{
        console.log("team2 miss")
    }
     
})

reset.addEventListener("click", function(){
    console.log("reset")
    
    if(parseInt(goalOne.innerText) > parseInt(goalTwo.innerText)){
        nameOne.style.color = "yellow"
        console.log("team one wins!")

    }else if(parseInt(goalOne.innerText) < parseInt(goalTwo.innerText)){ 
        nameTwo.style.color = "red"
        console.log('team two wins!')

    }
    
    takenShots.innerText = 0

    takenShots2.innerText = 0

    goalOne.innerText = 0

    goalTwo.innerText = 0

    let resetCount = parseInt(numReset.innerText) + 1

    numReset.innerText = resetCount

    

})