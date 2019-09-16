function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver){
        return driver.revenue > revenue
    })
}


function driverNamesWithRevenueOver(drivers, revenue) {
    let wellPaid = driversWithRevenueOver(drivers, revenue)
    return wellPaid.map(function (driver){
        return driver.name
    })
}


function exactMatch(drivers, attr) {
    let matches = {}

    return drivers.filter(function (driver) {
        for (const key in attr) {
            matches = driver[key] === attr[key];
        }

        return matches;
    });
};


// go over this one!
function exactMatchToList(drivers, attr) {
    return exactMatch(drivers, attr).map(function (driver) {
        return driver.name;
    });
}