import styles from "./QuantitySelector.module.css";

function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className={styles.wrapper}>
      <h3>Quantity</h3>

      <div className={styles.counter}>
        <button onClick={onDecrease} disabled={quantity === 1}>
          −
        </button>

        <span>{quantity}</span>

        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}

export default QuantitySelector;
