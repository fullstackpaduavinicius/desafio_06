const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

// Middleware para verificar se os dados do produto estão completos
const validateProduto = (req, res, next) => {
  const { nome, preco } = req.body;
  if (!nome || !preco) {
    return res.status(400).json({ error: 'Nome e preço são obrigatórios.' });
  }
  next();
};

// Criar um novo produto
router.post('/', validateProduto, async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro ao criar produto. Verifique o servidor.' });
  }
});

// Listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ error: 'Erro ao listar produtos. Verifique o servidor.' });
  }
});

// Buscar um produto específico
router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Erro ao buscar produto. Verifique o servidor.' });
  }
});

// Atualizar um produto
router.put('/:id', validateProduto, async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.update(req.body);
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Erro ao atualizar produto. Verifique o servidor.' });
  }
});

// Excluir um produto
router.delete('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.destroy();
      res.status(200).json({ message: 'Produto excluído.' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    res.status(500).json({ error: 'Erro ao excluir produto. Verifique o servidor.' });
  }
});

module.exports = router;
