window.ConwayView = (function(){

  'use strict';
  /**
   * View
   *
   */
  function View(){
    var id = 'game';
    this.canvas = document.getElementById(id);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  /**
   * update
   *
   * @param {Array.<Array.<bool>>} gridData The new grid data
   */
  View.prototype.update = function(gridData){
    var hLength = gridData.length; 
    var vLength = gridData[0].length; 
    var ctx = this.canvas.getContext('2d');

    var stepHorizontal = this.canvas.width / hLength;
    var stepVertical = this.canvas.height / vLength;

    var step = (stepHorizontal < stepVertical ? stepVertical : stepHorizontal) + 0.5;
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.strokeStyle = '#383C4D';
    ctx.fillStyle = '#060608';
    for(var i = 0; i < hLength; i++){
      for(var j = 0; j < vLength; j++){
        if(gridData[i][j]){
          ctx.fillRect(i *step, j * step, step, step);
          ctx.strokeRect(i *step, j * step, step, step);
        }
      }
    }
  }

  return View;
})();
