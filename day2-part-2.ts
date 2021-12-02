import { DAY_2_DATA } from "./day2-data";
import { getInputLines } from "./utils";

type Position = {
    depth: number,
    horizontal: number,
    aim: number
};

type Direction = "forward" | "down" | "up";

const DEFAULT_POSITION : Position = Object.freeze({depth: 0, horizontal: 0, aim: 0});
const DIRECTION_TO_SIGN : Record<Direction, number> = {
    down: 1,
    up: -1,
    forward: 1
};

function calculateSubPosition(previousPosition: Position, command: string) : Position {
    const [direction, amountStr] = command.split(' ') as [Direction, string];
    const amount = Number(amountStr);

    if (direction === "forward") {
        return {
            aim: previousPosition.aim,
            horizontal: previousPosition.horizontal + amount,
            depth: previousPosition.aim === 0 ? previousPosition.depth : (previousPosition.depth + (amount * previousPosition.aim))
        }
    }

    return {
        ...previousPosition,
        aim: previousPosition.aim + (DIRECTION_TO_SIGN[direction] * amount)
    }
}

function multFinalDepth(input: string) : Number {
    const finalPosition = getInputLines(input).reduce(calculateSubPosition,  DEFAULT_POSITION);
    return finalPosition.depth * finalPosition.horizontal;
}

if (require.main) {
    // console.log(multFinalDepth(`forward 5
    // down 5
    // forward 8
    // up 3
    // down 8
    // forward 2`));
    console.log(multFinalDepth(DAY_2_DATA));
}