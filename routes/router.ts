
import { Router, Request, Response } from 'express';
import Server from '../classes/server';


const router = Router();


router.get('/mensajes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: 'GET - Todo OK!!!'
  })
})


router.post("/mensajes", (req: Request, res: Response) => {
  const { cuerpo, de } = req.body;

  const payload = { 
    de,
    cuerpo
  }

  const server = Server.instance;

  server.io.emit( 'mensaje-nuevo', payload );

  res.json({
    ok: true,
    cuerpo,
    de
  })
})


router.post("/mensajes/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { cuerpo, de } = req.body;

  const payload = { 
    de,
    cuerpo
  }

  const server = Server.instance;

  server.io.in( id ).emit( 'mensaje-privado', payload );

  res.json({
    ok: true,
    cuerpo,
    de,
    id
  })
})


export default router;

