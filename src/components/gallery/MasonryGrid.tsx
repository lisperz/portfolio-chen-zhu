"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";
import styles from "./Gallery.module.scss";
import { gallery } from "@/resources";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((image, index) => (
        <div key={index} className={styles.gridItem}>
          <Image
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            src={image.src}
            alt={image.alt}
            width={image.orientation === "horizontal" ? 800 : 600}
            height={image.orientation === "horizontal" ? 450 : 800}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
          />
        </div>
      ))}
    </Masonry>
  );
}
