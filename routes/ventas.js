
const express = require('express');
const router = express.Router();
const Venta = require('../models/Venta');

router.get('/', async (req, res) => {
    const ventas = await Venta.find().sort({ createdAt: -1 });
    res.json(ventas);
});

router.post('/', async (req, res) => {
    try {
        const nuevaVenta = new Venta(req.body);
        const ventaGuardada = await nuevaVenta.save();
        res.status(201).json(ventaGuardada);
    } catch (error) {
        res.status(400).json({ error: 'Error al guardar la venta' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const ventaActualizada = await Venta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(ventaActualizada);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la venta' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Venta.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Venta eliminada' });
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar la venta' });
    }
});

module.exports = router;
