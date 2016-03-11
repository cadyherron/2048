var model = {

  allSquares: [],
  maxSquares: 16,
  squareCoords: ["1", "2", "3", "4"],


  randomCoord: function() { 
    return String(Math.floor(Math.random() * 4) + 1)
  },


  // generate first random square
  createNewSquare: function() {
    model.allSquares.push(new Square(model.randomCoord(), model.randomCoord(),"2"));
  },


  // make sure new square is not the same as an existing square
  createUniqueSquare: function() {
    var unique = true;
    var newSquare = new Square(model.randomCoord(), 
                               model.randomCoord(),"2");

    for (sq in model.allSquares) {

      if (newSquare["row"] == model.allSquares[sq]["row"] && newSquare["col"] == model.allSquares[sq]["col"]) {
        unique = false;
        console.log("Unique is false!")
      }
    }

    if (unique === true) {
      console.log("square was unique, adding...")
      model.allSquares.push(newSquare);
    } else {
      console.log("square was NOT unique...")
      model.createUniqueSquare();
    }

               
  },


  // logic for when to combine squares



  // game is over when board is full and no more moves
  checkGameOver: function() {
    if (model.allSquares.length === model.maxSquares) {
      console.log("Game Over!")
      alert("Game Over!")
    }
  }

}




function Square(row, col, value) {
  this.row = row;
  this.col = col;
  this.value = value;
}