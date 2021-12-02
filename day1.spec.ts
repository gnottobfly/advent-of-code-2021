import { detectDepth } from "./day1";

const SAMPLE_INPUT = `199
200
208
210
200
207
240
269
260
263`;

describe("aoc day 1", () => {
    it.each<[string, number]>([[SAMPLE_INPUT, 7], ["199", 0]])("properly detects increases of depths", (input, expectedOutput) => {
        expect(detectDepth(input, 1)).toEqual(expectedOutput);
    })

    it.each<[string, number]>([[SAMPLE_INPUT, 5]])("properly detects increases of depths within windows", (input, expectedOutput) => {
        expect(detectDepth(input, 3)).toEqual(expectedOutput);
    })
});