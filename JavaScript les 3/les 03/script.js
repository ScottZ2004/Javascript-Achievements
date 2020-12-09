"use strict"   
let myText = document.getElementById('myText');
let myImage = document.getElementById('myImage');
let myButton = document.getElementById('myButton');
let myReset = document.getElementById('myReset');

myButton.addEventListener('click', function(){
    main();
})

myReset.addEventListener('click', function(){
    stop();
    
})
function stop(){
    window.location.reload();
}


function main(){
     let dezeTextWordtHet = makeThisSentence();
     myText.innerHTML = dezeTextWordtHet;
     sayItLoud(dezeTextWordtHet); // say something nice say it loud
     selectThisImage(); // show a nice image
}



function randomizer1(range = 1){ 
    // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
    return Math.floor((Math.random() * range));
}
function randomizer2(range = 1){ 
    // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
    return Math.floor((Math.random() * range));
}
function randomizer3(range = 1){ 
    // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
    return Math.floor((Math.random() * range));
}


function makeThisSentence(){
    let index1 = randomizer1(arrayLength);
    let index2 = randomizer2(arrayLength);
    let index3 = randomizer3(arrayLength);
    let woord1 = onderwerp[index1];
    let woord2 = werkwoord[index2];
    let woord3 = restwoord[index3];
    let outputString = woord1 + " " + woord2 + " " + woord3;
    return outputString;
}

function selectThisImage(){
    let index = randomizer1(arrayLength);
    myImage.src = plaatjes[index]; 
}

function sayItLoud (textString) {
  let message = new SpeechSynthesisUtterance(textString);
  let voices = window.speechSynthesis.getVoices();
  message.voice = voices[1];
  message.pitch = 1; // range between 0 and 2
  message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
  window.speechSynthesis.speak(message);
}



const onderwerp = ["The man", "The Girl", "The king"];
const werkwoord = ["rules", "doesn't like", "requirs"];
const restwoord = ["home", "the school", "coffee"];
    
let plaatjes = ["https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://pbs.twimg.com/profile_images/821849411991044096/lQFa_Vly_400x400.jpg", "https://img-9gag-fun.9cache.com/photo/aKDR333_460s.jpg", "https://static.mommypoppins.com/styles/image300x250/s3/school_meme_3_0.jpg"]
let arrayLength = onderwerp.length;