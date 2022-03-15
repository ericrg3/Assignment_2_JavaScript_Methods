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
        newArray.myPush(
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
Array.prototype.myIncludes = function(searchElement, fromIndex = 0){
    if(fromIndex < 0){
     
        fromIndex = this.length + fromIndex;
    }
};

// INDEXOF // 
//IndexOf & LastIndexOf functions are very similar
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
    let index = -1; //the first index of the element in the array is -1 if not found.

    if(fromIndex < 0){//value less than 0 is taken as a offset from the end of the array,
        //if its less than 0 the array is not searched , and returns -1
        fromIndex = this.length + fromIndex;
    }
    for(let i = fromIndex; i < this.length; i++){
        if(this[i] === searchElement){ //add new element to end this array
            index = i // stores the index to i
        }
    }
    return index;//returns a new index
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
//IndexOf & LastIndexOf functions are very similar
Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length - 1) {
    let index = -1; //the last index of the element in the array. The element can be found in the array,
    // or -1 if it is not found.

    if(fromIndex < 0){ //value less than 0 is taken as a offset from the end of the array,
        //if its less than 0 the array is not searched , and returns -1
        fromIndex = this.length + fromIndex;
    }
    for(let i = fromIndex; i >= 0; i--){
        if(this[i] === searchElement){ //add new element to end this array
            index = i // stores the index to i
        }
    }
    return index; //returns a new index
};

// KEYS //
Object.myKeys = function() {

};

// VALUES //
Object.myValues = function() {

};