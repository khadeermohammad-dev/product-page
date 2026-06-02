import styles from "./Reviews.module.css";

function Reviews({ reviews }) {
  return (
    <section className={styles.section}>
      <h2>Customer Reviews</h2>

      <div className={styles.grid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.rating}>{review.rating}</div>
            <h3>{review.name}</h3>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
