import React, { useEffect, useState } from "react";
import "./game.css";

function Game() {
  const [userRes, setUserRes] = useState(0);
  const [winner, setWinner] = useState(null);
  const [gridData, setGridData] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  const handleOnclick = (x, y) => {
    const newArr = gridData.map((row) => [...row]);
    newArr[x][y] = userRes;
    setGridData(newArr);
    setUserRes((prev) => (prev === 0 ? 1 : 0));
  };

  const handelReset = () => {
    setWinner(null);
    setGridData([
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ]);
  };

  function checkWinner(board) {
    // check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== -1 &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        return board[i][0]; // 0 (O wins) or 1 (X wins)
      }
    }

    // check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] !== -1 &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        return board[0][i];
      }
    }

    // check main diagonal
    if (
      board[0][0] !== -1 &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return board[0][0];
    }

    // check anti diagonal
    if (
      board[0][2] !== -1 &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return board[0][2];
    }

    // no winner
    return null;
  }

  const renderBox = (value) => {
    if (value === 1) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
          stroke="red"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    } else if (value === -1) {
      return null;
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
          stroke="blue"
          strokeWidth="3"
          fill="none"
        >
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
    }
  };

  useEffect(() => {
    const win = checkWinner(gridData);
    setWinner(win);
  }, [gridData]);

  const renderWin = (winner) => {
    if (winner === 0) {
      return <div className="winner-banner">🎉 Hurray! User 1 Wins 🎉</div>;
    } else if (winner === 1) {
      return <div className="winner-banner">🎉 Hurray! User 2 Wins 🎉</div>;
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="game">
      <span className="title">Tic Tac Toe</span>
      <span>
        {renderWin(winner)}{" "}
        {winner === null ? (
          ""
        ) : (
          <button className="reset-btn" onClick={() => handelReset()}>
            Reset
          </button>
        )}
      </span>
      <div className="game-wrapper">
        {gridData.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((box, boxIndex) => (
              <button
                className="box"
                key={boxIndex}
                onClick={() => handleOnclick(rowIndex, boxIndex)}
                disabled={box !== -1}
              >
                <div className="box">{renderBox(box)}</div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;