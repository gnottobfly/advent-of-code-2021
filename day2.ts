import { DAY_2_DATA } from "./day2-data";
import { getInputLines } from "./utils";

export type Position = {
    depth: number,
    horizontal: number
};

type Direction = "forward" | "down" | "up";

const DEFAULT_POSITION : Position = Object.freeze({depth: 0, horizontal: 0});
const DIRECTION_TO_SIGN : Record<Direction, number> = {
    down: 1,
    up: -1,
    forward: 1
};

export function calculateSubPosition(previousPosition = DEFAULT_POSITION, command: string) : Position {
    const [direction, amount] = command.split(' ');
    const prop : "depth" | "horizontal" = direction === "forward" ? "horizontal" : "depth";
    
    return {
        ...previousPosition,
        [prop]: previousPosition[prop] + (DIRECTION_TO_SIGN[direction as Direction] * Number(amount))
    }
}

export function multFinalDepth(input: string) : Number {
    const finalPosition = getInputLines(input).reduce(calculateSubPosition,  DEFAULT_POSITION);
    return finalPosition.depth * finalPosition.horizontal;
}

if (require.main) {
    console.log(multFinalDepth(DAY_2_DATA));
}