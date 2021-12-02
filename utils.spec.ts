import { slidingWindow } from "./utils";

describe("utils", () => {
    describe(slidingWindow.name, () => {
        it("can create a sliding window of elements", () => {
            const elements = [1, 2, 3, 4, 5, 6];
            const windowSize = 3;
            const expectedWindows = [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]];

            const actualWindows = slidingWindow(elements, windowSize);

            expect(actualWindows).toEqual(expectedWindows);
        });

        it("throws if windowSize is bigger than array length", () => {
            expect(() => slidingWindow([1, 2, 3], 4)).toThrowError();
        })
    });
});