var numbers = [ 1, 2, 3 ];
var squares = [];
numbers.map(function(n) {
    squares.push(n * n);
});
console.log(squares);