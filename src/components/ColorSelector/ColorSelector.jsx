import styles from "./ColorSelector.module.css";

const colorMap = {
  Black: "#111827",
  White: "#ffffff",
  Blue: "#2563eb",
  Red: "#dc2626",
};

function ColorSelector({ colors, selectedColor, onSelectColor }) {
  return (
    <div className={styles.wrapper}>
      <h3>Select Color</h3>

      <div className={styles.options}>
        {colors.map((color) => (
          <button
            key={color}
            className={`${styles.colorBtn} ${
              selectedColor === color ? styles.active : ""
            }`}
            style={{ backgroundColor: colorMap[color] }}
            onClick={() => onSelectColor(color)}
            title={color}
            aria-label={color}
          />
        ))}
      </div>

      <p className={styles.selected}>Selected: {selectedColor}</p>
    </div>
  );
}

export default ColorSelector;
