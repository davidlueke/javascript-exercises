const findTheOldest = function(people) {
    let age = [];
    let thisYear = new Date().getFullYear()
    people.forEach((person) => {

        if (!("yearOfDeath" in person)){ 
            age.push(thisYear - person.yearOfBirth) 
        
        }else{
            age.push(person.yearOfDeath - person.yearOfBirth)   
        }
    })

    let oldest = Math.max(...age)
    const foundOldest = people.find ((person) => {

        if (!("yearOfDeath" in person)){
            return thisYear - person.yearOfBirth == oldest
            
        }else{
            return person.yearOfDeath - person.yearOfBirth == oldest   
        }

    })

    return foundOldest
};

// Do not edit below this line
module.exports = findTheOldest;
