const findOptimizedRowPath = require('../findOptimizedRowPath');

test('Teste com a entrada:[[1,3,3],[2,1,4],[0,6,4]]', () => {
    const total = []
    const matriz = [
        [1,3,3],
        [2,1,4],
        [0,6,4]
    ]

    matriz.forEach((element, index) => {0
        total.push(findOptimizedRowPath.find(matriz, index));
    });

    expect(Math.max(...total)).toBe(12);
})

test('Teste com a entrada:[[1, 3, 1, 5],[2, 2, 4, 1],[5, 0, 2, 3],[0, 6, 1, 2]]', () => {
    const total = []
    const matriz = [
        [1, 3, 1, 5],
        [2, 2, 4, 1],
        [5, 0, 2, 3],
        [0, 6, 1, 2]
    ]

    matriz.forEach((element, index) => {0
        total.push(findOptimizedRowPath.find(matriz, index));
    });

    expect(Math.max(...total)).toBe(16);
})

test('Teste com a entrada:[[10, 33, 13, 15],[22, 21, 4, 1],[5, 0, 2, 3],[0, 6, 14, 2]]', () => {
    const total = []
    const matriz = [
        [10, 33, 13, 15],
        [22, 21, 4, 1],
        [5, 0, 2, 3],
        [0, 6, 14, 2]
    ]

    matriz.forEach((element, index) => {0
        total.push(findOptimizedRowPath.find(matriz, index));
    });

    expect(Math.max(...total)).toBe(83);
})