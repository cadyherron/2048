var model = {

  allSquares: [],
  maxSquares: 16,
  squareCoords: ["1", "2", "3", "4"],


  randomCoord: function() { 
    return String(Math.floor(Math.random() * 4) + 1)
  },


  // need to save current count of squares
  squareCount: 0,



  // generate first random square
  createNewSquare: function() {
    model.allSquares.push(new Square(model.randomCoord(), model.randomCoord(),"2"));
    model.squareCount++;  
  },


  // make sure new square is not the same as an existing square
  createUniqueSquare: function() {
    var unique = false;
    var newSquare = new Square(model.randomCoord(), 
                               model.randomCoord(),"2");

    for (sq in model.allSquares) {
      if (newSquare != model.allSquares[sq]) {
        unique = true;
      } 
    }

    if (unique) {
      model.allSquares.push(newSquare);
      model.squareCount++; 
    }

               
  },


  // logic for when to combine squares



  // game is over when board is full and no more moves


}




function Square(row, col, value) {
  this.row = row;
  this.col = col;
  this.value = value;
}