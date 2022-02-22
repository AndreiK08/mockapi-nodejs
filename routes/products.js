import express from 'express';
import Product from '../models/Products.js';

const router = express.Router();

router.get('/', (req, res) => res.send('Test Router /'));
router.post('/', async (req, res) => {
	const product = new Product({
		name: req.body.name,
		price: req.body.price,
		description: req.body.description,
		imageURL: req.body.imageURL,
	});

	// save to DB
	try {
		const savedProduct = await product.save();
		res.json(savedProduct);
	} catch (error) {
		res.json({ message: error });
	}
});

export default router;

