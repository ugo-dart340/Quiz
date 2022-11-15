let x = 0;
$("#choice1").on("click", function(){
  x+=1;
  console.log(x);
})
$("#choice2").on("click", function(){
  x+=2;
  console.log(x);
})
$("#choice3").on("click", function(){
  x+=3;
  console.log(x);
})
$("#choice4").on("click", function(){
  x+=4;
  console.log(x);
})
let question2 = function() {
    $("#Question").text('What is your biggest weakness? +2');
    $("#choice1").text('Fire');
    $("#choice2").text('Cold');
    $("#choice3").text('Spiders');
    $("#choice4").text('Heights');
    $("button").on("click", question3);
}


let question3 = function() {
    $("#Question").text('What sport would you play? +3');
    $("#choice1").text('Basketball');
    $("#choice2").text('Soccer');
    $("#choice3").text('Football');
    $("#choice4").text('Baseball');
    $("button").on("click", question4);
}

let question4 = function() {
    $("#Question").text('Favorite music genre? +4');
    $("#choice1").text('Hip-Hop/Rap');
    $("#choice2").text('Country');
    $("#choice3").text('Pop');
    $("#choice4").text('Jazz');
    $("button").on("click", question5);
}

let question5 = function() {
    $("#Question").text('What is your favorite season? +5');
    $("#choice1").text('Summer');
    $("#choice2").text('Winter');
    $("#choice3").text('Fall');
    $("#choice4").text('Spring');
    $("button").on("click", question6);
}

let question6 = function() {
    $("#Question").text('Where would you like to travel? +6');
    $("#choice1").text('Paris');
    $("#choice2").text('London');
    $("#choice3").text('Hawaii');
    $("#choice4").text('Milan');
    $("button").on("click", question7);
}

let question7 = function() {
    $("#Question").text('What food would you choose? +7');
    $("#choice1").text('Burgers');
    $("#choice2").text('Sushi');
    $("#choice3").text('Pizza');
    $("#choice4").text('Chicken Wings');
    $("button").on("click", question8);
}

let question8 = function() {
    $("#Question").text('Favorite streaming platform? +8');
    $("#choice1").text('Netflix');
    $("#choice2").text('Hulu');
    $("#choice3").text('HBO Max');
    $("#choice4").text('Disney+');
    $("button").on("click", question9);
}

let question9 = function() { 
    $("#Question").text('Best Social Media Platform? +9');
    $("#choice1").text('Instagram');
    $("#choice2").text('Twitter');
    $("#choice3").text('Facebook');
    $("#choice4").text('Tik-Tok');
    $("button").on("click", question10);
}

let question10 = function() {
    $("#Question").text('Your friends and family would best describe you as? +10');
    $("#choice1").text('Joyful');
    $("#choice2").text('Angry');
    $("#choice3").text('Energetic');
    $("#choice4").text('Quiet');
    $("button").on("click", question11);
}

let question11 = function() {
    if(x<15){
    //$("#Question").text('Your Marvel Superhero is...');
    $("h1").text("Spiderman");
    $("button").hide();
 

}
else if (x<25){
    $("h1").text("Iron Man");
    $("button").hide();
}
    else if (x<35){
    $("h1").text("Thor");
    $("button").hide();
}
    else{
    $("h1").text("Black Panther");
    $("button").hide();
}
}
    
$("button").on("click", question2);
