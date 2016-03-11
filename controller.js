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

    model.createUniqueSquare();
    view.render(model.allSquares);
    model.checkGameOver();
  },







}