"use client";

import { useEffect, useState, useMemo } from "react";
import "./GridCSS.css";

export default function Grid2() {
  const initialGrid = useMemo(
    () => [
      [
        { number: 0, cellId: "00" },
        { number: 0, cellId: "01" },
        { number: 0, cellId: "02" },
        { number: 0, cellId: "03" },
        { number: 0, cellId: "04" },
        { number: 0, cellId: "05" },
        { number: 0, cellId: "06" },
      ],
      [
        { number: 0, cellId: "07" },
        { number: 0, cellId: "08" },
        { number: 0, cellId: "09" },
        { number: 0, cellId: "10" },
        { number: 0, cellId: "11" },
        { number: 0, cellId: "12" },
        { number: 0, cellId: "13" },
      ],
      [
        { number: 0, cellId: "14" },
        { number: 0, cellId: "15" },
        { number: 0, cellId: "16" },
        { number: 1, cellId: "17" },
        { number: 0, cellId: "18" },
        { number: 0, cellId: "19" },
        { number: 0, cellId: "20" },
      ],
      [
        { number: 0, cellId: "21" },
        { number: 0, cellId: "22" },
        { number: 1, cellId: "23" },
        { number: 0, cellId: "24" },
        { number: 1, cellId: "25" },
        { number: 0, cellId: "26" },
        { number: 0, cellId: "27" },
      ],
      [
        { number: 0, cellId: "28" },
        { number: 0, cellId: "29" },
        { number: 0, cellId: "30" },
        { number: 1, cellId: "31" },
        { number: 0, cellId: "32" },
        { number: 0, cellId: "33" },
        { number: 0, cellId: "34" },
      ],
      [
        { number: 0, cellId: "35" },
        { number: 0, cellId: "36" },
        { number: 0, cellId: "37" },
        { number: 0, cellId: "38" },
        { number: 0, cellId: "39" },
        { number: 0, cellId: "40" },
        { number: 0, cellId: "41" },
      ],
      [
        { number: 0, cellId: "42" },
        { number: 0, cellId: "43" },
        { number: 0, cellId: "44" },
        { number: 0, cellId: "45" },
        { number: 0, cellId: "46" },
        { number: 0, cellId: "47" },
        { number: 0, cellId: "48" },
      ],
    ],
    []
  );

  function gridColour(Grid) {
    if (Grid === 0) {
      return "white-cell";
    } else if (Grid === 1) {
      return "grey-cell";
    } else if (Grid === 2) {
      return "green-cell";
    }
  }

  const [grid, setGrid] = useState(initialGrid);

  const [currentGrid, setCurrentGrid] = useState(0);

  function getGridCellById(cellId) {
    const flatGrid = grid.flat();
    const cell = flatGrid.find((obj) => obj.cellId === cellId);
    setCurrentGrid(cell.cellId);
  }

  useEffect(() => {
    if (currentGrid) {
      console.log(currentGrid);
    }
  }, [currentGrid]);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    const formData = new FormData(event.target);
    const number = parseInt(formData.get("number"));

    const newGrid = grid.map((row) =>
      row.map((cell) =>
        cell.cellId === currentGrid ? { ...cell, number: number } : cell
      )
    );
    setGrid(newGrid);
    console.log(currentGrid, number);
    setCurrentGrid(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Current Grid:", currentGrid);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [currentGrid]);

  return (
    <div id="gridStyle">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((value, colIndex) => (
            <div
              key={colIndex}
              className={gridColour(value.number)}
              onClick={() => getGridCellById(value.cellId)}
            >
              <p>{value.number}</p>
            </div>
          ))}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="number"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
