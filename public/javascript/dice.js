var diceNum2=Math.floor(Math.random()*6+1);

document.querySelector(".dice-img2").setAttribute("src","../images/dice"+diceNum2+".png");

var diceNum1=Math.floor(Math.random()*6+1);

document.querySelector(".dice-img1").setAttribute("src","../images/dice"+diceNum1+".png");

if(diceNum1<diceNum2){
    
    document.querySelector("h1").innerHTML="Player Two wins<img class='flag-img' src= '../images/flag.png'>"
}

else if(diceNum2<diceNum1){
    
    document.querySelector("h1").innerHTML="Player one wins<img class='flag-img' src= '../images/flag.png'>"
}

else{
    
    document.querySelector("h1").innerHTML="It's a Draw!"
}

document.querySelector("button").addEventListener("click",function(){window.location.reload()})