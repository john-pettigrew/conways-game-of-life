window.ConwayModel = (function(){
  'use strict';
  /**
   * Model
   *
   * @param {int} x Horizontal length of grid
   * @param {int} y Vertical length of grid
   * @param {Array.<Array.<bool>>} setGrid (optional) A predefined 2D array
   */
  function Model(x, y, setGrid){
    this.grid = [[]];
    this.x = 1;
    this.y = 1;

    if(setGrid){
      this.grid = setGrid;
      this.x = setGrid.length;
      this.y = setGrid[0].length;
    }else{
      this.x = x;  
      this.y = y;  
      this.grid = generateGrid(x,y);
    }

    /**
     * generateGrid
     *
     * @param {int} x horizontal length of new grid
     * @param {int} y vertical length of new grid
     * @returns {Array.<Array.<bool>>} 2D array
     */
    function generateGrid(x, y){
      var newGrid = [];
      for(var i = 0; i < x; i++){
        newGrid.push([]);
        for(var j = 0; j < y; j++){
        newGrid[i][j] = false;
          if(Math.floor(Math.random() * 9) === 1){
            newGrid[i][j] = true;
          }
        }
      } 
      return newGrid;
    }
  }

  /**
   * step the grid forward
   *
   */
  Model.prototype.step = function(){
    var newGrid = [];
    var numNeighbors;
    var self = this;
    for(var i = 0; i < this.x; i++){
      newGrid.push([]);
      for(var j = 0; j < this.y; j++){
        numNeighbors = getNumNeighbors(i, j);
        if(isLiveCell(i,j)){
          if(numNeighbors < 2){
            //under-population
            newGrid[i][j] = false;
          }else if(numNeighbors === 2 || numNeighbors === 3){
            //lives on
            newGrid[i][j] = true;
          }else if(numNeighbors > 3){
            //over-population
            newGrid[i][j] = false;
          }else{
            newGrid[i][j] = this.grid[i][j];  
          }
        }else{
          if(numNeighbors === 3){
            //reproduction
            newGrid[i][j] = true;
          }else{
            newGrid[i][j] = this.grid[i][j];  
          } 
        }
      }  
    }

    this.grid = newGrid;

    /**
     *  get the number of neighboring live cells
     *
     * @param {int} x position x
     * @param {int} y position y
     * @returns {int} Number of neighbor live cells
     */
    function getNumNeighbors(x, y){
      var numNeighbors = 0;

      for(var i = x-1; i <= x+1; i++){
        for(var j = y-1; j <= y+1; j++){
          if( !(x === i && y === j) && isLiveCell(i, j)){
            numNeighbors++;
          } 
        }
      }

      return numNeighbors;
    }
    /**
     * isLiveCell
     *
     * @param {int} x x position
     * @param {int} y y position
     * @returns {bool} Returns true if the location exists and contains a live cell
     */
    function isLiveCell(x, y){
      if(x >= 0 && x < self.x && y >= 0 && y < self.y){
        if(self.grid[x][y]){
          return true;
        }
      }
      return false;
    }
  };

  /**
   * print the current grid
   *
   */
  Model.prototype.print = function(){
    console.table(this.grid);
  };

  return Model;
})();
