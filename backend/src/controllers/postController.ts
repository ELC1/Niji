import { Request, Response } from 'express';

// Modelo simples de postagens
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

// Dados em memória (simulação de banco de dados)
let posts: Post[] = [
  { id: 1, title: 'Primeiro Post', content: 'Conteúdo do primeiro post', author: 'Usuário 1' },
];

// Funções CRUD

// Criar uma nova postagem
export const createPost = (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  const newPost: Post = {
    id: posts.length + 1,
    title,
    content,
    author,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
};

// Ler todas as postagens
export const getPosts = (req: Request, res: Response) => {
  res.json(posts);
};

// Ler uma única postagem por ID
export const getPostById = (req: Request, res: Response) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === parseInt(id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Postagem não encontrada' });
  }
};

// Atualizar uma postagem por ID
export const updatePost = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  const post = posts.find(p => p.id === parseInt(id));
  if (post) {
    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;
    res.json(post);
  } else {
    res.status(404).json({ message: 'Postagem não encontrada' });
  }
};

// Excluir uma postagem por ID
export const deletePost = (req: Request, res: Response) => {
  const { id } = req.params;
  posts = posts.filter(p => p.id !== parseInt(id));
  res.status(204).send();
};
