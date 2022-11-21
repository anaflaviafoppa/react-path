export const random = (max: number, min: number): number => {
    return min + Math.floor(max * Math.random());
}

export const range = (max: number, min: number): Array<any> => {
    return Array.from({length: max - min + 1}, (_, i) => min + i);
}

export const sun = (arr: Array<number>): number => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
