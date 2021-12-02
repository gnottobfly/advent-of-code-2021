export const getInputLines = (input: string) => input.trim().split('\n').map(s => s.trim());

export const slidingWindow = <T>(arr: T[], windowSize: number) : Array<T[]> => {
    if (arr.length < windowSize) {
        throw new Error(`length of array (${arr.length}) is smaller than window size (${windowSize})`);
    }
    
    const windows : Array<T[]> = [];

    for (let i = 0; i <= arr.length - windowSize; i++) {
        for (let j = 0; j < windowSize; j++) {
            if (windows[i] === undefined) {
                windows[i] = [];
            }

            windows[i].push(arr[i + j]);
        }
    }

    return windows;
}