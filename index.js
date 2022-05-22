// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    }
}

const fareDoubler = (function (createFareMultiplier) {
    return createFareMultiplier * 2;
});

const fareTripler = (function(createFareMultiplier) {
    return createFareMultiplier * 3
});

function selectDifferentDrivers(drivers,returnNewDrivers) {
    /*return drivers.slice(0,2)*/
    return returnNewDrivers(drivers);
    
}




