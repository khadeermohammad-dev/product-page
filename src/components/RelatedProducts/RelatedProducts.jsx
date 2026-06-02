import ProductCard from "../ProductCard";
import styles from "./RelatedProducts.module.css";

function RelatedProducts({ products }) {
  return (
    <section className={styles.section}>
      <h2>Related Products</h2>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
