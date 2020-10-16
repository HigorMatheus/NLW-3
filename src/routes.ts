import {Router} from 'express';
import multer from 'multer';
import OrfanagesController from './Controllers/OrfanagesController';
import uploadConfig from './config/uploud'
const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', OrfanagesController.index)
routes.get('/orphanages/:id', OrfanagesController.show)
routes.post('/orphanages', upload.array('images') ,OrfanagesController.create)


export default routes