// Code your solution here:
function driversWithRevenueOver(obj_arr, rev_num) {
  let output = obj_arr.filter( driver => driver['revenue'] > rev_num );
  return output;
}
function driverNamesWithRevenueOver(obj_arr, rev_num) {
  let output = obj_arr.filter( driver => driver['revenue'] > rev_num )
    .map(driver => driver["name"]);
  return output;
}

function exactMatch(obj_arr, spec_obj) {
  let skey = Object.keys(spec_obj)[0]
  let output = obj_arr.filter( obj => obj[skey] === spec_obj[skey]);
  return output;
}

function exactMatchToList(obj_arr, spec_obj) {
  let skey = Object.keys(spec_obj)[0];
  let output = obj_arr.filter( obj => obj[skey] === spec_obj[skey])
    .map(driver => driver["name"]);
  return output;
}