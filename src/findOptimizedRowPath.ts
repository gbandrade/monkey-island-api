class FindOptimizedRowPath {

    find(matriz, row) { 
        let aux = 0
        let paths = [
            [row - 1, matriz[row - 1]? matriz[row - 1][aux + 1] + matriz[row][aux]:null],
            [row, matriz[row][aux] + matriz[row][aux + 1]],
            [row + 1, matriz[row + 1]? matriz[row + 1][aux + 1] + matriz[row][aux]:null],
        ];
        
        paths = paths.filter(element=>element[1])
        
        if(paths.length === 0) return matriz[row][aux]
        
        aux++

        while(matriz[row][aux + 1] !== undefined){
            let newPaths = []
            
            paths.forEach((element,index) => {
                let values = [
                    [element[0] - 1, matriz[element[0] - 1]? element[1] + matriz[element[0] - 1][aux + 1]:null],
                    [element[0], element[1] + matriz[element[0]][aux + 1]],
                    [element[0] + 1, matriz[element[0] + 1]? element[1] + matriz[element[0] + 1][aux + 1]:null],
                ]
                values = values.filter(element=>element[1])
                newPaths[index] = values
            })

            paths = newPaths.reduce((i, value) => i.concat(value), [])

            aux++
        }
        return Math.max(...paths.map(element=>element[1]))
    }

}

module.exports = new FindOptimizedRowPath();