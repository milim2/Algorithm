function plusMinus(arr) {
    let zero = 0, pos = 0, neg = 0;
    arr.map(function(num) {
        num == 0? zero++:(num > 0? pos++: neg++)
    });
    console.log((pos / arr.length).toFixed(6));
    console.log((neg / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}

OUTPUT
0.500000
0.333333
0.166667


== array.map (function(currentValue, index, arr), thisValue)
numbers.map(function multiplyArray(num) {
  return num * document.getElementById("multiplyWith").value;});
