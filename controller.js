window.ConwayController = (function(){
  'use strict';

  /**
   * Controller
   *
   */
  function Controller(){
    // this.view = new View();
    this.model = new ConwayModel(50, 50);
    this.view = new ConwayView();

    setInterval(this.step.bind(this), 2000);
  }
  /**
   * step
   *
   */
  Controller.prototype.step = function(){  
    //Step game logic
    this.model.step();
    this.view.update(this.model.grid);
  }
  return Controller;


})();


