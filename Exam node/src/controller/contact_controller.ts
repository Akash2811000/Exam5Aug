import { ContactDomain } from "../domain/contact_domain";
import express, {Express, Request, Response} from 'express';
var router = express.Router();

class ContactController {
    static async getAllContact (req: Request , res : Response){
        const contactdomain = new ContactDomain();
        await contactdomain.getAllContact(req,res);
    }

    static async deleteContact (req: Request , res : Response){
        const contactdomain = new ContactDomain();
        await contactdomain.deleteContact(req,res);
    }

    static async addContact (req: Request , res : Response){
        const contactdomain = new ContactDomain();
        await contactdomain.addContact(req,res);
    }

    static async updateContact (req: Request , res : Response){
        const contactdomain = new ContactDomain();
        await contactdomain.updateCOntact(req,res);
    }

}

router.get('/', ContactController.getAllContact);
router.delete('/:id', ContactController.deleteContact);
router.post('/', ContactController.addContact);
router.put('/', ContactController.updateContact);
export {router}