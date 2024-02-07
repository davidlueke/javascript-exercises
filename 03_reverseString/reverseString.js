const reverseString = function(text) {

    let reversedText = "";

    if (text == ""){

        return ""

    }else{

        let lastLetter = text.at(-1)
        reversedText += lastLetter

        let count = -1
        for (i = 0; i < text.length; i++){
        let part = text.slice(count -1 , count);
        reversedText += part;
        count--;
        }
        
        return reversedText
    }
};

// Do not edit below this line
module.exports = reverseString;
