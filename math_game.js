player_1_name=localStorage.getItem("player_name_1");
player_2_name=localStorage.getItem("player_name_2");

player_1_score=0;
player_2_score=0;

question_turn=player_2_name;
answer_turn=player_1_name;

document.getElementById("player_1_name").innerHTML=player_1_name + ":";
document.getElementById("player_2_name").innerHTML=player_2_name + ":";

document.getElementById("question").innerHTML="Question Turn - " + player_1_name;
document.getElementById("answer").innerHTML="Answer Turn - " + player_2_name;

document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;


function send(){
    number1=document.getElementById("number_1").value;
    number2= document.getElementById("number_2").value;
    actual_answer=parseInt(number1)* parseInt(number2);
 

    question_number="<h4>" +number1 + " X " + number2 +"</h4>";
    input_box="<br> Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-success' onclick='check()'> Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value=""
    document.getElementById("number2").value=""
}
function check(){
    answer=document.getElementById("input_check_box").value;
   console.log(actual_answer)

   if(answer==actual_answer){
      player_1_score=player_1_score+1;
      document.getElementById("player_1_score").innerHTML=player_1_score
   }
   else{
    player_2_score=player_2_score+1;
    document.getElementById("player_2_score").innerHTML=player_2_score
   }
    if(question_turn==player_1_name){
        question_turn="player_2_name"
        document.getElementById("question").innerHTML="Question Turn " + player_2_name;
  }
  else{
      question_turn="player_1_name"
        document.getElementById("question").innerHTML="Question Turn " + player_1_name;
  }
  if(answer_turn==player_1_name){
      answer_turn="player_2_name"
      document.getElementById("answer").innerHTML="Answer turn " + player_2_name;
}
else{
    question_turn="player_1_name"
      document.getElementById("answer").innerHTML="Answer Turn " + player_1_name;
}
document.getElementById("output").innerHTML=""
}
