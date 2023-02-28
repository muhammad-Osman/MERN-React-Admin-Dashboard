import Product from "../model/Product.js";
import ProductStat from "../model/ProductStat.js";

export const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productWithStats);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
