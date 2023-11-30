import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    price: {
      type: Number,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    photoUrl: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: false, versionKey: false }
);

const Product = model(ProductSchema,"ProductMoel", "Prodcuts", )


export default Product