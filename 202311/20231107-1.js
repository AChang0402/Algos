// 2849. Determine if a Cell Is Reachable at a Given Time

function isReachableAtTime (sx, sy, fx, fy, t){
    let distx = Math.abs(sx - fx)
    let disty = Math.abs(sy - fy)
    if(sx==fx && sy==fy && t==1){
        return false;
    }
    if (t>=Math.max(distx, disty)){
        return true;
    }
    else{
        return false;
    }
}

console.log(isReachableAtTime(2,4,7,7,6))