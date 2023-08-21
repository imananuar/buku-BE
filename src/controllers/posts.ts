import { Request, Response, NextFunction } from "express";
import axios, {AxiosResponse} from "axios";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// getting all posts
const getPosts = async(req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    })
}