// 649. Dota2 Senate

function predictPartyVictory (senate){
    let radiant = []
    let dire = []
    let n = senate.length
    for (let i=0; i<senate.length; i++){
        if(senate[i]=="R"){
            radiant.push(i)
        }
        else{
            dire.push(i)
        }
    }
    while(radiant.length>0 && dire.length>0){
        if(radiant[0]<dire[0]){
            dire.shift();
            radiant.push(dire[0]+n)
            radiant.shift();
        }
        else{
            radiant.shift();
            dire.push(radiant[0]+n)
            dire.shift();
        }
    }
    if (radiant.length == 0){
        return "Dire"
    }
    if (dire.length == 0){
        return "Radiant"
    }
}

senate1 = "RDD"
console.log(predictPartyVictory(senate1))