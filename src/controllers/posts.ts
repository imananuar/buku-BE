import { Request, Response, NextFunction } from "express";
import pool = require("../data/postgres");
import uuidGenerator from "../engine/uuid/uuidGenerator";

const getAllUsers = (req: Request, res: Response) => {
    pool.query('SELECT * FROM public.user', (error: any, results: any) => {
        try {
            console.log(results.rows);
            res.status(200).json(results.rows);
        } catch (err) {
            throw err;
        }
      })
}

const getUser = (req: Request, res: Response) => {
    pool.query("SELECT * FROM public.user WHERE username = 'iman'", (error: any, results: any)=> {
        try {
            console.log(results.rows);
            res.status(200).json(results.rows);
        } catch (err) {
            throw err;
        }
    })
}

const deleteUser = (req: Request, res: Response) => {
    pool.query(`DELETE FROM public.user WHERE username = 'izzat'`, (error: any, results: any) => {
        try {
            console.log(results.rows);
            res.status(200).json(results.rows);
        } catch (err) {
            throw err;
        }
    })
}

// We are doing this now
const createUser = (req: Request, res: Response) => {
    pool.query(`INSERT INTO public.user 
    (id, username, password) VALUES 
    ('${uuidGenerator.uuidV4()}', 'iman', 'iman')`, 
    (error: any, results: any) => {
        try {
            console.log("Created User!");
            console.log(results);
            res.status(200).json(results);
        } catch (err) {
            throw err;
        }
    })
}

const udpateUser = (req: Request, res: Response) => {
    pool.query(`UPDATE public.user SET username = 'izzat' WHERE username = 'iman'`, (error: any, results: any) => {
        try {
            console.log("Updated User!");
            res.status(200).json(results);
        } catch (err) {
            throw err;
        }
    })
}

export default { udpateUser, createUser, deleteUser, getUser, getAllUsers }