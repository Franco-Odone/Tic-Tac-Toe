import React, { useState } from "react";

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#000000",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Square = ({ onClick, value }) => {
  return (
    <button onClick={onClick} className="square" style={squareStyle}>
      {value}
    </button>
  );
};

const Board = ({ squares, onClick, reload }) => {
  return (
    <div style={containerStyle} className="gameBoard">
      <button style={buttonStyle} onClick={() => reload(Array(9).fill(null))}>
        Reset
      </button>
      <div style={boardStyle}>
        {squares.map((square, i) => {
          return <Square key={i} value={square} onClick={() => onClick(i)} />;
        })}
      </div>
    </div>
  );
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // La segunda línea de la función verifica si ya hay un ganador o si el cuadrado en el índice "i" del array "boardCopy" ya está ocupado.
    // Si se cumple cualquiera de estas condiciones, la función se detiene y no hace nada más.
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <div id="statusArea" className="status" style={instructionsStyle}>
          Next player: {xIsNext ? "X" : "O"}
        </div>
        <div id="winnerArea" className="winner" style={instructionsStyle}>
          {winner && `Winner: ${winner}`}
        </div>
        <Board squares={board} onClick={handleClick} reload={setBoard} />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
