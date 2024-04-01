import React from 'react';
import styles from "./style.module.css"

const PageDescriptionBox = () => {
  return <div className={styles.wrapper}>
    <h1 className={styles.title}>文字カウント</h1>
    <p className={styles.description}>文章の文字数を数えることができます。文字をカウントするのに便利です。</p>
  </div>;
};

export default PageDescriptionBox;