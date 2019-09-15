function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (obj) {
        return obj.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let driversOverRev = driversWithRevenueOver(drivers, revenue);
    return driversOverRev.map(function (obj) {
        return obj.name;
    });
}

function exactMatch(drivers, attribute) {
    let key = Object.keys(attribute)[0];
    return drivers.filter(function (obj) {
        return obj[key] == attribute[key];
    });
}

function exactMatchToList(drivers, attribute) {
    return exactMatch(drivers, attribute).map (function (obj) {
        return obj.name;
    });
}