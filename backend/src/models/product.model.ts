import mongoose, { Schema } from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    name: String,
    quantity: Number,
    remaining: Number,
    sellerId: { type: Schema.Types.ObjectId, ref: 'User' },
    status: String,
    price: Number,
    review: [String],
  },
  { versionKey: false }
);

ProductSchema.set('toJSON', {
  transform: function (doc: any, ret: any, options: any) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export const Product = mongoose.model('Product', ProductSchema);
