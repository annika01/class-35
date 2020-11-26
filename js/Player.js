class Player{
    constructor(){}
    getCount(){
        db.ref("playerCount").on("value", function(data){
            playerCount=data.val()
        })
    }
    
    updateCount(count){
        db.ref("/").update({
           playerCount: count
        })
    }
    update(name){
        var playerIndex = "player"+playerCount
        db.ref(playerIndex).set({ 
           name:name
        })
    }
}