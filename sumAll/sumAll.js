const sumAll = function(a,b) {
    let sum=0;
    console.log(typeof(a));
    console.log(typeof(b));

    if ((a<0)||(b<0)){
        return 'ERROR';
    }

    if (typeof(a)!= "number" || typeof(b)!="number"){
        return 'ERROR';
    }

    if (a<b){
        for (let index = a; index <=b; index++){
            sum += index;
        }
    }
    else{
        for (let index = b; index <=a; index++){
            sum += index;
        }
    }
    return sum;
}


module.exports = sumAll

