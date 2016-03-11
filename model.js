var model = {

  allSquares: [],


  maxSquares: 16,


  // need to save current count of squares
  squareCount: 0,


  // generate new random square
  createNewSquare: function() {
    model.allSquares.push(new Square("1","1","2"));
    model.squareCount++;
  },




  // logic for when to combine squares




}




function Square(row, col, value) {
  this.row = row;
  this.col = col;
  this.value = value;
}