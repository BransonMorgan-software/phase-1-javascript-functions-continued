// code your solution here
function saturdayFun (activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`); 
}
saturdayFun();
function mondayWork (activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}
mondayWork();

function wrapAdjective (star = "*") {
    return function (you = "special") {
        return `You are ${star}${you}${star}!`;
    }
}
wrapAdjective(star)(you);
    