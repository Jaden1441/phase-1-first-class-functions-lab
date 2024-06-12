// Code your solution in this filec
const returnFirstTwoDrivers = function(driversArray){
    return driversArray.slice(0,2);
}

//const array = ['Antonia', 'Nuru','Amari','Mo']

//

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2)
}
//returnLastTwoDrivers(array)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//const multiplier = createFareMultiplier = (fare) => (y) => fare * y


function createFareMultiplier(multiplier){
    return function(fare){
       return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names, selection){
    return selection(names) 
}