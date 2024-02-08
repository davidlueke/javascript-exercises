const palindromes = function (string) { 
    let cutString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedString = cutString.split("").reverse().join("");
    if (cutString === reversedString){return true}else{return false};

};

// Do not edit below this line
module.exports = palindromes;
