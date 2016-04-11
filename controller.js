window.ConwayController = (function(){
  'use strict';

  /**
   * Controller
   *
   */
  function Controller(){
    this.view = new View();
    this.model = new Model();
  }
  /**
   * step
   *
   * @returns {array[array[bool]]} The current game grid
   */
  Controller.prototype.step = function(){  
    //Step game logic
    this.model.step();

    return this.model.grid;
  }
})();


