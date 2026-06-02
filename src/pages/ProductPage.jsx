import { useState } from "react";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import SizeSelector from "../components/SizeSelector";
import ColorSelector from "../components/ColorSelector";
import QuantitySelector from "../components/QuantitySelector";
import RelatedProducts from "../components/RelatedProducts";
import Reviews from "../components/Reviews";

import { product, relatedProducts, reviews } from "../data/productData";

function ProductPage() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(
      `Added to cart: ${product.name}, Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}`,
    );
  };

  return (
    <main className="page">
      <section className="product-layout">
        <ProductGallery images={product.images} />

        <div>
          <ProductInfo product={product} />

          <div className="selection-card">
            <SizeSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />

            <ColorSelector
              colors={product.colors}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
            />

            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity(quantity + 1)}
              onDecrease={() => setQuantity(quantity - 1)}
            />

            <button className="cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <Reviews reviews={reviews} />

      <RelatedProducts products={relatedProducts} />
    </main>
  );
}

export default ProductPage;
