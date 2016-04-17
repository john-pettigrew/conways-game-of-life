window.ConwayView = (function(){

  'use strict';
  function View(){
    var id = 'game';
    this.canvas = document.getElementById(id);
  };

  View.prototype.update = function(gridData){
    var hLength = gridData.length; 
    var vLength = gridData[0].length; 
    var ctx = this.canvas.getContext('2d');

    var stepHorizontal = this.canvas.width / hLength;
    var stepVertical = this.canvas.height / vLength;
    
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.strokeStyle = '#383C4D';
    for(var i = 0; i < hLength; i++){
      for(var j = 0; j < vLength; j++){
        if(gridData[i][j]){
          
          ctx.strokeRect(i *stepHorizontal, j * stepVertical, stepHorizontal, stepVertical);
          ctx.fillStyle = '#060608';
        }else{
          
          ctx.fillStyle = '#000000';
        }
        ctx.fillRect(i *stepHorizontal, j * stepVertical, stepHorizontal, stepVertical);
      }
    }
  }

  return View;
})();
