import { cn } from "@/lib/utils";

type Variant = "v1" | "v2" | "v3";

const CELL = 6;
const GAP = 1;
const GRID = 8;
const SIZE = GRID * CELL + (GRID - 1) * GAP;

type Cell = [number, number];

const patterns: Record<Variant, Cell[]> = {
  // Clean + balanced
  v1: [
    // O
    [0, 1], [1, 1], [2, 1],
    [0, 2],         [2, 2],
    [0, 3],         [2, 3],
    [0, 4], [1, 4], [2, 4],
    // T
    [4, 1], [5, 1], [6, 1], [7, 1],
            [5, 2],
            [5, 3],
            [5, 4],
  ],
  // Slightly more character (notched O + heavier T)
  v2: [
    [0, 1], [1, 1], [2, 1],
    [0, 2],         [2, 2],
    [0, 3], [1, 3], [2, 3],
    [0, 4],         [2, 4],
    [0, 5], [1, 5], [2, 5],
    [4, 1], [5, 1], [6, 1], [7, 1],
    [4, 2], [5, 2], [6, 2],
            [5, 3],
            [5, 4],
            [5, 5],
  ],
  // Compact/favicon-first
  v3: [
    [0, 2], [1, 2], [2, 2],
    [0, 3],         [2, 3],
    [0, 4], [1, 4], [2, 4],
    [4, 2], [5, 2], [6, 2],
            [5, 3],
            [5, 4],
  ],
};

export function PixelOtLogo({ variant = "v1", className }: { variant?: Variant; className?: string }) {
  const cells = patterns[variant];

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={cn("shrink-0", className)} role="img" aria-label="OT logo mark">
      <title>Orchard Tech OT mark</title>
      {cells.map(([x, y], i) => {
        const isGreen = x <= 2;
        return (
          <rect
            key={`${variant}-${i}`}
            x={x * (CELL + GAP)}
            y={y * (CELL + GAP)}
            width={CELL}
            height={CELL}
            rx={1}
            fill={isGreen ? "hsl(var(--accent))" : "hsl(var(--primary))"}
          />
        );
      })}
    </svg>
  );
}
