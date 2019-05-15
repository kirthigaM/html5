var canvasRef= document.getElementById("mycanvas")

var ctx=canvasRef.getContext("2d")


//draw the line
ctx.moveTo(0,0)
ctx.lineTo(300, 300)
ctx.stroke() 


ctx.font = "44px serif"
ctx.strokeText("hello", 50, 50)



ctx.fillStyle = "rgba(0, 200, 0, 0.5)"
ctx.fillRect(50,50,100,100) 
ctx.fillRect(10,10,10,10)

ctx.fillStyle= "rgba(0, 100,  0, 0.5)"
ctx.fillRect(50,60,70,80)

ctx.beginPath()
ctx.arc(175, 50, 50, 100, Math.PI*2, true)
ctx.stroke()

ctx.lineWidth = "4"
ctx.strokeStyle = "green"
ctx.strokeRect(10,200,50,75)


var animateText= function(){
    ctx.restore();
    ctx.font = "44px serif"
    ctx.strokeText("hello Canvas", x, y)
    y++
    window.requestAnimationFrame(animateText)
}


