var controller = {

  init: function() {
    // start the board with two squares
    model.createNewSquare();
    model.createUniqueSquare();

    view.render(model.allSquares);
  },


  direction: "",


  // move squares AND add a new unique one
  moveSquares: function() {
    model.moveSquaresRight();
    model.createUniqueSquare();
    view.render(model.allSquares);
    model.updateScore();
    model.checkGameOver();
  },


  clearBoard: function() {
    model.allSquares = [];
    model.score = 0;
    controller.init();
  },


  getScore: function() {
    return model.updateScore();
  },




}