var view = {

  init: function() {
    view.eventListeners.newGame();
    view.eventListeners.keypressListener();
  }, 


  eventListeners: {
    newGame: function() {
      $('button').click(function() {
        // reset game
        console.log("New Game!");
        view.hideSquares();
        controller.clearBoard();
      })
    },

    keypressListener: function(){
      $( document ).keydown(function(e) {
        e.preventDefault();
        switch(e.which) {
          case 37:
          controller.direction = "left";
          console.log("Left!")
          break;

          case 38:
          controller.direction = "up";
          console.log("Up!")
          break;

          case 39:
          controller.direction = "right";
          console.log("Right!")
          break;

          case 40:
          controller.direction = "down";
          console.log("Down!")
          break;
        }
        // move squares after each keypress
        controller.moveSquares()
      })
    }

  },



  render: function(allSquares) {
    for (var i = 0; i < allSquares.length; i++) {
      // turn Square attributes into view attributes
      var dataRow = allSquares[i]["row"];
      var dataCol = allSquares[i]["col"];
      var square = $('[data-row=' + dataRow + ']').find($('[data-col=' + dataCol + ']'))

      square.html(allSquares[i]["value"])
      square.addClass('show-square')
    }
  },


  hideSquares: function() {
    $('.show-square').html("");
    $('.show-square').removeClass('show-square');
  }




}