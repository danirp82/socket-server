import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request ,res: Response) => {

    res.json({
        ok: true, 
        message: 'Get ok'
    })
});

router.post('/mensajes', (req: Request ,res: Response) => {

    res.json({
        ok: true, 
        message: 'Post ok'
    })
});

export default router;