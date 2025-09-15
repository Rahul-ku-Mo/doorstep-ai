"use client";

import { GlowingEffect } from "./glowing-effect";

interface GridCellProps {
  row: number;
  col: number;
}

function GridCell({ row, col }: GridCellProps) {
  return (
    <div className="border-medium-gray bg-background/50 relative h-full w-full border">
      <GlowingEffect
        disabled={false}
        proximity={50}
        spread={55}
        blur={0}
        borderWidth={2}
        movementDuration={0.8}
        inactiveZone={0.3}
        className="rounded-none"
      />
    </div>
  );
}

export function InteractiveGrid() {
  const gridCols = 12;
  const gridRows = 6;
  const baseWidth = gridCols * 100; // 1200px
  const baseHeight = gridRows * 100; // 600px

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <div
        className="relative h-full w-full origin-center"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
          gap: "0px",
        }}
      >
        {Array.from({ length: gridCols * gridRows }, (_, index) => {
          const row = Math.floor(index / gridCols);
          const col = index % gridCols;
          return <GridCell key={`${row}-${col}`} row={row} col={col} />;
        })}
      </div>

      <div
        className="pointer-events-none absolute inset-0 h-full w-full opacity-5"
        style={{
          backgroundImage: `
  linear-gradient(#fafafa 1px, transparent 1px),
  linear-gradient(90deg, #fafafa 1px, transparent 1px)
`,
          backgroundSize: `${100/gridCols}% ${100/gridRows}%`,
        }}
      />
    </div>
  );
}
