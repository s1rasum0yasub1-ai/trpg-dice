function rollDice(){

let input=document.getElementById("command").value

let match=input.match(/(\d+)d(\d+)/)

if(!match){
showResult("コマンドエラー","error",input)
return
}

let count=parseInt(match[1])
let sides=parseInt(match[2])

let total=0
let rolls=[]

for(let i=0;i<count;i++){

let r=Math.floor(Math.random()*sides)+1
rolls.push(r)
total+=r

}

let text=rolls.join(",")+" → "+total

let color="normal"

if(sides==100 && rolls[0]>=96){

color="fumble"
playFumble()

}

if(sides==100 && rolls[0]<=5){

color="crit"
playCrit()

}

showResult(text,color,input)

}

function playCrit(){

let audio=new Audio("sounds/crit.mp3")
audio.play()

}

function playFumble(){

let audio=new Audio("sounds/fumble.mp3")
audio.play()

}

function showResult(text,color,cmd){

let name=document.getElementById("charName").value||"PL"

let html="<div class='diceResult "+color+"'>"+text+"</div>"

document.getElementById("result").innerHTML=html

let log="<div class='historyLine'><span class='char'>"+name+"</span> : "+cmd+" → <span class='"+color+"'>"+text+"</span></div>"

document.getElementById("history").innerHTML=log+document.getElementById("history").innerHTML

}

function clearHistory(){

document.getElementById("history").innerHTML=""

}
