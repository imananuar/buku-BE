import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        console.log("its here");

        if (!username || !password) {
            res.status(400).json({"error": "Username and Password must be exist!"});
        }

        res.status(200).json({"token": "someToken"});
        
    } catch (err) {
        throw err;
    }
}

export default { login }