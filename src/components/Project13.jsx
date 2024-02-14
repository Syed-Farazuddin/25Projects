import React, { useEffect, useState } from "react";

function Square({ value, onClick, disable }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className="text-4xl border-[1px] cursor-pointer float-left p-0 border-red-500 w-[100px] h-[100px] text-center -mt-[1px] -mr-[1px]"
    >
      {value}
    </button>
  );
}

function Project13() {
  const [XTurn, setXTurn] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [AVictory, setAVictory] = useState(false);
  const [BVictory, setBVictory] = useState(false);
  const [Draw, setDraw] = useState(false);

  function handleClick(getidx) {
    let cpySquare = [...squares];
    if (cpySquare[getidx] === "") {
      cpySquare[getidx] = XTurn ? "O" : "X";
    }
    setSquares(cpySquare);
    setXTurn(!XTurn);
  }
  function IsVictory() {
    // Check in diagnol
    checkDiagnol();
    // Check in row
    checkRow();
    // Check in column
    checkColumn();
  }
  function IsDraw() {
    for (let i = 0; i < 9; i++) {
      if (squares[i] === "") {
        return;
      }
    }
    setDraw(true);
  }
  function checkDiagnol() {
    if (
      (squares[0] === "X" && squares[4] === "X" && squares[8] === "X") ||
      (squares[2] === "X" && squares[4] === "X" && squares[6] === "X")
    ) {
      setAVictory(true);
    }
    if (
      (squares[0] === "O" && squares[4] === "O" && squares[8] === "O") ||
      (squares[2] === "O" && squares[4] === "O" && squares[6] === "O")
    ) {
      setBVictory(true);
    }
  }
  function checkRow() {
    let idx = 0;
    while (idx <= 8) {
      for (let i = 0; i < 3; i++) {
        if (
          squares[idx] === "X" &&
          squares[idx + 1] === "X" &&
          squares[idx + 2] === "X"
        ) {
          setAVictory(true);
        }
        if (
          squares[idx] === "O" &&
          squares[idx + 1] === "O" &&
          squares[idx + 2] === "O"
        ) {
          setBVictory(true);
        }
      }
      idx = idx + 3;
    }
  }
  function checkColumn() {
    let idx = 0;
    while (idx <= 8) {
      for (let i = 0; i < 3; i++) {
        if (
          squares[idx] === "X" &&
          squares[idx + 3] === "X" &&
          squares[idx + 6] === "X"
        ) {
          setAVictory(true);
        }
        if (
          squares[idx] === "O" &&
          squares[idx + 3] === "O" &&
          squares[idx + 6] === "O"
        ) {
          setBVictory(true);
        }
      }
      idx = idx + 1;
    }
  }
  useEffect(() => {
    console.log(AVictory);
    IsVictory();
    IsDraw();
  }, [squares, XTurn, AVictory, BVictory]);

  return (
    <div className="bg-black h-[100vh] flex items-center justify-center text-white flex-col">
      <h1 className="text-2xl mb-10 font-bold ">Project 13 : Tic Tac Toe</h1>

      <div className=" bg-red-100 text-black flex flex-col border-2 border-slate-500 items-center justify-center">
        <div>
          <Square
            disable={AVictory || BVictory ? true : false}
            value={squares[0]}
            onClick={() => handleClick(0)}
          />
          <Square
            disable={AVictory || BVictory ? true : false}
            value={squares[1]}
            onClick={() => handleClick(1)}
          />
          <Square
            disable={AVictory || BVictory ? true : false}
            value={squares[2]}
            onClick={() => handleClick(2)}
          />
        </div>
        <div>
          <Square
            disable={AVictory || BVictory ? true : false}
            value={squares[3]}
            onClick={() => handleClick(3)}
          />
          <Square
            disable={AVictory || BVictory ? true : false}
            value={squares[4]}
            onClick={() => handleClick(4)}
          />
          <Square
            disable={AVictory || BVictory ? true : false}
            value={squares[5]}
            onClick={() => handleClick(5)}
          />
        </div>
        <div>
          <Square
            disable={AVictory || BVictory ? true : false}
            value={squares[6]}
            onClick={() => handleClick(6)}
          />
          <Square
            disable={AVictory || BVictory ? true : false}
            value={squares[7]}
            onClick={() => handleClick(7)}
          />
          <Square
            disable={AVictory || BVictory ? true : false}
            value={squares[8]}
            onClick={() => handleClick(8)}
          />
        </div>
      </div>
      <p className="text-white font-extrabold mt-4">
        {AVictory
          ? "HURRAYYYYYYYYYY! Player A Won"
          : BVictory
          ? "HURRAYYYYYYYYYY! Player B Won"
          : Draw
          ? "It's Tie"
          : XTurn
          ? "Player B's turn"
          : "Player A's Turn"}
      </p>
      <button
        className="bg-red-400 my-5 p-2 rounded-lg font-extrabold text-black"
        onClick={() => {
          setSquares(Array(9).fill(""));
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default Project13;
