const palindromes = function (string) {
    
    let cleanedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let reversedString = cleanedString.split("").reverse().join("")

    if (reversedString == cleanedString){
        return true
    }else{
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
