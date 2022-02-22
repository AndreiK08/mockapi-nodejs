import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	longDescription: {
		type: String,
		required: false,
	},
	imageURL: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('Product', ProductSchema);
