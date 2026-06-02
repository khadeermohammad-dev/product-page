import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />

      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
