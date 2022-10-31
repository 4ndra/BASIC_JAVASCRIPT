function score(team1, team2){
    if(team1 > 2){
        console.log("team1 win")
    } else if(team2 < 1){
        console.log("team2 win")
    } else {
        console.log("draw")
    }
}
score (3, 2);