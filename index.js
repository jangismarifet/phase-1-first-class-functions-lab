// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    let res = [];
    res.push(arr[0]);
    res.push(arr[1]);
    return res;
}
const returnLastTwoDrivers = function(arr) {
    let res = [];
    res.push(arr[arr.length-2]);
    res.push(arr[arr.length-1]);
    return res;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mul) {
    return function (fr) {
        return mul*fr;
    }
}
const fareDoubler = function (fr) {
    return createFareMultiplier(2)(fr);
}
const fareTripler = function (fr) {
    return createFareMultiplier(3)(fr);
}
function selectDifferentDrivers(drivers,callback) {
    return callback(drivers);
}