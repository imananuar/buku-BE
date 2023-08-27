import express from 'express';
import controller from '../controllers/posts';

const router = express.Router();

router.get('/api/allPosts', controller.getAllPosts);
router.get('/api/getPost', controller.getPost);
router.delete('/api/deletePost', controller.deletePost);
router.post('/api/createPost', controller.createPost);
router.put('/api/updatePost', controller.udpatePost);

export = router;