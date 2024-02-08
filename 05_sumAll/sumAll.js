const sumAll = function(num1, num2) {

    if (Number.isInteger(num1) && Number.isInteger(num2) && Math.sign(num1) === 1 && Math.sign(num2) === 1){

        let result = 0
        if (num1 > num2){
            for (i = num2; i <= num1; i++){
                result += i
            }
        } else {
            for (i = num1; i <=  num2; i++){
                result += i
            }
        }
        return result
    }else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
