
// making a global variable for Chance count and Random Number
var counter = 0;
var randomNum = Math.round(Math.random()*9 + 1);


// making 3 arrays for the question. 
var tasks = ["pages", "call", "button", "chips", "hours", "cake", "pen", "game", "times", "times", "bug" ];
var verb = ["read", "made", "pressed", "ate", "slept", "baked", "bought", "won", "laughed", "cried", "fixed" ];
var person = ["John", "Jack", "Adam", "I", "Olivia", "David", "Amelia", "Timmy", "Charlotte", "Henry", "Mia"];






// setting an event listenner to the check button.
document.querySelector("#check").addEventListener("click", function(){
    

    
    // taking the input as string from the input field.
    let string = document.querySelector("#takingInput").value;
    if(string.length<=0){
        document.querySelector("#showResult").innerHTML = "<h1>Please enter a number.</h1>";
        return;
    }
    
    
    // increasing the counter value for a click.
    window.counter += 1;



    // if counter is less then or equal to 3. then do the following.
    if(window.counter<=3){

        // if the guess is correct then show the result and return the program so that the dom will not change again.
        // and disable the input field. And ask the user if he wants to play more.
        if(Number(string) == window.randomNum){
            document.querySelector("#showResult").innerHTML = "<h1>Your guess is correct!</h1> <button class='retry btn' onclick='retry()'>Retry</button> ";
            document.querySelector("#check").disabled = true;
            document.querySelector("#check").classList.remove("btn");
            document.querySelector("#takingInput").disabled = true;
            return;
        }
        
        // if the guess is smaller show that the correct number is greater.
        if(Number(string)<window.randomNum){
            document.querySelector("#showResult").innerHTML = "<h3> Correct answer is greater! </h3>";
        }
        

        // if the guess is bigger show that the correct number is samller.
        if(Number(string)>window.randomNum){
            document.querySelector("#showResult").innerHTML = "<h3> Correct answer is smaller! </h3>";
        }

        // if the counter is 3 and still the guess is not correct then show that the guesses are all wrong.
        // and disable the input field and check button.
        if(window.counter==3){
            document.querySelector("#showResult").innerHTML = `<h2>Your guesses are wrong!<br>The answer was <q> ${window.randomNum} </q> </h2> <button class='retry btn' onclick='retry()'>Retry</button>`;
            
            document.querySelector("#check").disabled = true;
            document.querySelector("#check").style.cursor = "no-drop";
            document.querySelector("#check").classList.remove("btn");
            document.querySelector("#takingInput").disabled = true;
        }


        // change the dom that shows the chances, if a check occurs.
        document.querySelector("#chances").innerHTML = `${3-window.counter} chances left`;

        
    }


    

})






// retry function.
function retry(){
    // set chance counter to zero and set the random value to a new random value.
    window.counter = 0;
    window.randomNum = Math.round(Math.random()*9 + 1);
    
    // set the dom that shows the chances to 3.
    document.querySelector("#chances").innerHTML = 3 + " chances";
    
    // enable the check button and the input field.
    document.querySelector("#check").disabled = false;
    document.querySelector("#check").style.cursor = "pointer";
    document.querySelector("#check").classList.add("btn");
    document.querySelector("#takingInput").disabled = false;

    document.querySelector("#showResult").innerHTML = "<h1>Try to guess</h1>";


    // change the question.
    let donChange = Math.round(Math.random()*10);
    document.querySelector("#name").innerHTML = window.tasks[donChange];
    document.querySelector("#verb").innerText = window.verb[donChange];

    donChange = Math.round(Math.random()*10);
    document.querySelector("#person").innerText = window.person[donChange];

}


