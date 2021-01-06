class Player {
    constructor(){
    
        
    }
 //read the PLAYER COUNT value from the data base
    getCount(){
        var playerCountRef = database.ref ('playerCount')
        playerCountRef.on("value", function(data){
        playerCount = data.val()
        })
        
    }
    //update the player count in the database
    updateCount(count){
database.ref('/').update({
    playerCount: count
})
    }
     //update the player name in the database
  update(name){
var playerIndex = "player"+playerCount
database.ref(playerIndex).set({
    name:name
})
  }  

    
}

