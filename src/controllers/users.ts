import { Request, Response } from "express";
import db = require("../data/postgres");
import credentials from "../middleware/credentials/credentials";

/**
 * All API for users
 * 
 * @param req 
 * @param res 
 */

const getAllUsers = (req: Request, res: Response) => {
    db.query('SELECT * FROM public.user', (error: any, results: any) => {
        try {
            console.log(results.rows);
            res.status(200).json(results.rows);
        } catch (err) {
            throw err;
        }
      })
}

const getUser = (req: Request, res: Response) => {
    db.query("SELECT * FROM public.user WHERE username = 'iman'", (error: any, results: any)=> {
        try {
            console.log(results.rows);
            res.status(200).json(results.rows);
        } catch (err) {
            throw err;
        }
    })
}

const deleteUser = (req: Request, res: Response) => {
    db.query(`DELETE FROM public.user WHERE username = 'izzat'`, (error: any, results: any) => {
        try {
            console.log(results.rows);
            res.status(200).json(results.rows);
        } catch (err) {
            throw err;
        }
    })
}

const createUser = (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    credentials.hashPassword(password)
        .then((hash: string) => {
            console.log(`username: ${username}, password: ${password}`);
            db.query(`INSERT INTO public.user (id, username, password) VALUES ('${credentials.uuidV4()}', '${username}', '${hash}')`, 
            (error: any, results: any) => {
                try {
                    console.log("Created User!");
                    res.status(200).json(results);
                } catch (err) {
                    throw err;
                }
            })
        })
        .catch((err: Error) => {
            throw err;
        })
}

const updateUser = (req: Request, res: Response) => {
    db.query(`UPDATE public.user SET username = 'izzat' WHERE username = 'iman'`, (error: any, results: any) => {
        try {
            console.log("Updated User!");
            res.status(200).json(results);
        } catch (err) {
            throw err;
        }
    })
}

export default { updateUser, createUser, deleteUser, getUser, getAllUsers }