const express = require('express');
const router = express.Router();
const Estoque = require('../models/Estoque');

// Criar um novo registro de estoque
router.post('/', async (req, res) => {
  try {
    const estoque = await Estoque.create(req.body);
    res.status(201).json(estoque);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar estoque', error });
  }
});

// Listar todos os registros de estoque
router.get('/', async (req, res) => {
  try {
    const estoques = await Estoque.findAll();
    res.status(200).json(estoques);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar estoques', error });
  }
});

// Buscar um registro de estoque por ID
router.get('/:id', async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (estoque) {
      res.status(200).json(estoque);
    } else {
      res.status(404).json({ message: 'Estoque não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar estoque', error });
  }
});

// Atualizar um registro de estoque
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Estoque.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedEstoque = await Estoque.findByPk(req.params.id);
      res.status(200).json(updatedEstoque);
    } else {
      res.status(404).json({ message: 'Estoque não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar estoque', error });
  }
});

// Deletar um registro de estoque
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Estoque.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Estoque não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar estoque', error });
  }
});

module.exports = router;
