const repeatString = function(string, num) {
    if (num < 0){
        return 'ERROR'
    } else if (num === 0){
        return ''
    } else {
        let repeatedResult = ""
        
        for (let i = 0; i < num; i++){
            repeatedResult += string
        } return repeatedResult
    }
};

// Do not edit below this line
module.exports = repeatString;
