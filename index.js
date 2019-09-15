function driversWithRevenueOver(drivers, num) {
    return drivers.filter(function(driver) {
        return driver.revenue > num;
    })
}

function driverNamesWithRevenueOver(drivers, num) {
    return driversWithRevenueOver(drivers, num).map(function(driver) {
        return driver.name;
    })
}

function exactMatch(drivers, matcher) {
    return drivers.filter(function(driver) {
        let match = false;
        for(const key in matcher) {
            match = driver[key] === matcher[key];
        }
        return match;
    })
}

function exactMatchToList(drivers, matcher) {
    return exactMatch(drivers, matcher).map(function(driver) {
        return driver.name;
    })
}