var cutListForm = document.querySelector("#cutListForm"); // Cutlist form
var cutListRow = document.querySelector("#cutListRow"); // Cutlist entry row
var cutListMod = document.querySelector("#add"); // Checkbox for cutlist mod

// eventListener for checking add/remove row buttons
document.querySelector("#add").addEventListener("click", function() {
  if (cutListMod.checked) {
    cutListForm.appendChild(cutListRow);
  }
});
// TODO: Add/remove a row to the cutlist form when "add row?" is chekced
function modCutListRow(e) {
  if (e.target.nodeName === "INPUT") { // FIXME: Validate for un/checked
    // Append custListRow to cutListForm
  }
}

var stock; /* Template dimensions of uncut lumber to hold best arrangement
              of 'wholePiece's */

// TODO: Create stock object(s) based on #stockForm inputs
function stock(length, height, width) {
  return new Object
}

var cost; // $ cost of 'stock' based on template prices.


// Object constructor for working pieces to be derived from 'stock'
function piece(type, quantity, length, height, width) {
  return new Object ()
    this.type =  type, // String name for piece type
    this.quantity = quantity, // Int for quantity of 'this.type' needed
    this.length = length, // Lengths for 'this.type'
    this.height = height, // Heights for 'this.type'
    this.width = width, // Heights for 'this.type'
    this.cutArea = this.lengh * this.width, // Area of this.type when cut
    this.wholeArea = (this.length + kerf) * (this.width + kerf), /* Area of
    this.type + kerf for configuring 2D placement within stock
    this.cutVol = this.length * this.height * this.width; /* Volume of this.type
    when cut */
    this.wholeVol = (this.length + kerf) * (this.height + kerf) *
                    (this.width + kerf),  /* Volume of this.cutVol + kerf to
    configure 3D arrangement within stock */
    this.cuts = , /* # of cuts required to acquire 1 piece from stock. Will often
    be 4 unless top/bottom/end of stock...how to account for this? */
    this.waste = , // Volume of waste if stock consists only of this.type
  }
}


/*
// Get list of 'cutPiece'
function enterPieceDimensiions(piece...) {
  - Get all of piece.wholeArea
  - Permutate best ideal arrangement of piece.wholeArea where < stock.area
  - Generate HTML divs of stock overlaid with piece.wholeArea
}
*/
