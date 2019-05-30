// Code your solution in this file!

const returnFirstTwoDrivers = function(arr){
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(a){
       return integer*a
    }
}

const fareDoubler = function(x){
    return createFareMultiplier(x)(2)
}

const fareTripler = function(x){
    return createFareMultiplier(x)(3)
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}