const sumAll = function(num1, num2) {
    sum = 0;
    largeNum = 0;
    smallNum = 0;

    if (num1 < 0 || num2 < 0 || Number.isInteger(num1) === false || Number.isInteger(num2) === false){
        return 'ERROR';
    } else {
        if (num1 > num2){
            largeNum = num1;
            smallNum = num2;
        } else {
            largeNum = num2;
            smallNum = num1;
        }
        for (let i = smallNum; i <= largeNum; i++){
            sum += i;
        } 
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
