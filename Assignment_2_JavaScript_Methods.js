// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

// MAP //
Array.prototype.myMap = function (callbackFn, _this) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(
            callbackFn(_this, this[i], i, this)
        )
    }
    return newArray
};

// SOME //
Array.prototype.mySome = function(array, callbackFn) {
    for(let i = 0; i < array.length; i++){ //arraty is being called
        if (callbackFn(array[i], i, array)){ //callbackFn returns a true value for at least 1 element in the array, otherwise false. 
            return true;
        }
    }
    return false;
};

// REDUCE //
const numbers = [1,2,3,4,5];
const total = numbers.reduce(callbackFn, Value); //0 is the intial value

Array.prototype.myReduce = function callbackFn(accumulator, Value) {
    if(accumulator > Value){
        return accumulator;
    } else{
        return Value;
    }
};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {
    Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
        let args_index = 0;  // Index of new element
        let length = this.length;   // Length of "this" array
        // The last element of "this" array is at length - 1
        for (let i = length; i < length + args.length; i++) {
            this[i] = args[args_index];  // Add new element to end of "this" array
            args_index++;
        }
        return this.length;  // Return new length of "this" array
    }
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.myKeys = function() {

};

// VALUES //
Object.myValues = function() {

};