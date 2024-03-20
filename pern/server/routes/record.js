import express from 'express';
const router = express.Router();
import Record from '../db/models/record.js';
import { v1 as uuidv1 } from 'uuid';

router.get('/', async (req, res) => {
  try {
    const records = await Record.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const record = await Record.findByPk(req.params.id);
    if (record) {
      res.json(record);
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newRecord = await Record.create({ _id: uuidv1(), ...req.body });
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const [updated] = await Record.update(req.body, {
      where: { _id: req.params.id },
    });
    if (updated) {
      const updatedRecord = await Record.findByPk(req.params.id);
      res.status(200).json(updatedRecord);
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Record.destroy({
      where: { _id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export { router as recordsRouter };
