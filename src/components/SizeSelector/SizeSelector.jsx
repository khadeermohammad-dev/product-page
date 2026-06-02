import styles from "./SizeSelector.module.css";

function SizeSelector({ sizes, selectedSize, onSelectSize }) {
  return (
    <div className={styles.wrapper}>
      <h3>Select Size</h3>

      <div className={styles.options}>
        {sizes.map((size) => (
          <button
            key={size}
            className={`${styles.sizeBtn} ${
              selectedSize === size ? styles.active : ""
            }`}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
