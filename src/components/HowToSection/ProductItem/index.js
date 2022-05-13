import React from "react";
import styles from "./styles.module.scss";

const ProductItem = (props) => {
  const { video, image, seller, title, link } = props;

  const { name: sellerName, image: sellerImage } = seller;

  return (
    <div className={styles.productItemWrapper}>
      <a href={link} target="_blank">
        {image ? (
          <img src={image} className={styles.productImage} />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            webkitPlaysInline
            className={styles.productImage}
          >
            <source src={video} />
          </video>
        )}
      </a>
      <div className={styles.sellerWrapper}>
        <img src={sellerImage} className={styles.sellerImage} />

        <div className={styles.sellerName}>{sellerName}</div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default ProductItem;
