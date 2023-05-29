








let currentMarker = 'X';
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];







const handleClick = (element) => {

  


  console.log(`The element you clicked on has an id:  ${element.id}`)



  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id)
  }
};












const addMarker = (id) => {


  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)








  const values = id.split('-');
  const row = parseInt(values[0]);
  const column = parseInt(values[0]);

  board[row][column] = currentMarker;
  console.log('board', board[row][column], board)
  document.getElementById(id).innerHTML = currentMarker;
  changeMarker()
};

const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
};

const resetBoard = () => {
  const squares = document.getElementsByTagName("td");
  for (i = 0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  }
};

// start TTT-Logic

if (board[0][0] == board[0][1] && board[0][0] == board[0][2]) {

}