function add_user(){
player_1 = document.getElementById("player1_name_input").value;
player_2 = document.getElementById("player2_name_input").value;
console.log("user added");
localStorage.setItem("player_1",player_1);
localStorage.setItem("player_2",player_2);
console.log("user sent to local storage");
window.location = "game_page.html";
console.log("page redirected");
}