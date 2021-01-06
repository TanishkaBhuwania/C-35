class Form {
    constructor(){

    }
    display (){
        //create a tittle element
        var title = createElement ('h2')
        //display  the title
        title.html('Car Racing Game')
        //position the title
        title.position(130,0)
        //create the input box or the text box to enter the name 
        var input = createInput ('name')
        //create a button 
        var button = createButton('play')
        //create greetings
        var greeting = createElement ('h3')
       //position the text box and the button 
        input.position(130,160)
        button.position(250,200)
        //what should hAppen when the button is pressed with the mouse
        //hide text box and button ,take the user name and uptade in the data base
        //increase the player count and update in the data base ,display greatings
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount = playerCount + 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello"+ name)
            greeting.position(135,200)
        })

    }
}


