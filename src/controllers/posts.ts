import { Request, Response, NextFunction } from "express";
import axios, {AxiosResponse} from "axios";
import pool = require("../data/postgres");
import uuidGenerator from "../engine/uuid/uuidGenerator";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getAllPosts = (req: Request, res: Response) => {
    pool.query('SELECT * FROM public.user', (error: any, results: any) => {
        try {
            console.log(results.rows);
            res.status(200).json(results.rows);
        } catch (err) {
            throw err;
        }
      })
}

const getPost = (req: Request, res: Response) => {
    pool.query("SELECT * FROM public.user WHERE username = 'iman'", (error: any, results: any)=> {
        try {
            console.log(results.rows);
            res.status(200).json(results.rows);
        } catch (err) {
            throw err;
        }
    })
}

const deletePost = (req: Request, res: Response) => {
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
const createPost = (req: Request, res: Response) => {
    pool.query(`INSERT INTO public.user (id, username, password) VALUES ('23fe0362-45ef-46e4-84a3-0b0d8475330d', 'izzat', 'izzat')`, (error: any, results: any) => {
        try {
            console.log("Created post!");
            console.log( uuidGenerator.generateUuidV4() );
            res.status(200).json(results);
        } catch (err) {
            throw err;
        }
    })
}

const udpatePost = (req: Request, res: Response) => {
    pool.query(`UPDATE public.user SET username = 'izzat' WHERE username = 'iman'`, (error: any, results: any) => {
        try {
            console.log("Updated post!");
            res.status(200).json(results);
        } catch (err) {
            throw err;
        }
    })
}

export default { udpatePost, createPost, deletePost, getPost, getAllPosts }