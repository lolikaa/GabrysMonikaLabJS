var questions = [
                    ['Ile nóg ma krowa?', 4],
                    ['Ile to jest 3 razy 18', 54],
                    ['W którym roku była bitwa pod Grunwaldem?', 1410],
                    ['Ile wynosi 3! (trzy silnia)?', 6]
                ];

var i=0;
var score=0;
console.log(questions.length);


window.onload = function(){
    document.getElementById("gra").onclick = 
        function Grajmy() {
        
        // wyświetlenie promptu z pytaniem i przypisanie odpowiedzi do zmiennej answer    
        
        var answer=prompt(questions[i][0]);
            
        console.log(questions[i]);
        console.log(answer);
        if (answer == questions[i][1]){
                        alert('Prawidłowa odpowiedź');
                        score++;
                        
                    } else {
                        alert('Błąd. Prawidłowa odpowiedź to: ' + questions[i][1]);
                    }
        
        i++;
        if(i==questions.length){
            i=0;
            alert(`Twój wynik to ${score}/${questions.length}`);
        } else {
            Grajmy();
        }
        }
}