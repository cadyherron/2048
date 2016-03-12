
function Square(row, col, value) {
  this.row = row;
  this.col = col;
  this.value = value;
}



var model = {


  allSquares: [],
  maxSquares: 16,


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

    for (var sq in model.allSquares) {

      if (newSquare["row"] == model.allSquares[sq]["row"] && newSquare["col"] == model.allSquares[sq]["col"]) {
        unique = false;
      }
    }

    if (unique === true) {
      model.allSquares.push(newSquare); 
    } else {
      model.createUniqueSquare();
    }

  },


  // logic for when to combine squares


  getAllCoords: function() {
    var allCoords = []
    for (var sq in model.allSquares) {
      allCoords.push([model.allSquares[sq]["row"], model.allSquares[sq]["col"]])
    }
    return allCoords;
  },



  count: function(array, item) {
  // var count = function(array, item) {
    var count = 0;    
    for (var instance in array) {
      if(JSON.stringify(array[instance]) == JSON.stringify(item)) {
        count++;
        var index = instance
      }
    }
    return [count, index]; // return count AND index of duplicate
  },



  checkForMatch: function(item1, item2) {
    return (item1.value == item2.value)
  },




  moveSquaresDown: function() {
    var coords = model.getAllCoords();

    for (var sq in model.allSquares) {

      var that = model.allSquares[sq] // shorthand
      var newRow = String(Number(that["row"]) + 1)
      var potentialCoords = [newRow, model.allSquares[sq]["col"]]


      that["row"] = newRow;       // increase the row for now


      // don't push the square off the board
      if (that["row"] === "5") {
        that["row"] = String(Number(that["row"]) - 1);
      }


      // don't push a square on top of another one:
      var result = model.count(coords, potentialCoords)

      if (result[0] == 1) {
        console.log("duplicate!")

        // check for match
        if (model.checkForMatch(that, model.allSquares[result[1]])) {
          // combine squares
          console.log("combine squares!")
          that.value = String(that.value * 2); // double the value
          model.allSquares.splice(result[1], 1)// remove the other square
        } else {
          // no match: don't change square
          console.log("no match!")
          if (that["row"] === "4" ) {
            that["row"] = String(Number(that["row"]) - 1);
          }          
        }
      }

      // keep the square moving until it hits another one:
      else {
        // model.moveSquaresDown();
      }

    }
  },


  updateScore: function() {
    var score = 0;
    for (var sq in model.allSquares) {
      score += Number(model.allSquares[sq]["value"])
    }
    return score;
  },


  getCurrentScore: function(){
    return this.score;
  },


  // game is over when board is full OR square has a value of 2048
  checkGameOver: function() {
    if (model.allSquares.length === model.maxSquares) {
      console.log("Game Over!")
      alert("Game Over!")
    }

    for (var sq in model.allSquares) {
      if (model.allSquares[sq]["value"] == "2048") {
        console.log("Congratulations, you win!")
        alert("Congratulations, you win!")        
      }
    }
  },

}

