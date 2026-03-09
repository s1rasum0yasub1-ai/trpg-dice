function rollDice(){

let cmd=document.getElementById("command").value

let match=cmd.match(/(\d+)d(\d+)/)

if(!match){

alert("例: 1d100")

return

}

let count=parseInt(match[1])
let sides=parseInt(match[2])

let rolls=[]
let total=0

for(let i=0;i<count;i++){

let r=Math.floor(Math.random()*sides)+1

rolls.push(r)

total+=r

}

let result=rolls.join(",")+" → "+total

let className=""

if(sides==100 && rolls[0]<=5){

className="crit"
playCrit()

}

if(sides==100 && rolls[0]>=96){

className="fumble"
playFumble()

}

document.getElementById("result").innerHTML=

"<span class='"+className+"'>"+result+"</span>"

addHistory(cmd,result)

}

function addHistory(cmd,result){

let name=document.getElementById("charName").value || "PL"

let line=name+" : "+cmd+" → "+result+"<br>"

document.getElementById("history").innerHTML=

line+document.getElementById("history").innerHTML

}

function clearHistory(){

document.getElementById("history").innerHTML=""

}

function playCrit(){

let audio=new Audio("sounds/crit.mp3")

audio.play()

}

function playFumble(){

let audio=new Audio("sounds/fumble.mp3")

audio.play()

}
