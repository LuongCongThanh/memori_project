import {Request, Response} from "express";
import Users from "../models/userModel";
import bcrypt from "bcrypt"

const authCtrl = {
    register: async (req: Request, res: Response) => {
        try {
            const {name, account, password} = req.body;
            const user = await Users.findOne({account});
            if (!user) return res.status(400).json({msg: "Email or phone number already exists."});

            const passwordHash = await bcrypt.hash(password, 12);
            const newUser = new Users({
                name, account, password: passwordHash
            });
            res.json({msg: "Register Successfully.", data: newUser});
        } catch (err) {
            // @ts-ignore
            return res.status(500).json({msg: err.message});
        }
    }
}
export default authCtrl;