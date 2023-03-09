import { Router } from "express";
import { ContactController } from "../controllers/ContactController";

export const contactsRouter = Router()
const contactCtrl= new ContactController()

contactsRouter.post('/',(req,res) => contactCtrl.save(req,res))

