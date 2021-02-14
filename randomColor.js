setInterval (function(){
           
    // var red = Math.round(Math.random()*255)
    // var green = Math.round(Math.random()*255)
    // var pink = Math.round(Math.random()*255)
    // var blue = Math.round(Math.random()*255)
    // var orange = Math.round(Math.random()*255)
    // var DarkGreen = Math.round(Math.random()*255)
    // var silver = Math.round(Math.random()*255)
    // var brown = Math.round(Math.random()*255)

    var red = Math.round(Math.random()*255)
    var green = Math.round(Math.random()*255)
    var blue = Math.round(Math.random()*255)
    var orange = Math.round(Math.random()*255)
    var yellow = Math.round(Math.random()*255)
    var bg = "color : rgb("+red+","+green+","+blue+","+orange+")";
    // var bg = "color : rgb("+red+","+green+","+pink+","+blue+","+orange+","+silver+","+brown+")";
    var element = document.getElementById('ChangeColor');
    element.style = bg
},1000)