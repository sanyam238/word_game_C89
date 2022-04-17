player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

P1_score = 0;
P2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = P1_score;
console.log("P1S ="+P1_score);
document.getElementById("player2_score").innerHTML = P2_score;
console.log("P2S = "+P2_score);
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " +player2_name;

function send(){

    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = "+word);

    CharAt1= word.charAt(1);
    console.log(CharAt1)

    word_divided = Math.floor(word.length/2);
    CharAt2 = word.charAt(word_divided);
    console.log(CharAt2);

  word_last = word.length-1 ; 
    CharAt3 = word.charAt(word_last);
    console.log(CharAt3);

    remove_CharAt1 = word.replace(CharAt1,"_");
    remove_CharAt2 = remove_CharAt1.replace(CharAt2,"_");
    remove_CharAt3 = remove_CharAt2.replace(CharAt3,"_");
console.log(remove_CharAt3);


Question_word = "<h4> Q. "+remove_CharAt3+"</h4>" ;

answer_input = "<br> Answer : <input id='input_answer' type='text' placeholder='enter answer here' class='form-control'>";


check_button = "<br> <br><button onclick='check()' id='button_check' class='btn btn-info'>"+"Check"+"</button>";

row = Question_word+answer_input+check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";

function check(){
get_answer = document.getElementById("input_answer").value;
answer = get_answer.toLowerCase();
console.log("answer in lowercase is "+answer);

if(answer == word){

if (answer_turn == "player_1"){
  P1_score=P1_score+1;
document.getElementById("player1_score").innerHTML = P1_score; 
 }

 else{
P2_score = P2_score+1;
document.getElementById("player2_score").innerHTML = P2_score;
 }

 if (answer_turn == "player_1"){

answer_turn = "player_2";
document.getElementById("player_answer").innerHTML = "Answer Turn - " +player2_name ;
 }

 else{
   answer_turn ="player_1";
   document.getElementById("player_answer").innerHTML = "Answer Turn - "+player1_name;
 }
 if(question_turn == "player_1"){

  question_turn = "player_2";
  document.getElementById("player_question").innerHTML = "Question Turn - " +player2_name ;
 }
 else{
   question_turn = "player_1";
   document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
 }
}
}