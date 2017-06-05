function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        console.log(currentRow);
        for (var i = 0; i < currentRow.length; i++) {
            console.log(currentRow[i]);
            sum += currentRow[i];
        }
    }

    return sum;
}

const list: number[][] = [[1, 2], [3, 4]];
const result: number = sumMatrix(list);
console.log(result);    // 3
