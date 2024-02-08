// 735. Asteroid Collision

function asteroidCollision(asteroids){
    let answer = [asteroids[0]]
    for (let i=1; i<asteroids.length; i++){
        if(!(asteroids[i]<0 && answer[answer.length-1]>0)){
            answer.push(asteroids[i])
        }
        else{
            let push = false;
            while(answer.length>0 && asteroids[i]<0 && answer[answer.length-1]>0){
                if(asteroids[i]*-1==answer[answer.length-1]){
                    answer.pop()
                    push = false
                    break;
                }
                else if(asteroids[i]*-1<answer[answer.length-1]){
                    push = false
                    break;
                }
                else{
                    answer.pop()
                    push = true;
                }
            }
            if (push == true){
                answer.push(asteroids[i])
            }
        }
    }
    return answer
}


function asteroidCollision(asteroids){
    let answer = [asteroids[0]]
    for (let i=1; i<asteroids.length; i++){
        if(asteroids[i]<0 && answer[answer.length-1]>0){
            let push = false;
            while(answer.length>0 && asteroids[i]<0 && answer[answer.length-1]>0){
                if(asteroids[i]*-1==answer[answer.length-1]){
                    answer.pop()
                    push = false
                    break;
                }
                else if(asteroids[i]*-1<answer[answer.length-1]){
                    push = false
                    break;
                }
                else{
                    answer.pop()
                    push = true;
                }
            }
            if (push == true){
                answer.push(asteroids[i])
            }
        }
        else{
            answer.push(asteroids[i])
        }
    }
    return answer
}

asteroids1 = [5,10,-5]
console.log(asteroidCollision(asteroids1))