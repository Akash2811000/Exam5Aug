import { contactmodel } from "../model/contact";
import express ,{Express,Request,Response} from  'express'

class ContactDomain {
    async getAllContact(req: Request, res: Response) {
        var contacData = await contactmodel.find();
        if (contacData.length == 0) {
            res.send([])
        } else {
            res.send(contacData);
        }

    }

    async deleteContact(req: Request, res: Response) {

        console.log(req.params.id)
        var deletedata: any = await contactmodel.findOne({ _id: req.params.id });
        if (deletedata == null) {
            res.send("No contact found")
        } else {
            await contactmodel.deleteOne({ _id: req.params.id }).then((success: any) => {
                res.send('success deleted')
                res.end();
            })

        }
    }

    async addContact(req: Request, res: Response) {
        console.log(req.body);
        var data = new contactmodel(req.body);
        try {
            await data.save();
            res.send("data added")
        }
        catch (err: any) {
            res.send(err.message);
        }
    }


    async updateCOntact(req: Request, res: Response) {
        try {
            var data = req.body;
            console.log(data);
            await contactmodel.updateOne({ _id: data._id },data)
            res.send('update saved success');
            res.end();

        } catch (e: any) {
            res.send(e.message);
            res.end();

        }

    }
}

export {ContactDomain};