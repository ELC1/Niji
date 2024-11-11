import express from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost } from '../controllers/postController';

const router = express.Router();

router.post('/posts', createPost);          // Criar uma postagem
router.get('/posts', getPosts);             // Obter todas as postagens
router.get('/posts/:id', getPostById);      // Obter uma postagem por ID
router.put('/posts/:id', updatePost);       // Atualizar uma postagem por ID
router.delete('/posts/:id', deletePost);    // Excluir uma postagem por ID

export default router;
