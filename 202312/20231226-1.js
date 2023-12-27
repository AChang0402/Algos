// 1732. Find the Highest Altitude

function largestAltitude(gain){
    let high = 0
    let altitude = 0
    for (let i=0; i<gain.length; i++){
        altitude += gain[i]
        high = Math.max(altitude, high)
    }
    return high
}