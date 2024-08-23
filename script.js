let input=$('input');

let btn=$('button');


let warn=$('#warn');

let count=$('#count');

let answer=Math.floor(Math.random()*100)+1;

console.log(answer);

let numOfGuess=0;

btn.on('click',function(){
    guessesNumber();
})

function guessesNumber(){
    if(input.val()<1 || input.val()>100 || isNaN(input.val())){
        warn.html('Enter the number between 1 and 100');
        input.val('');
    }
    else{
        numOfGuess++;
        count.html('No. of guesses : '+numOfGuess);

        if(input.val() > answer){
            warn.html('You guessed to high');
            input.val('');
        }
        else if(input.val()<answer){
            warn.html('You guessed to low');
            input.val('');
        }

        else{
            warn.html('Congratulation you guessed the number in '+numOfGuess+' guess');
            setTimeout(() => {
               resetGame(); 
            }, 5000);
        }
    }
}

function resetGame(){
    numOfGuess=0;
    answer=Math.floor(Math.random()*100)+1;
    count.html('No. of guesses:0')
}


