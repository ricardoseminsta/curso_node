import { Router } from "express";
import * as ApiController from "../controllers/apiController";

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/name/:name', ApiController.name);

router.post('/phrases', ApiController.createPhrase);
router.get('/phrases', ApiController.listPhrases);
router.get('/phrase/random', ApiController.randomPhrase); // fixo primeiro
router.get('/phrase/:id', ApiController.getPhrase); // dinamicos depois
router.put('/phrase/:id', ApiController.updatePhrase);
router.delete('/phrase/:id', ApiController.deletePhrase);

export default router;