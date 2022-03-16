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
Array.prototype.myMap = function (callbackFn) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.myPush(callbackFn(_this, this[i], i, this))
    }
    return newArray

};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    let some = false; 
    for(let i = 0; i < array.length; i++){
        if (this[i] === undefined) continue;
        if (callbackFn(this[i], i, this)){ //callbackFn returns a true value for at least 1 element in the array, otherwise false. 
            return true;
        }
    }
    return some;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, value){
    if(!this.length && initalValue === undefined){
    }
        let value = initalValue;
        let index = 0;

        if(initalValue === undefined){
            initalValue = this[0];
            index = 1;
        }
    
    for(let i = index; i < this.length; i++){
        initalValue = callbackFn(initalValue, this[i], i, this)
        }
        return initalValue;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex){
    
    if(fromIndex < 0){// the number of elements from the end of the array at which to start the search
        fromIndex = this.length + fromIndex;
    }
    for(let i = fromIndex; i < this.length; i++){
        if(this[i] === searchElement){// checks value in index
            index = i;
        }
    }
    return false;//returns false if notthing in the aray
};

// INDEXOF // 
//IndexOf & LastIndexOf functions are very similar
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    let index = -1; //the first index of the element in the array is -1 if not found.

    if(fromIndex < 0){//value less than 0 is taken as a offset from the end of the array,
        //if its less than 0 the array is not searched , and returns -1
        fromIndex = this.length + fromIndex;
    }
    for(let i = fromIndex; i < this.length; i++){
        if(this[i] === searchElement){ //checks value in index
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
        if(this[i] === searchElement){ //checks value in index
            index = i // stores the index to i
        }
    }
    return index; //returns a new index
};

// KEYS //
Object.myKeys = function(object) {
    const keys_ = []; //Empty array
        for(const keys in object){ //for each keys_ in object
            keys_.push(keys)// push keys_ to the list
        }
        return keys_;
};

// VALUES //
Object.myValues = function(object) {
    const valueArr = [];//Empty array
        for(const value in object){// for each value in object
            valueArr.push(object[value])// push value to the list
        }
        return valueArr
};