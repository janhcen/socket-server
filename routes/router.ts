
import { Router, Request, Response } from 'express';


const router = Router();


router.get('/mensajes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: 'GET - Todo OK!!!'
  })
})


router.post("/mensajes", (req: Request, res: Response) => {
  const { cuerpo, de } = req.body;

  res.json({
    ok: true,
    cuerpo,
    de
  });
})


router.post("/mensajes/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { cuerpo, de } = req.body;

  res.json({
    ok: true,
    cuerpo,
    de,
    id
  });
});


export default router;

