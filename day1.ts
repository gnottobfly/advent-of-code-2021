import { sum } from "lodash";
import { DAY_1_INPUT } from "./day1-data";
import { getInputLines, slidingWindow } from "./utils";

export function detectDepth(input: string, windowSize = 1) {
    return slidingWindow(getInputLines(input).map(Number), windowSize).map(sum).reduce((depthIncreases, currentDepth, indx, depths) => {
        if (indx === 0) {
            return depthIncreases;
        }

        return currentDepth > depths[indx - 1] ? depthIncreases + 1 : depthIncreases;
    }, 0);
}

if (require.main) {
    console.log(detectDepth(DAY_1_INPUT));
    console.log(detectDepth(DAY_1_INPUT, 3));
}