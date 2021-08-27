export function returnTen(str) {
    return Array.from(str).slice(-10);
}

export function findMax(matrix) {
    let arr =  matrix.map((arrB) => {
    return Math.max.apply(null, arrB);
    })

    return Math.max(...arr);
}

export function totalSum(matrix) {
    return matrix.flat(1).reduce((a, b) => {
    return a + b;
})}
