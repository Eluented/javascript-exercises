const ftoc = function(farenheit) {
  let equation = (farenheit - 32) * 5/9;
  return Math.round(equation * 10) / 10;
};

const ctof = function(celsius) {
  let equation = (celsius * 9/5) + 32;
  return Math.round(equation * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
