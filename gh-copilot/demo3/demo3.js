function procesarArray(arr) {
    return arr.map((num, idx) => (idx % 2 === 0 ? num * 2 : num / 2)).filter(num => num > 10).reduce((acc, num) => acc ^ num, 0);
}