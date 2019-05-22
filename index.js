// Return first two drivers
const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0, 2);
};

// Return last two drivers
const returnLastTwoDrivers = drivers => {
    return drivers.slice(-2);
};

// An array of the above two
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// Make a higher order function that multiples a lower one
const createFareMultiplier = mult => {
    return cost => {
        return cost * mult
    }
}

// Make a variable that double fares
const fareDoubler = createFareMultiplier(2)

// Make a variable that triples fares
const fareTripler = createFareMultiplier(3)

// Select either the first or last two drivers
const selectDifferentDrivers = (drivers, whichDrivers) => {
    return whichDrivers(drivers);
};