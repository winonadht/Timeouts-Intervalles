let p = "Wilson-2";
let writeP = setInterval(function(){
    let phraseElement = document.getElementById('phrase');
    if(phraseElement && phraseElement.innerHTML.length < p.length) {
        console.log('testé');
        phraseElement.innerHTML += p.charAt(phraseElement.innerHTML.length);
    }else{
    clearInterval(writeP);
    console.log('Interval cleared.')
    }
    }, 1000);
