// code your solution here
function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`;
}
function mondayWork(event = "go to the office"){
    return `This Monday, I will ${event}.`
}
function wrapAdjective(flair = "special"){
    return function(string = "a dedicated programmer"){
        return `You are ${flair}${string}${ flair}!`
    }
}