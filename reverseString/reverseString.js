const reverseString = function(str) {
    let strArr =[], 
        revArr = [];
        l = str.length;

    for (let i = 0; i<l; i++){
        strArr.push(str[i]);
    }


    for ( i =0; i<l; i++){
        revArr.push(strArr.pop());
    }

    return revArr.join('');
}

reverseString("Kachi Awaji");
module.exports = reverseString
