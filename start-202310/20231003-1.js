// 706. Design HashMap

var MyHashMap = function() {
    this.data = new Array(1000001)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.data[key] = value
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.data[key] !== undefined ? this.data[key] : -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.data[key]
};