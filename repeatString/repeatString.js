const repeatString = function(s, r) {
    let output='';   
    if (r<0){
        return 'ERROR';
    }
    for (let repeat = r; repeat >0; repeat--){
        output+=s;
    }
    return output;
}

module.exports = repeatString
