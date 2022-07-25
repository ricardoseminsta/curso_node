import { Router } from "express";
import multer from "multer";
import * as ApiController from "../controllers/apiController";

const upload = multer({
    dest: './tmp'
});

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

router.post('/upload', upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 3 }
]), ApiController.uploadFile)

export default router;