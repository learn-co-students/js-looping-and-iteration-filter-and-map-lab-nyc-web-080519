// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(drivers, rev) {
  let driversRevArr = driversWithRevenueOver(drivers, rev);
  return driversRevArr.map(function(driver) {
    return driver.name
  });
};

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    let k = Object.keys(obj)[0];
    let v = Object.values(obj)[0];
    return driver[k] === v;
  });
};

function exactMatchToList(drivers, obj) {
  let driversArr = exactMatch(drivers, obj);
  return driversArr.map(function(driver) {
    return driver.name
  });
};

