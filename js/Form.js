class Form{
    constructor(){}
    display(){
        var title=createElement("h1","Car Racing Game")
        title.position(150,10);
        var input=createInput("Enter your name");
        input.position(180,170)
        var button = createButton("Register");
        button.position(200,250)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount++
            player.updateCount(playerCount)
            player.update(name)
            var greeting= createElement("h2","welcome " +name)
            greeting.position( 150, 150)
        })
    }
}