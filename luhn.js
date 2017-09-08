/*
    function name: check
    input: string
    output: Boolean
    `check` will take an interger number written as a string and apply the
    Luhn Algorithm to determine whether it is valid (true) or not (false).
*/

var check = function (n) {
  list = String(n).split('');
  offset = list.length % 2;
  list.forEach(function(m, i) {
    m = Number(m);
    if (i % 2 === offset) {
      m = m * 2;
    }
    if (m > 9) {
      m = m - 9;
    }
    list[i] = m;
  });

  var checkSum = list.reduce(function (a, b) {return a + b;});
  // console.log(checkSum);
  return checkSum % 10 === 0;
};

module.exports = check;
