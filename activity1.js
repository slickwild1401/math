function addUser() 
{
    player_1 = document.getElementById("player_name_1").value;
    player_2 = document.getElementById("player_name_2").value;
    localStorage.setItem("player_name_1", player_1);
    localStorage.setItem("player_name_2", player_2);
    window.location = "quiz_game_page.html"
}