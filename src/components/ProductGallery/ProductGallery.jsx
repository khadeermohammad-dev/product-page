import { useState } from "react";
import styles from "./ProductGallery.module.css";

function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={styles.gallery}>
      <img
        className={styles.mainImage}
        src={selectedImage}
        alt="Selected product"
      />

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={index}
            className={`${styles.thumbnail} ${
              selectedImage === image ? styles.active : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Product thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
