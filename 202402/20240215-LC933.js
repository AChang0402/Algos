// 933. Number of Recent Calls

var pings = []
var RecentCounter = function() {
    pings = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    pings.push(t)
    while(pings[0]<(t-3000)){
        pings.shift();
    }
    return pings.length
};