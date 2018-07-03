// Apart from built-in modules, you can define you own modules
// Let's say our module returns date
// {exports} keywors is used to make the function available outside the module file 
exports.getDateTime = function() {
  return Date();
}
