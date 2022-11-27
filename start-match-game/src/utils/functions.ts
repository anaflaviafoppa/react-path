export const random = (max: number, min: number): number => {
    return min + Math.floor(max * Math.random());
}

export const range = (max: number, min: number): Array<any> => {
    return Array.from({length: max - min + 1}, (_, i) => min + i);
}

export const sum = (arr: Array<number>): number => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

export const randomSumIm = (arr: Array<number>, max: number) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
        for(let j=0, len = sets.length; j<len; j++){
            // @ts-ignore
            const candidateSet = sets[j].concat(arr[i]);
            const candidateSum = sum(candidateSet);
            if(candidateSum <= max) {
                sets.push(candidateSet);
                sums.push(candidateSum);
            }
        }
    }

    return sums[random(sums.length, 0)];
}
