import { Router, Request, Response } from 'express';
const findOptimizedRowPath = require('../findOptimizedRowPath');

const router: Router = Router();

router.post('/', (req: Request, res: Response) => {    
    let matriz = req.body.matriz;
    const total = [];
    matriz.forEach((element, index) => {
        total.push(findOptimizedRowPath.find(matriz, index));
    });

    res.status(200).send({
        total: Math.max(...total)
    });
});

export const SearchBananasController: Router = router;