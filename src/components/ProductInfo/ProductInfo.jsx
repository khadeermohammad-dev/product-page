import styles from "./ProductInfo.module.css";

function ProductInfo({ product }) {
  return (
    <div className={styles.info}>
      <span className={styles.badge}>Best Seller</span>

      <h1>{product.name}</h1>

      <div className={styles.rating}>⭐ {product.rating} / 5</div>

      <h2>{product.price}</h2>

      <p>{product.description}</p>

      <div className={styles.specs}>
        <h3>Specifications</h3>
        <ul>
          {product.specifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductInfo;
