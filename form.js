class Form {

    constructor(){
    


    }

display(){

var button
var Input

button=createButton("Play")
Input=createInput("" )
Input.position(displayWidth/2-70,displayHeight/2-300)
button.position(displayWidth/2,displayHeight/2-250)
var name=Input.value()
console.log(Input.value())
console.log(name)
button.mousePressed(()=>{count=1
    var name=Input.value()
    
       var display=createElement('h3')
       
        display.html("Welcome "+name)
        display.position(200,20)
        console.log(display)
Input.hide()  
button.hide()

})


















}





}